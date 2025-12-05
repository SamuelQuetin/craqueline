
<template>
  <v-container class=" pa-5 bg_base" max-width="90em">
    <h2>CONTACTEZ-NOUS</h2>
    <v-form>
      <v-text-field label="Nom *" outlined></v-text-field>
      <v-text-field label="E-mail *" outlined></v-text-field>
      <v-text-field label="Numéro de téléphone" outlined></v-text-field>
      <v-text-field label="Date de l'évènement" outlined></v-text-field>
      <v-text-field label="Lieu de l'évènement" outlined></v-text-field>
      <v-text-field label="Nombre de convive" outlined></v-text-field>
      <v-text-field label="Votre message *" outlined></v-text-field>
    </v-form>
  </v-container>
</template>

<script setup>


</script>
<style scoped>
h2 {
  color: black;
  font-size: 4em;
  padding-top: 5vh;
  margin-left: 0;
}
</style>