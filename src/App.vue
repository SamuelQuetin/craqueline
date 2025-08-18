<template>
  <h1>
    CRAQUELINE
  </h1>
  <h2>
    page accueil
  </h2>
  <MaintenanceBanner v-model="isMaintenance" ></MaintenanceBanner>/
  <v-container class="pa-5" max-width="80em">
    <Bienvenue></Bienvenue>
    <NosChoux></NosChoux>
  </v-container>
</template>
<script setup>
import Bienvenue from './components/Bienvenue.vue';
import NosChoux from "@/components/NosChoux.vue";
import MaintenanceBanner from "@/components/MaintenanceBanner.vue";
import {ref} from "vue";

const isMaintenance = ref(true);

</script>
