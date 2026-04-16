/**
 * Service pour récupérer les horaires depuis Google Business Profile (via Places API)
 * Pour l'instant, on utilise des données en dur comme fallback ou simulation.
 * L'utilisateur devra fournir une clé API Google Maps pour l'automatisation.
 */

import axios from 'axios';

// ID de l'établissement "Craqueline" sur Google (trouvé dans le lien Maps fourni)
// https://www.google.com/maps/place/4+Rue+Marceau,+34000+Montpellier/@43.6080465,3.8729604,19.75z/data=!4m6!3m5!1s0x12b6afa85553d009:0x8dcb3dc730c52416!8m2!3d43.6081004!4d3.8731839!16s%2Fg%2F11q2vwqkmm
// Le Place ID semble être ChIJCdBTVaisuhIRASTRMMc9y40 (souvent dans les data-item-id ou via l'outil Place ID Finder)
const PLACE_ID = 'ChIJCdBTVaisuhIRASTRMMc9y40'; 

// En environnement de prod, il faudrait utiliser une variable d'env
const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY || ''; 

export const getBusinessHours = async () => {
  // Si pas de clé API, on renvoie les horaires par défaut
  if (!API_KEY) {
    console.warn("Google Places API Key manquante. Utilisation des horaires par défaut.");
    return getDefaultHours();
  }

  try {
    // Note: En client-side pur, cela peut poser des problèmes de CORS. 
    // Idéalement, cet appel devrait passer par un proxy ou un backend (Serverless Function).
    // Mais pour une intégration simple, on utilise l'endpoint standard.
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
      params: {
        place_id: PLACE_ID,
        fields: 'opening_hours',
        key: API_KEY,
        language: 'fr'
      }
    });

    if (response.data && response.data.result && response.data.result.opening_hours) {
      return response.data.result.opening_hours.weekday_text;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des horaires Google :", error);
  }

  return getDefaultHours();
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
