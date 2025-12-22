<template>
  <v-carousel
      v-if="isMobile"
      cycle
      interval="5000"
      touch
      :show-arrows="false"
      class="carousel-auto"
  >
    <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        class="pa-6"
        height="400"
    >
      <LazyPictures
          :src="image.src"
          :alt="image.alt"
          ratio="0.4"
          color="quaternary"
      />
    </v-carousel-item>
  </v-carousel>
  <div class="bleed" v-else>
    <div
        class="scroller"
        @mouseenter="slowDown"
        @mousedown="startDrag"
        @mouseup="stopDrag"
        @mouseleave="speedUpAndStopDrag"
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
            v-for="(image, i) in [...images, ...images, ...images]"
            :key="i"
            :src="image.src"
            :alt="image.alt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue"
import LazyPictures from "@/components/LazyPictures.vue";

import Choux from "@/assets/photo/choux/10Choux.png"
import ChouPistache from "@/assets/photo/choux/chou_pistache.jpg"
import ChouNoisette from "@/assets/photo/choux/chounoisette.jpg"
import DuoChou from "@/assets/photo/choux/DuoChou.png"
import PieceMontee from "@/assets/photo/choux/PieceMontee.png"
import post4 from "@/assets/photo/choux/post4.png"
import publiInsta from "@/assets/photo/choux/publi_instaa.png"
import SaintHo1 from "@/assets/photo/choux/Saint-Ho1.png"
import TrioRoses from "@/assets/photo/choux/TrioRoses.png"

const props = defineProps({isMobile: Boolean})

const images = [
  {
    src: Choux,
    alt: "Photo de choux"
  },
  {
    src: ChouPistache,
    alt: "Photo de choux pistache"
  },
  {
    src: ChouNoisette,
    alt: "Photo de choux Noisette"
  },
  {
    src: DuoChou,
    alt: "Photo de Duo de Choux"
  },
  {
    src: PieceMontee,
    alt: "Photo de Piece Montée"
  },
  {
    src: post4,
    alt: "Photo de Piece choux"
  },
  {
    src: publiInsta,
    alt: "Photo de choux"
  },
  {
    src: SaintHo1,
    alt: "Photo de saint honorée"
  },
  {
    src: TrioRoses,
    alt: "Photo de TrioRoses"
  }
]


const track = ref(null)
const offset = ref(500)
let animationId
let defaultSpeed = 1 // vitesse normale
let speed = defaultSpeed
// Drag
let isDragging = false
let startX = 0
let lastOffset = 0
let maxOffset = 0


function slowDown() {
  const slow = () => {
    if (speed > 0.05) {
      speed *= 0.9 // ralentit progressivement
      requestAnimationFrame(slow)
    } else {
      speed = 0
    }
  }
  slow()
}

function speedUpAndStopDrag(){
  speedUp()
  stopDrag()
}

function speedUp() {
  speed = defaultSpeed
}



function animate() {
  if (!isDragging) {
    offset.value += speed
    if (offset.value >= maxOffset) {
      offset.value = 0;
    }
  }
  animationId = requestAnimationFrame(animate)
}

// --- Drag functions ---
function startDrag(e) {
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

  const firstImage = track.value.querySelector('img')
  const trackWidth = window.innerWidth
  if (firstImage) {
    firstImage.addEventListener('load', () => {
      const imageWidth = firstImage.offsetWidth
      const style = getComputedStyle(track.value)
      const gap = parseInt(style.gap) || 0
      maxOffset = (3 * images.length) * (imageWidth + gap) - trackWidth
      animate()
    })
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.bleed {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  overflow: visible;
  background-color: rgba(var(--v-theme-quaternary), 0.5 );
}

.scroller {
  position: relative;
  user-select: none; /* Empêche la sélection de texte */
  -webkit-user-drag: none; /* Empêche le drag natif de l’image */
  width: 100vw;
  overflow: hidden;
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
  gap: 4px;
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
