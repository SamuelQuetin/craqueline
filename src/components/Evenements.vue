<script setup>
import LazyPictures from "@/components/LazyPictures.vue"

defineProps({
  PieceMontee: {},
  goTo: {},
})
</script>

<template>
  <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9" class=" justify-text">
    <h3 class="pb-8">VOS ÉVÈNEMENTS SUBLIMÉS</h3>
    <p class=" pb-4">Mariage, anniversaire ou réception privée : émerveillez vos invités avec nos pièces
      montées de choux et nos Saint-Honoré d'exception.
    </p>
    <p>Raffinés, gourmands et personnalisables, ils allient traditions et élégance pour
      transformer vos instants précieux en souvenirs inoubliables.
    </p>
    <v-btn
        class="mt-8"
        variant="outlined"
        elevation="0"
        @click="goTo"
    > DEMANDER UN DEVIS
    </v-btn>
  </v-col>
  <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="d-flex justify-center">
    <LazyPictures :src="PieceMontee"></LazyPictures>
    <!--      <v-img src="@/assets/photo/PieceMontee.png" max-width="20em"></v-img>-->
  </v-col>
</template>

<style scoped>


.justify-text {
  text-align: center;
}

p {
  font-size: 1.2em;
}

h3 {
  font-weight: 500;
  font-size: 2.5em;

}


</style>