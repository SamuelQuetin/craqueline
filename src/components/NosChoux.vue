<template>
  <h2 class="pb-2">Nos Choux</h2>
  <v-row cols="12">
    <AffichePhoto></AffichePhoto>
  </v-row>
  <v-row>
    <v-col>
      <h3 class="mb-2">SAVOIR - FAIRE ARTISANAL</h3>
      <p> Chez Craqueline, nous produisons artisanalement chaque jour une vaste gamme de chou à la crème.</p>
      <p> Adoptant une démarche responsable, nous respectons la saisonnalité les produits, c’est pourquoi certains parfums laissent place à d’autre au fil de l’année.</p>
    </v-col>
  </v-row>
  <v-row cols="12">
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="d-flex justify-center">
      <v-img src="@/assets/photo/NOS_BOISSONS_CHAUDES_AFFICHE.png" max-width="40em"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="d-flex justify-center">
      <v-img src="@/assets/photo/NOS_BOISSONS_FRAICHES_AFFICHE.png" max-width="40em"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="d-flex justify-center">
      <v-img src="@/assets/photo/NOS_CHOUX_AFFICHE.png" max-width="40em"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="d-flex justify-center">
      <v-img src="@/assets/photo/NOS_SPECIALITE_AFFICHE.png" max-width="40em"></v-img>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <h3 class="mb-2">POUR TOUS VOS ÉVÉNEMENTS</h3>
      <p> À chaque occasion convient son chou !</p>
      <p> En plus de notre gamme classique, nous avons recréé le Saint–Honoré de notre enfance, déclinable en différentes saveurs selon la saison et vos envies.</p>
    </v-col>
  </v-row>
  <v-row cols="12">
    <v-col xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex justify-center">
      <v-img src="@/assets/photo/SaintHono1.png" max-width="30em"></v-img>
    </v-col>
    <v-col xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex justify-center">
      <v-img src="@/assets/photo/SaintHono2.png" max-width="30em"></v-img>
    </v-col>
  </v-row>
  <v-row class="mb-2">
    <v-col>
      <p> Anniversaire, EVJF/EVG, mariage, buffet de famille, séminaire… Sublimez vos événements avec nos pièces montées sur mesure.</p>
    </v-col>
  </v-row>
  <v-row class="mb-4">
    <v-col>
      <v-btn block color="grey" elevation="0"> FAIRE UN DEVIS </v-btn>
    </v-col>
  </v-row>

</template>
<script setup>

import AffichePhoto from "@/components/AffichePhoto.vue";
</script>
<style scoped>

</style>
