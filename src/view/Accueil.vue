<template>
  <section id="section-1">
    <Summary :is-mobile="props.isMobile" @onClick="scrollTo"></Summary>
  </section>
  <v-container class=" pa-5 bg_base" max-width="90em">

    <section id="section-2" class="py-6">
      <Bienvenue :is-mobile="props.isMobile"></Bienvenue>
    </section>

    <section id="section-3" class="py-6">
      <LaCarte :is-mobile="props.isMobile"></LaCarte>
    </section>

    <section id="section-4" class="py-6">
      <LaBoutique :is-mobile="props.isMobile"></LaBoutique>
    </section>

    <section id="section-5" class="py-6">
      <AffichePhoto></AffichePhoto>
    </section>
  </v-container>
</template>

<script setup>
import LaBoutique from "@/components/LaBoutique.vue";
import Summary from "@/components/Summary.vue";
import AffichePhoto from "@/components/AffichePhoto.vue";
import Bienvenue from "@/components/Bienvenue.vue";
import LaCarte from "@/components/LaCarte.vue";

const props = defineProps({isMobile: Boolean})
const emit = defineEmits(['scrollTo'])


function scrollTo(section){
  emit('scrollTo', section)
}


</script>

<style scoped>


</style>