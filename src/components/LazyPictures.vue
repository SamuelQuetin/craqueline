<template>
  <v-img
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :eager="!lazy"
      @loadstart="loading = true"
      @load="onLoad()"
      :aspect-ratio="ratio"
      @click="console.log(ratio)"
      max-width="600"
      class="mx-auto"
      contain
  >
    <template #placeholder>
      <v-skeleton-loader
          v-if="loading"
          type="image"
          class="w-100 h-100"
          :color="color"
      />
    </template>
  </v-img>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  src: {
    type: String,
    required: true
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
  }
})

const loading = ref(true)

const onLoad = (e) => {
  loading.value = false
}
</script>

<style scoped>

</style>