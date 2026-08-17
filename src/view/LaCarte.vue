
<template>
  <Cartes :isMobile="isMobile"></Cartes>
</template>

<script setup>
import Cartes from "@/components/Cartes.vue";
const props = defineProps({isMobile: Boolean})

</script>
<style scoped>

</style>
