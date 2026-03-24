<template>
  <v-container class="pa-5 bg_base" max-width="90em">
    <Evenements  :is-mobile="isMobile"></Evenements>
  </v-container>
</template>

<script setup>

import Evenements from "@/components/Evenements.vue";

const props = defineProps({isMobile: Boolean})


</script>

<style scoped>

</style>