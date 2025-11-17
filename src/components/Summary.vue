<template>
  <v-carousel
      v-model="model"
      interval="500000"
      show-arrows="hover"
      cycle
      :height="isMobile ? '90dvh' : '80dvh'"
      hide-delimiters
  >
    <template v-slot:prev="{ props }">
      <v-btn
          :color="(model===0) ? 'white' : 'black'"
          icon="mdi-chevron-left"
          variant="outlined"
          @click="props.onClick"
      ></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
          :color="(model===0) ? 'white' : 'black'"
          icon="mdi-chevron-right"
          variant="outlined"
          @click="props.onClick"
      ></v-btn>
    </template>
    <v-carousel-item
        class="h-100"
        cover
        transition="slide-one-way-transition"
        reverse-transition="slide-one-way-transition"
    >
      <SlideSummary1 :is-mobile="isMobile" @onClick="scrollto" />
    </v-carousel-item>
    <v-carousel-item
        class="h-100"
        cover
        transition="slide-one-way-transition"
        reverse-transition="slide-one-way-transition"
    >
      <SlideSummary2 :is-mobile="isMobile" @onClick="scrollto" />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>

import SlideSummary1 from "@/components/SlideSummary1.vue";
import SlideSummary2 from "@/components/SlideSummary2.vue";

const emits = defineEmits(['onClick'])

const props = defineProps({isMobile: Boolean})

const model = defineModel();

function scrollto(section){
  emits('onClick',section)
}
</script>

<style>

/* transition personnalisée */
.slide-one-way-transition-enter-active,
.slide-one-way-transition-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide-one-way-transition-enter-from {
  transform: translateX(100%); /* commence à droite */
  opacity: 0;
}

.slide-one-way-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-one-way-transition-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-one-way-transition-leave-to {
  transform: translateX(-100%); /* sort à gauche */
  opacity: 0;
}
</style>