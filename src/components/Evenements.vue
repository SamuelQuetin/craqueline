<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">VOS ÉVÈNEMENTS</h2>
  <v-row class="mb-12">
    <v-col cols="12" xs="12" sm="9" md="9" lg="9" xl="9" class=" justify-text">

      <p class=" pb-4">Une création sur mesure, un événement à sublimer ou une collaboration à imaginer ?<br/>
        <br/>
        l'équipe de Craqueline vous accompagne dans tous vos projets, qu’il s’agisse d’événements professionnels
        (séminaires, lancements de produits, réceptions, cadeaux d’entreprise) ou de moments privés d’exception
        (mariages, anniversaires, célébrations).<br/>
        <br/>
        Nos choux à la crème et Saint-Honoré, pensés comme de véritables pièces de dégustation, s’adaptent à vos envies
        pour offrir une expérience aussi raffinée que mémorable.<br/>
        <br/>
        Nous vous invitons à nous partager votre projet via le formulaire ci-après.<br/>
        Notre équipe vous répondra avec la plus grande attention dans les meilleurs délais.
      </p>
      <v-btn
          class="mt-8"
          variant="outlined"
          elevation="0"
          @click="goTo('Contact')"
      > Contactez nous
      </v-btn>
    </v-col>
    <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3" >
      <LazyPictures :src="choux3"></LazyPictures>
      <!--      <v-img src="@/assets/photo/PieceMontee.png" max-width="20em"></v-img>-->
    </v-col>
  </v-row>
</template>

<script setup>
import choux3 from "@/assets/photo/choux3.jpg"
import LazyPictures from "@/components/LazyPictures.vue"
import router from "@/router/index.js";

defineProps({
  isMobile: Boolean
})

function goTo(page) {
  router.push({name: page})
}
</script>


<style scoped>


.justify-text {
  text-align: center;
}

p {
  font-size: 1.2em;
}

.h2-default {
  color: black;
  font-size: 5em;
  font-weight: 10;
  white-space: nowrap;
}

.h2-mobile {
  color: black;
  font-size: 40px;
  position: relative;
  margin-left: 0;
}


</style>