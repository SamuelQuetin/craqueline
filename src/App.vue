<template>

  <v-parallax
      src="@/assets/photo/parallax.png"
      height="100vh"
      class="parallax"
  >
    <div class="d-flex flex-column fill-height justify-center align-center">
      <div class="logo-wrap">
        <!-- PNG/SVG avec fond transparent idéal --><img src="@/assets/photo/title.png" width="500em" alt="CRAQUELINE"></img>
      </div>

    </div>
  </v-parallax>

<!--  <v-img src="@/assets/photo/testParalax.png" class="" width="100%">-->

<!--  </v-img>-->
<!--  <v-parallax src="@/assets/photo/testParalax"></v-parallax>-->
  <v-container class="pa-5" max-width="80em">
    <Bienvenue></Bienvenue>
    <NosChoux></NosChoux>
    <LaBoutique></LaBoutique>
  </v-container>
  <MaintenanceBanner v-model="isMaintenance" ></MaintenanceBanner>
</template>
<script setup>
import Bienvenue from './components/Bienvenue.vue';
import NosChoux from "@/components/NosChoux.vue";
import MaintenanceBanner from "@/components/MaintenanceBanner.vue";
import {ref} from "vue";
import LaBoutique from "@/components/LaBoutique.vue";

const isMaintenance = ref(false);

</script>
<style>
.parallax .v-img__img{
  filter: blur(8px) contrast(1.1);    /* léger flou + assombrissement */
  transform: scale(2);              /* évite les bords flous visibles */
}
</style>