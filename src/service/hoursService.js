/**
 * Service pour récupérer les horaires depuis Google Business Profile (via Places API)
 * Pour l'instant, on utilise des données en dur comme fallback ou simulation.
 * L'utilisateur devra fournir une clé API Google Maps pour l'automatisation.
 */

import axios from 'axios';

// ID de l'établissement "Craqueline" sur Google (trouvé dans le lien Maps fourni)
// https://www.google.com/maps/place/4+Rue+Marceau,+34000+Montpellier/@43.6080465,3.8729604,19.75z/data=!4m6!3m5!1s0x12b6afa85553d009:0x8dcb3dc730c52416!8m2!3d43.6081004!4d3.8731839!16s%2Fg%2F11q2vwqkmm
const PLACE_ID = 'ChIJY8aYKQCvtg0ROvt1YgfuXNE';

// En environnement de prod, il faudrait utiliser une variable d'env
const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY || '';

let cachedBusinessHours = null;
let pendingBusinessHoursRequest = null;

const formatSpecialDate = (dateString) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;

  const dayLabel = new Intl.DateTimeFormat('fr-FR', {weekday: 'long'}).format(date);
  const dateLabel = new Intl.DateTimeFormat('fr-FR', {day: '2-digit', month: '2-digit'}).format(date);

  return `${dayLabel} ${dateLabel}`;
};

const normalizeDayName = (dayText = '') => {
  return dayText
      .split(':')[0]
      ?.trim()
      .toLowerCase();
};

const createExceptionalClosureMessage = (dayOrDateLabel) => {
  if (!dayOrDateLabel) return null;
  return `${dayOrDateLabel} : Fermeture exceptionnelle`;
};

const extractExceptionalClosures = (currentOpeningHours, openingHours) => {
  const specialDays = currentOpeningHours?.special_days || [];

  const closuresFromSpecialDays = specialDays
      .filter((specialDay) => specialDay && specialDay.exceptional_hours === false)
      .map((specialDay) => {
        const formattedDate = formatSpecialDate(specialDay.date);
        return createExceptionalClosureMessage(formattedDate);
      })
      .filter(Boolean);

  const regularWeekdayText = Array.isArray(openingHours?.weekday_text) ? openingHours.weekday_text : [];
  const currentWeekdayText = Array.isArray(currentOpeningHours?.weekday_text) ? currentOpeningHours.weekday_text : [];

  if (!regularWeekdayText.length || !currentWeekdayText.length) {
    return closuresFromSpecialDays;
  }

  const regularByDay = new Map();
  regularWeekdayText.forEach((line) => {
    const dayName = normalizeDayName(line);
    if (dayName) regularByDay.set(dayName, line.toLowerCase());
  });

  const closuresFromWeekDiff = currentWeekdayText
      .filter((line) => typeof line === 'string' && line.toLowerCase().includes('fermé'))
      .map((line) => {
        const dayName = normalizeDayName(line);
        if (!dayName) return null;
        const regularLine = regularByDay.get(dayName);
        if (!regularLine || regularLine.includes('fermé')) return null;
        const dayLabel = line.split(':')[0]?.trim();
        return createExceptionalClosureMessage(dayLabel);
      })
      .filter(Boolean);

  return [...new Set([...closuresFromSpecialDays, ...closuresFromWeekDiff])];
};

const hasExceptionalSchedule = (currentOpeningHours) => {
  const specialDays = currentOpeningHours?.special_days || [];
  return specialDays.length > 0;
};

