<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">HORAIRES</h2>
  <div :class="isMobile ? '' : 'padding-space'">
    <v-row
        :class="isMobile ? '' :'px-16'"
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
import {onMounted, ref} from "vue";
import {getBusinessHours, getDefaultHours} from "@/service/hoursService.js";

const props = defineProps({isMobile: Boolean})

const horaires = ref(formatHours(getDefaultHours()));

onMounted(async () => {
  const data = await getBusinessHours();
  horaires.value = formatHours(data?.weekdayText || getDefaultHours());
});

function formatHours(weekdayText) {
  return weekdayText.map((line) => {
    const [day, ...timeParts] = line.split(':');
    const time = timeParts.join(':').trim();
    const isClosed = time.toLowerCase().includes('fermé');

    return {
      jour: day.trim(),
      heure: time.replaceAll(':', 'h').replaceAll('–', '-'),
      ferme: isClosed
    };
  });
}

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
  font-size: 40px;
  position: relative;
  padding-bottom: 30px;
}

.padding-space {
  padding-bottom: 5vh;
  padding-top: 5vh;
}
</style>
