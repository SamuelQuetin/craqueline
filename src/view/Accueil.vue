<template>
  <section id="section-1">
    <Summary :is-mobile="isMobile" @onClick="scrollTo"></Summary>
  </section>
  <v-container class=" pa-5 bg_base" max-width="90em">

    <section id="section-3" class="py-6">
      <NosProduits :is-mobile="isMobile"></NosProduits>
    </section>

    <section id="section-2" class="py-6">
      <Bienvenue :is-mobile="isMobile"></Bienvenue>
    </section>

    <section id="section-4" class="py-6">
      <LaBoutique :is-mobile="isMobile"></LaBoutique>
    </section>
  </v-container>
</template>

<script setup>
import LaBoutique from "@/components/LaBoutique.vue";
import Summary from "@/components/Summary.vue";
import Bienvenue from "@/components/Bienvenue.vue";
import NosProduits from "@/components/NosProduits.vue";

const props = defineProps({isMobile: Boolean})
const emit = defineEmits(['scrollTo'])


function scrollTo(section){
  emit('scrollTo', section)
}


</script>

<style scoped>


</style>