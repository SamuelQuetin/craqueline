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
  <v-row class="row-bleed px-4" cols="12">
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="overflow-visible d-flex justify-center">
      <v-img src="@/assets/photo/NOS_BOISSONS_CHAUDES_AFFICHE.png" class="image-pop"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="overflow-visible d-flex justify-center">
      <v-img src="@/assets/photo/NOS_BOISSONS_FRAICHES_AFFICHE.png" class="image-pop"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="overflow-visible d-flex justify-center">
      <v-img src="@/assets/photo/NOS_CHOUX_AFFICHE.png" class="image-pop"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="overflow-visible d-flex justify-center">
      <v-img src="@/assets/photo/NOS_SPECIALITE_AFFICHE.png" class="image-pop"></v-img>
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
/* Le v-row occupe 100vw et est centré par rapport à la fenêtre */
.row-bleed {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  overflow: visible;
}

/* Laisser déborder */
.row-bleed .v-col { overflow: visible; }

/* Décalages pour un débordement symétrique (à ajuster à l’œil) */
.row-bleed .v-col:nth-child(1) .image-pop { transform: translateX(-15%); }
.row-bleed .v-col:nth-child(2) .image-pop { transform: translateX(-10%); }
.row-bleed .v-col:nth-child(3) .image-pop { transform: translateX(10%); }
.row-bleed .v-col:nth-child(4) .image-pop { transform: translateX(15%); }

.image-pop {
  border: 5px solid white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-pop:hover {
  transform: scale(1.05);
  box-shadow:
      0 4px 15px rgba(0, 0, 0, 0.15), /* ombre principale douce */
      0 0 20px rgba(255, 182, 193, 0.2); /* légère lueur rosée pastel */
}

/* Mobile: on annule pour éviter le scroll horizontal */
@media (max-width: 960px) {
  .row-bleed {
    left: auto;
    transform: none;
    width: auto;
    max-width: none;
  }
}
</style>
