
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
      <v-btn :href="mailtoLink"></v-btn>
    </v-form>
  </v-container>
</template>

<script setup>

  import { computed } from "vue";

  const to = "contact@mon-site.fr";

  const subject = "Demande d'information";
  const body = `Bonjour,
  Je souhaite avoir plus d'informations.`;

  // Construction du lien mailto
  const mailtoLink = computed(() => {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
</script>
<style scoped>
h2 {
  color: black;
  font-size: 4em;
  padding-top: 5vh;
  margin-left: 0;
}
</style>