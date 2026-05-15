
<template>
  <Cartes :isMobiles="isMobiles"></Cartes>
</template>

<script setup>
import Cartes from "@/components/Cartes.vue";
const props = defineProps({isMobile: Boolean})

</script>
<style scoped>

</style>
