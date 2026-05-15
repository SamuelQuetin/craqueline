<template>
  <v-img
      :src="src"
      :lazy-src="thumbnail"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :eager="!lazy"
      @loadstart="loading = true"
      @load="onLoad()"
      :max-width="maxWidth"
      :max-height="maxHeight"
      class="no-blur"
  >
  </v-img>
</template>

<script setup>
import {ref} from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

defineProps({
  src: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    default: ''
  },
  lazy: {
    type: Boolean,
    default: true
  },
  color:{
    type: String,
    default: 'primary'
  },
  maxWidth: {
    type: String,
    default: '600'
  },
  maxHeight: {
    type: String,
  },
  isMobile: {
    type: Boolean,
    default: false
  }
})

const loading = ref(true)

const onLoad = (e) => {
  loading.value = false
}
</script>

<style>
.no-blur .v-img__img--preload {
  filter: none !important;
}
</style>
