<template>
  <h2 class="pb-2">La Boutique</h2>
  <v-row cols="12">
    <v-col cols="6" xs="12" sm="12" md="12" lg="6" xl="6" class="d-flex justify-center">
      <v-img src="@/assets/photo/devanture.png" max-width="30em"></v-img>
    </v-col>
    <v-col cols="6" xs="12" sm="12" md="12" lg="6" xl="6" class="align-content-center">
      <h3 class="mb-2 d-flex justify-center">
        SALON DE THÉ ET CAFÉ
      </h3>

      <div class="text-center">
        <p class="text-body-1 mb-6">
          Une carte de boissons chaudes ou froides rigoureusement sélectionnées auprès de nos partenaires locaux, pour accompagner votre pause gourmande.
        </p>
      </div>
      <v-divider class="my-4" />

      <h3 class="mb-2 d-flex justify-center">
        ADRESSE
      </h3>
      <div class="text-center">
        <div class="text-subtitle-1 font-weight-medium">CRAQUELINE</div>
        <div class="text-body-2">1 BOULEVARD DU JEU DE PAUMES</div>
        <div class="text-body-2">MONTPELLIER (FRANCE)</div>
      </div>
      <v-divider class="my-6" />

      <h3 class="mb-2 d-flex justify-center">
        HORAIRES
      </h3>
      <v-list density="compact" class="text-left mx-auto" style="max-width: 420px;">
        <v-list-item>
          <template #prepend>
            <v-icon>mdi-clock-outline</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">
            Du Mardi au Vendredi
          </v-list-item-title>
          <v-list-item-subtitle>10h – 18h</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <template #prepend>
            <v-icon>mdi-clock-outline</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">
            Samedi
          </v-list-item-title>
          <v-list-item-subtitle>10h – 19h</v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <v-alert color="info" variant="tonal" class="mt-4">
        Fermé le Dimanche et Lundi.
      </v-alert>
    </v-col>
  </v-row>
</template>
<script setup>

</script>
<style scoped>

</style>
