<template>
  <h1>
    CRAQUELINE
  </h1>
  <h2>
    page accueil
  </h2>
  <v-container class="pa-5" max-width="80em">
    <Bienvenue></Bienvenue>
    <NosChoux></NosChoux>
  </v-container>
</template>
<script setup>
import Bienvenue from './components/Bienvenue.vue';
import NosChoux from "@/components/NosChoux.vue";
</script>
