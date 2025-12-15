<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">ADDRESS</h2>
  <div>
    <span>
      4 rue Marceau,<br>
      34000 Montpellier
    </span>
  </div>
  <div class="pt-4">
    <iframe
        class="map"
        src="https://www.google.com/maps?q=4%20rue%20Marceau%2034000%20Montpellier&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen>
    </iframe>
  </div>
</template>

<script setup>

const props = defineProps({isMobile: Boolean})
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

.map {
  width: 100%;
  height: 320px;
  border: 0;
  border-radius: 12px;

  pointer-events: auto;
}
</style>