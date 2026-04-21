<template>
  <v-img
      :src="src"
      :lazy-src="thumbnail"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :eager="!lazy"
      @loadstart="loading = true"
      @load="onLoad()"
      :aspect-ratio="ratio"
      :max-width="maxWidth"
      class="mx-auto"
      contain
  >
    <template #placeholder>
      <LoadingSpinner v-if="loading" :color="color"/>
    </template>
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
  ratio:{
    default: 1
  },
  color:{
    type: String,
    default: 'primary'
  },
  maxWidth: {
    type: String,
    default: '600'
  }
})

const loading = ref(true)

const onLoad = (e) => {
  loading.value = false
}
</script>

<style scoped>

</style>