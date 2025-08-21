<template>
  <v-container class="py-8">
    <v-row dense>
      <v-col v-for="p in posts" :key="p.id" cols="12" sm="6" md="4" lg="3">
        <v-card rounded="xl" elevation="2">
          <a :href="p.permalink" target="_blank" rel="noopener">
            <v-img :src="p.media_type === 'VIDEO' ? p.thumbnail_url : p.media_url" aspect-ratio="1" cover />
          </a>
          <v-card-text class="text-truncate">{{ p.caption }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div v-if="!posts.length" class="text-center text-medium-emphasis py-8">
      Connectez Instagram via <code>/api/instagram/login</code>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const posts = ref([])

onMounted(async () => {
  try {
    const r = await fetch('/api/instagram/latest?limit=8', { cache: 'no-store' })
    posts.value = await r.json()
  } catch (e) {
    console.error(e)
  }
})
</script>