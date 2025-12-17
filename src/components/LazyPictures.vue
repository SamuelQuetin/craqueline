<template>
  <v-responsive :aspect-ratio="ratio">
    <picture class="lazy-picture">
      <!-- WebP prioritaire -->
      <source
          v-if="webp"
          :srcset="webp"
          type="image/webp"
      />

      <!-- Fallback PNG/JPG -->
      <v-img
          :src="src"
          :alt="alt"
          :loading="lazy ? 'lazy' : 'eager'"
          :eager="!lazy"
          width="100%"
          cover
      >
        <template #placeholder>
          <v-skeleton-loader
              type="image"
              class="w-100 h-100"
          />
        </template>
      </v-img>
    </picture>
  </v-responsive>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  webp: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: ''
  },
  ratio: {
    type: [Number, String],
    default: 1
  },
  lazy: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.lazy-picture {
  display: block;
}
</style>