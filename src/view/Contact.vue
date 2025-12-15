<template>
  <v-container class="pa-5 bg_base" max-width="90em">
    <v-row class="px-10">
      <v-col cols="12">
      <ContactForm :isMobile="isMobile"/>
      </v-col>
      <v-col cols="12" md="6">
        <Address :isMobile="isMobile"/>
      </v-col>
      <v-col cols="12" md="6">
        <Horaires :isMobile="isMobile"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

import ContactForm from "@/components/ContactForm.vue";
import Address from "@/components/Address.vue";
import Horaires from "@/components/Horaires.vue";


const props = defineProps({isMobile: Boolean})

</script>
<style scoped>
h2 {
  color: black;
  font-size: 4em;
  padding-top: 5vh;
  margin-left: 0;
}
</style>