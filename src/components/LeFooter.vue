<template>

  <v-row class="bg-footer px-10 py-8">
    <AffichePhoto :is-mobile="isMobile"></AffichePhoto>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="px-4 pb-4" justify="center">
      <v-row>
        <h3>ADRESSE</h3>
      </v-row>
      <v-row>
        <a
            style="text-decoration: none; color: black;"
            target="_blank"
            href="https://www.google.com/maps/place/4+Rue+Marceau,+34000+Montpellier/@43.6080465,3.8729604,19.75z/data=!4m6!3m5!1s0x12b6afa85553d009:0x8dcb3dc730c52416!8m2!3d43.6081004!4d3.8731839!16s%2Fg%2F11q2vwqkmm?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D">
          <p>4 rue marceau, 34000 Montpellier</p>
        </a>
      </v-row>
      <v-row>
        <h3>HORAIRES</h3>
      </v-row>
      <v-row>
        <p>
          <span v-for="(day, index) in groupedHours" :key="index">
            {{ day }}<br/>
          </span>
        </p>
      </v-row>
      <v-row v-if="hasExceptionalSchedule" class="mt-5">
        <p>
          <span class="font-weight-bold">Horaires exceptionnels en cours : ce n'est pas le
            <a href="#" @click.prevent="showRegularHoursDialog = true">planning habituel</a>
            de chaque semaine.
          </span>
        </p>
      </v-row>
      <v-dialog v-model="showRegularHoursDialog" max-width="500">
        <v-card>
          <v-card-title>Planning habituel</v-card-title>
          <v-card-text>
            <p v-for="(day, index) in regularHours" :key="`footer-regular-${index}`" class="pb-1 text-black">
              {{ day }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn variant="text" @click="showRegularHoursDialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="px-4 pb-4" justify="center">
      <v-row>
        <h3>CONTACT</h3>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <p>Email :</p>
          </v-row>
          <v-row>
            <p>Tél :</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <a href="mailto:contact@craqueline.fr">
              contact@craqueline.fr
            </a>
          </v-row>
          <v-row>
            <a href="tel:+33430968462">
              04 30 96 84 62
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-btn
            size="x-small"
            href="https://www.google.com/search?sa=X&sca_esv=69ce569418db93e5&sxsrf=AE3TifMpkJmyYEnSBK6Q_iGfpadQKJJ_GA:1765796238854&q=Craqueline+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDWwMDO0NDE1MzcyszC2tLQ0NtjAyPiKkd-5KLGwNDUnMy9VwbEss3gRK7oIAMsNwbY_AAAA&rldimm=15086194567268399930&tbm=lcl&hl=fr-FR&ved=2ahUKEwih6b_Mt7-RAxUsSaQEHXWZENkQ9fQKegQILRAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            aria-label="Ouvrir Google Avis (nouvel onglet)"
            class="mr-2"
            icon
            color="white"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-google</v-icon>
        </v-btn>

        <v-btn
            size="x-small"
            href="https://www.facebook.com/profile.php?id=61577574747182"
            target="_blank"
            aria-label="Ouvrir Facebook (nouvel onglet)"
            class="mr-2"
            icon
            color="white"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-facebook</v-icon>
        </v-btn>

        <v-btn
            size="x-small"
            href="https://www.instagram.com/craqueline.chou/"
            target="_blank"
            aria-label="Ouvrir Instagram (nouvel onglet)"
            class="mr-2"
            icon
            color="white"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
            size="x-small"
            href="https://www.tiktok.com/@craqueline.chou"
            target="_blank"
            aria-label="Ouvrir TikTok (nouvel onglet)"
            class="mr-2"
            icon
            color="white"
            elevation="0">
          <i style="color: rgb(var(--v-theme-secondary))" class="fa-brands fa-tiktok fa-xl"></i>
        </v-btn>
      </v-row>
    </v-col>
    <v-spacer cols="12" xs="0" sm="0" md="1" lg="2" xl="2"></v-spacer>
    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="px-4" justify="center">
      <v-row>
        <v-btn
            variant="text"
            @click="scrollTo('#section-1')">
          <p>Accueil</p>
        </v-btn>
      </v-row>
      <v-row>
        <v-tooltip text="En cours de préparation... comme nos choux ! 👨‍🍳">
          <template #activator="{ props }">
            <span v-bind="props">
              <v-btn
                  variant="text"

                  disabled
              >
                <p>La Carte</p>
              </v-btn>
            </span>
          </template>
        </v-tooltip>
      </v-row>
      <v-row>
        <v-btn
            variant="text"
            @click="goTo('Contact')">
          <p>Contact</p>
        </v-btn>
      </v-row>
      <v-spacer class="py-4"></v-spacer>
      <v-row>
        <v-btn
            variant="text"
        >
          <p>Mentions légales</p>
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
            variant="text"
        >
          <p>Politique de confidentialité</p>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import {useRouter} from 'vue-router';
import AffichePhoto from "@/components/AffichePhoto.vue";
import {onMounted, ref} from "vue";
import {getBusinessHours} from "@/service/hoursService.js";

const router = useRouter();
const emits = defineEmits(['onClick'])
const props = defineProps({isMobile: Boolean})

const groupedHours = ref([]);
const hasExceptionalSchedule = ref(false);
const showRegularHoursDialog = ref(false);
const regularHours = ref([]);

onMounted(async () => {
  const data = await getBusinessHours();
  groupedHours.value = data?.weekdayText || [];
  hasExceptionalSchedule.value = data?.hasExceptionalSchedule === true;
  regularHours.value = data?.regularWeekdayText || [];
})

function scrollTo(section) {
  emits('onClick', section)
}

function goTo(page) {
  router.push({name: page})
}
</script>

<style scoped>
.bg-footer {
  background-color: rgb(var(--v-theme-secondary));
}

h3 {
  font-size: 2em;
  font-weight: 550;
  color: white;
}

p {
  color: white;
}

a {
  color: white;
}
</style>
