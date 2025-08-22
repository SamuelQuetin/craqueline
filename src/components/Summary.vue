<template>
  <v-carousel
      cycle
      interval="50000"
      show-arrows="hover"
      touch
      height="80vh"
      hide-delimiters
  >
    <v-carousel-item class="h-100">
      <SlideSummary1 @onClick="scrollto" />
    </v-carousel-item>
    <v-carousel-item class="h-100">
      <SlideSummary2 @onClick="scrollto" />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>

import SlideSummary1 from "@/components/SlideSummary1.vue";
import SlideSummary2 from "@/components/SlideSummary2.vue";

const emits = defineEmits(['onClick'])

function scrollto(section){
  console.log(section)
  emits('onClick',section)
}
</script>

<style scoped>

</style>