export const getBusinessHours = async () => {
  if (cachedBusinessHours) {
    return cachedBusinessHours;
  }

  if (pendingBusinessHoursRequest) {
    return pendingBusinessHoursRequest;
  }

  const fetchBusinessHours = async () => {
    // Si pas de clé API, on renvoie les horaires par défaut et calculons l'état localement
    if (!API_KEY) {
      console.warn("Google Places API Key manquante. Utilisation des horaires par défaut.");
      const defaultHours = getDefaultHours();
      return {
        weekdayText: defaultHours,
        regularWeekdayText: defaultHours,
        isOpen: calculateIsOpen(defaultHours),
        exceptionalClosures: [],
        hasExceptionalSchedule: false
      };
    }

    try {
      const response = await axios.get(`/google/maps/api/place/details/json`, {
        params: {
          place_id: PLACE_ID,
          fields: 'opening_hours,current_opening_hours',
          key: API_KEY,
          language: 'fr'
        }
      });

      if (response.data && response.data.result && (response.data.result.opening_hours || response.data.result.current_opening_hours)) {
        const openingHours = response.data.result.opening_hours;
        const currentOpeningHours = response.data.result.current_opening_hours;

        return {
          weekdayText: currentOpeningHours?.weekday_text || openingHours?.weekday_text || getDefaultHours(),
          regularWeekdayText: openingHours?.weekday_text || getDefaultHours(),
          isOpen: currentOpeningHours?.open_now ?? openingHours?.open_now ?? calculateIsOpen(getDefaultHours()),
          exceptionalClosures: extractExceptionalClosures(currentOpeningHours, openingHours),
          hasExceptionalSchedule: hasExceptionalSchedule(currentOpeningHours)
        };
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des horaires Google :", error);
    }

    const defaultHours = getDefaultHours();
    return {
      weekdayText: defaultHours,
      regularWeekdayText: defaultHours,
      isOpen: calculateIsOpen(defaultHours),
      exceptionalClosures: [],
      hasExceptionalSchedule: false
    };
  };

  pendingBusinessHoursRequest = fetchBusinessHours()
      .then((data) => {
        cachedBusinessHours = data;
        return data;
      })
      .finally(() => {
        pendingBusinessHoursRequest = null;
      });

  return pendingBusinessHoursRequest;
};

/**
 * Calcule si la boutique est ouverte en fonction des horaires par défaut
 * @param {Array} hours
 * @returns {Boolean}
 */
const calculateIsOpen = (hours) => {
  const now = new Date();
  const dayIndex = now.getDay(); // 0 = Dimanche, 1 = Lundi, ...

  // Dans hours[], Lundi est à l'index 0, Mardi à 1... Dimanche à 6
  // dayIndex: 0(Dim) -> index 6, 1(Lun) -> index 0, 2(Mar) -> index 1...
  const mappedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  const todayHours = hours[mappedIndex];

  if (todayHours.includes("Fermé")) return false;

  // Format attendu : "Jour: HH:MM – HH:MM" ou "Jour: HH:MM – HH:MM, HH:MM – HH:MM"
  const timePart = todayHours.split(": ")[1];
  if (!timePart) return false;

  const periods = timePart.split(", ");
  const currentTime = now.getHours() * 60 + now.getMinutes();

  for (const period of periods) {
    const times = period.split(" – ");
    if (times.length === 2) {
      const start = parseTime(times[0]);
      const end = parseTime(times[1]);
      if (currentTime >= start && currentTime < end) return true;
    }
  }

  return false;
};

const parseTime = (timeStr) => {
  const [hours, minutes] = timeStr.trim().split(":").map(Number);
  return hours * 60 + minutes;
};

export const getDefaultHours = () => {
  return [
    "Lundi: 13:30 – 17:30",
    "Mardi: 10:00 – 19:00",
    "Mercredi: 10:00 – 19:00",
    "Jeudi: 10:00 – 19:00",
    "Vendredi: 10:00 – 19:00",
    "Samedi: 10:00 – 19:00",
    "Dimanche: Fermé"
  ];
};

/**
 * Formate les horaires pour l'affichage groupé (ex: Du Mardi au Samedi)
 * @param {Array} weekdayText
 */
export const groupHours = (weekdayText) => {
  // Cette fonction peut être améliorée pour regrouper les jours identiques
  // Pour l'instant, on retourne juste les lignes formatées
  return weekdayText;
};
