<template>
  <div class="square-image-container">
    <v-img
        :src="src"
        aspect-ratio="1"
        cover
        width="200px"
        class="cursor-pointer hover-effect"
        @click="dialog = true"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"/>
        </v-row>
      </template>
    </v-img>

    <v-dialog v-model="dialog" height="100vh" class="image-popup">
      <v-img
          :src="src"
          @click="dialog = false"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="white"/>
          </v-row>
        </template>
      </v-img>
    </v-dialog>
  </div>
</template>

<script setup>
import {ref} from 'vue'

defineProps({
  src: {
    type: String,
    required: true
  }
})

const dialog = ref(false)
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.hover-effect {
  transition: opacity 0.3s ease;
}

.hover-effect:hover {
  opacity: 0.9;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3) !important;
}

.close-btn:hover {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

:deep(.v-card) {
  background-color: transparent !important;
}
</style>
