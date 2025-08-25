<template>
  <div
      class="scroller"
      @mousedown="startDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @mousemove="onDrag"
      @touchstart.prevent="startDrag"
      @touchend="stopDrag"
      @touchmove.prevent="onDrag"
  >
    <div
        ref="track"
        class="scroller-track"
        :style="{ transform: `translateX(${-offset}px)` }"
    >
      <img
          v-for="(image, i) in [...images, ...images]"
          :key="i"
          :src="image"
          alt="photo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const modules = import.meta.glob(
    '/src/assets/photo/choux/*.{png,jpg,jpeg,webp,svg,gif}',
    { eager: true, import: 'default' }
)
const images = Object.entries(modules).map(([, url]) => url)

const track = ref(null)
const offset = ref(0)
let animationId
let speed = 2
let trackWidth = 0

// Drag
let isDragging = false
let startX = 0
let lastOffset = 0

function animate() {
  if (!isDragging) {
    offset.value += speed
    if (offset.value >= trackWidth / 2) offset.value = 0
  }
  animationId = requestAnimationFrame(animate)
}

// --- Drag functions ---
function startDrag(e) {
  e.preventDefault();
  isDragging = true
  startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  lastOffset = offset.value
}

function onDrag(e) {
  if (!isDragging) return
  e.preventDefault();
  const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const delta = x - startX
  offset.value = lastOffset - delta
}

function stopDrag() {
  isDragging = false
}

onMounted(() => {
  trackWidth = track.value.scrollWidth
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.scroller {
  position: relative;
  user-select: none; /* Empêche la sélection de texte */
  -webkit-user-drag: none; /* Empêche le drag natif de l’image */
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  overflow: visible;
  background-color: rgb(var(--v-theme-quaternary));
  padding: 5vh;
  margin: 5vh 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: grab;
}

.scroller:active {
  cursor: grabbing;
}

.scroller-track {
  display: flex;
  gap: 2rem;
  will-change: transform;
}

.scroller-track img {
  max-height: 50vh;
  object-fit: contain;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

.scroller-track img:hover {
  transform: scale(1.1);
  z-index: 2;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  user-select: none;
  -webkit-user-drag: none;
}
</style>
