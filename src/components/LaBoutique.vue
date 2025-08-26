<template>
  <h2 class="pb-2">LA BOUTIQUE</h2>
  <v-spacer class="padding-v-spacer-h2"></v-spacer>
  <v-row cols="12" class="px-8 margin-center">
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="align-content-center">

      <!--   ADRESSE   -->
      <v-row>
        <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" align-self="center">
          <v-icon size="50" class="mr-2">mdi-map-marker</v-icon>
        </v-col>
        <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10" align-self="center">
          <a
              style="text-decoration: none; color: black;"
              target="_blank"
              href="https://www.google.com/maps/place/4+Rue+Marceau,+34000+Montpellier/@43.6080465,3.8729604,19.75z/data=!4m6!3m5!1s0x12b6afa85553d009:0x8dcb3dc730c52416!8m2!3d43.6081004!4d3.8731839!16s%2Fg%2F11q2vwqkmm?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D">
            <p>4 rue marceau, 34000 Montpellier</p>
          </a>
        </v-col>
      </v-row>

      <!--   HORAIRE   -->
      <v-row>
        <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" align-self="center">
          <v-icon size="50" class="mr-2">mdi-clock-outline</v-icon>
        </v-col>
        <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10" justify="center" align-self="center">
          <p class="pb-2">Du Mardi au Samedi de 10h à 19h</p>
          <p class="pb-2">Dimache de 9h à 13h</p>
          <p>Fermé le Lundi</p>
        </v-col>
      </v-row>

      <!--      CONTACT     -->
      <v-row>
        <v-col cols="12" xs="2" sm="2" md="2" lg="2" xl="2" align-self="center">
          <v-icon size="50" class="mr-2">mdi-email-outline</v-icon>
        </v-col>
        <v-col cols="12" xs="10" sm="10" md="10" lg="10" xl="10" justify="center" align-self="center">
          <v-btn variant="outlined">Nous Contacter</v-btn>
        </v-col>
      </v-row>


      <!--      RESEAUX    -->
      <v-row class="pt-8">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align-self="center">
          <h3> SUIVEZ NOUS </h3>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" align-self="center">
          <v-btn
              href="https://www.facebook.com/profile.php?id=61577574747182"
              target="_blank"
              aria-label="Ouvrir Facebook (nouvel onglet)"
              class="mr-2"
              icon
              color="black"
              elevation="0">
            <v-icon size="35">mdi-facebook</v-icon>
          </v-btn>

          <v-btn
              href="https://www.instagram.com/craqueline.chou/"
              target="_blank"
              aria-label="Ouvrir Instagram (nouvel onglet)"
              class="mr-2"
              icon
              color="black"
              elevation="0">
            <v-icon size="35">mdi-instagram</v-icon>
          </v-btn>

          <v-btn
              href="https://www.tiktok.com/@craqueline.chou"
              target="_blank"
              aria-label="Ouvrir TikTok (nouvel onglet)"
              class="mr-2"
              icon
              color="black"
              elevation="0">
            <i class="fa-brands fa-tiktok fa-xl"></i>
          </v-btn>
          <v-btn
              disabled
              class="mr-2"
              icon
              color="black"
              elevation="0">
            <v-icon size="35">mdi-linkedin</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex justify-center">
      <v-img src="@/assets/photo/devanture.png" max-width="30em"></v-img>
    </v-col>
  </v-row>
</template>
<script setup>

</script>
<style scoped>
h3 {
  font-size: 2em;
  font-weight: 500;
}

h2 {
  color: black;
  font-size: 7em;
  font-weight: 200;
  position: absolute;
  padding-top: 5vh;
  margin-left: -10vh;
}

.padding-v-spacer-h2 {
  padding-bottom: 20vh;
}

.margin-center {
  margin-left: 10vh;
  margin-right: 10vh;
}

@media (max-width: 150dvh) {
  h2 {
    color: black;
    font-size: 5em;
    position: absolute;
    padding-top: 5vh;
    margin-left: 0;
  }

  .padding-v-spacer-h2 {
    padding-bottom: 15vh;
    padding-top: 5vh;
  }
  .margin-center {
    margin-left: 0vh;
    margin-right: 0vh;
  }
}
</style>
