<template>
  <v-overlay
      absolute
      v-model="model"
      persistent
      class="justify-center align-center"
  >
    <v-alert
        type="warning"
        prominent
        icon="mdi-account-hard-hat"
    >
      Site en construction
    </v-alert>
  </v-overlay>
</template>
<script setup>
  const model = defineModel();
</script>
<style>
v-alert {
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}
</style>
