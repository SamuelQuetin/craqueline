<template>
  <v-app class="app-bg">
    <section v-if="router.currentRoute.value.name==='Accueil'" id="section-0">
      <v-parallax
          class="parallax"
          height="100vh"
          src="@/assets/photo/parallax.png"
      >
        <div class="d-flex flex-column fill-height justify-center align-center parallax-content text-center text-white">

          <img :width="isMobile ? '100%' : '70%'" alt="CRAQUELINE" src="@/assets/logoCraque.svg"/>
        </div>
        <div aria-hidden="true" class="parallax_blur"></div>

        <div :style="scrollCueStyle"
             aria-label="Faites défiler"
             class="scroll-cue"
             @click="scrollTo('#section-1')">
          <v-icon size="28">mdi-chevron-down</v-icon>
          <small>Faites défiler</small>
        </div>
      </v-parallax>
    </section>
    <v-main>
            <MaintenanceBanner v-model="isMaintenance"></MaintenanceBanner>
    </v-main>
<!--    <v-sheet height="100vh" class="d-flex justify-center align-center">-->
<!--      <div class="construction-container">-->
<!--        <div class="construction-box">-->
<!--          <div class="icon">🚧</div>-->
<!--          <p class="text">-->
<!--            Site en construction<span class="dots"></span>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </v-sheet>-->
    <LeHeader :isMobile="isMobile" @onClick="scrollTo"></LeHeader>
    <v-main>
      <router-view :isMobile="isMobile" @scrollTo="scrollTo"></router-view>
    </v-main>
    <LeFooter></LeFooter>
  </v-app>


</template>
<script setup>
import MaintenanceBanner from "@/components/MaintenanceBanner.vue";
import {computed, onMounted, onUnmounted, ref} from 'vue';
import {useDisplay} from 'vuetify'
import LeFooter from "@/components/LeFooter.vue";
import router from "@/router/index.js";
import LeHeader from "@/components/LeHeader.vue";

const isMaintenance = ref(false);


const {mobile: isMobile} = useDisplay()

const cueOpacity = ref(1)
const updateOpacity = () => {
  const y = window.scrollY || 0
  const vh = Math.max(window.innerHeight, 1)
  // Distance sur laquelle on “fade” (60% de la hauteur de l’écran)
  const fadeDistance = vh * 0.6
  const o = 1 - Math.min(y / fadeDistance, 1)
  cueOpacity.value = Math.max(0, Math.min(1, +o.toFixed(3)))
}
const scrollCueStyle = computed(() => ({
  opacity: cueOpacity.value,
  pointerEvents: cueOpacity.value < 0.1 ? 'none' : 'auto',
  visibility: cueOpacity.value < 0.02 ? 'hidden' : 'visible',
}))

onMounted(() => {
  updateOpacity()
  window.addEventListener('scroll', updateOpacity, {passive: true})
  window.addEventListener('resize', updateOpacity)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateOpacity)
  window.removeEventListener('resize', updateOpacity)
})
function scrollTo(selector) {
  if(router.currentRoute.value.name !== "Accueil"){
    router.push({name: 'Accueil', hash: selector})
  }
  const element = document.querySelector(selector)
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - 180
    window.scrollTo({top: y, behavior: 'smooth'})
  }
}

</script>
<style scoped>
.parallax {
  position: relative;
  overflow: hidden;
  background: #000;
}

.parallax_blur {
  z-index: 1;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  /* léger assombrissement optionnel */
  pointer-events: none;
}

.parallax-content {
  position: relative;
  z-index: 2;
}

/* Indication de scroll */
.scroll-cue {
  position: absolute;
  z-index: 3;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  border-radius: 999px;
  color: #fff;
  user-select: none;
  cursor: pointer;
  transition: opacity .2s linear, visibility .2s linear;
}

.scroll-cue .v-icon {
  animation: bounce 1.6s ease-in-out infinite;
}
.scroll-cue small {
  font-size: .72rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  opacity: .85;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

/* Conteneur de page */
.app-bg {
  position: relative;
  min-height: 100dvh;
  isolation: isolate; /* crée un nouveau stacking context */
  overflow: clip; /* ou hidden si tu préfères */
  background: rgb(var(--v-theme-tertiary)); /* couleur de fond proche du gradient pour éviter tout "flash" blanc */
}




.construction-box {
  text-align: center;
  animation: float 2.5s ease-in-out infinite;
}

.icon {
  font-size: 4rem;
  animation: shake 1.2s ease-in-out infinite;
}

.text {
  margin-top: 10px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #5a4635;
}

.dots::after {
  content: "";
  animation: dots 1.5s infinite;
  font-size: 1.6rem;
}

/* Animation points ... */
@keyframes dots {
  0% { content: ""; }
  33% { content: "."; }
  66% { content: ".."; }
  100% { content: "..."; }
}

/* Oscillation légère */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Animation tremblement */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-3px); }
  40% { transform: translateX(3px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
}
</style>