<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">HORAIRES</h2>
  <div :class="isMobile ? '' : 'padding-space'">
    <v-row
        class="px-16"
        v-for="(horaire, index) in horaires"
        :key="index"

    >
      <v-col
          cols="6"
          class="py-1"
      >
        <strong>{{ horaire.jour }}</strong>
      </v-col>
      <v-col
          cols="6"
          class="py-1 text-right"
      >
        <em v-if="horaire.ferme">Fermé</em>
        <span v-else>{{ horaire.heure }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>

const props = defineProps({isMobile: Boolean})

const horaires = [
  {jour: 'Mardi', heure: '10h00 - 19h00'},
  {jour: 'Mercredi', heure: '10h00 - 19h00'},
  {jour: 'Jeudi', heure: '10h00 - 19h00'},
  {jour: 'Vendredi', heure: '10h00 - 19h00'},
  {jour: 'Samedi', heure: '10h00 - 19h00'},
  {jour: 'Dimanche', heure: '9h00 - 13h00'},
  {jour: 'Lundi', ferme: true}
]

</script>

<style scoped>
.h2-default {
  color: black;
  font-size: 5em;
  font-weight: 10;
  white-space: nowrap;
}

.h2-mobile {
  color: black;
  font-size: 4em;
  position: relative;
  margin-left: 0;
}

.padding-space {
  padding-bottom: 5vh;
  padding-top: 5vh;
}
</style>