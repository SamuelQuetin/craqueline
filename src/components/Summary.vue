<template>
  <v-carousel
      v-model="model"
      cycle
      interval="5000"
      show-arrows="hover"
      touch
      height="80vh"
      hide-delimiters
  >
    <template v-slot:prev="{ props }">
      <v-btn
          :color="(model===0) ? 'white' : 'black'"
          :disabled="model===0"
          icon="mdi-chevron-left"
          variant="outlined"
          @click="props.onClick"
      ></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
          :color="(model===0) ? 'white' : 'black'"
          :disabled="model===1"
          icon="mdi-chevron-right"
          variant="outlined"
          @click="props.onClick"
      ></v-btn>
    </template>
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

const model = defineModel();

function scrollto(section){
  console.log(section)
  emits('onClick',section)
}
</script>

<style scoped>

</style>