<template>
  <v-row class="fill-height ma-0" align="center" justify="center">
    <v-progress-circular indeterminate :color="color"/>
  </v-row>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'white'
  }
})
</script>
