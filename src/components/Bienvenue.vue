<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">NOTRE HISTOIRE</h2>
  <v-row cols="12" class="mb-4">
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="padding-text">
      <v-spacer v-if="!isMobile" class="py-16"></v-spacer>
      <v-row class="mb-4">
          <span class="italic bold">
            « L’idée de Craqueline est née dès notre enfance. Mamie mettait toujours un point d’honneur à terminer ses
            repas de fête par un Saint-Honoré. Le feuilletage croustillant, les choux moelleux au caramel craquant et
            la crème délicatement parfumée à la vanille… C’est l’essence même de Craqueline : le désir qu’une bouchée
            suffise à nous faire retomber en enfance. »
          </span>
      </v-row>
      <v-row class="mb-4">
        <span>
          Bertille et Mélissa sont deux cousines liées par leur grand-mère Jacqueline. <br>
          Cuisinière et pâtissière passionnée, elle fut une véritable source d’inspiration pour Bertille, qui décida de
          se former en cuisine, puis en pâtisserie et en chocolaterie. <br>
          Dix ans plus tard, forte de son expérience en boutique et en restauration gastronomique et étoilée, elle
          décide de se lancer. Mélissa ne tarda pas à la rejoindre avec enthousiasme dans cette aventure.
        </span>
      </v-row>
      <v-row class="mb-4">
        <p>
          De là naît Craqueline, clin d’œil au craquelin qui sublime le chou, et hommage à Jacqueline, leur source
          d’inspiration.
        </p>
      </v-row>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" class="padding-marging-pic d-flex justify-center">
      <v-img src="@/assets/photo/portrait1.png" max-width="25em"></v-img>
    </v-col>
  </v-row>
  <div class="mb-4 d-flex justify-center align-center bg-subtitle">
      <p>
        "Le désir qu'une bouchée suffise à nous faire retomber en enfance,
        C'est l'essence même de Craqueline"
      </p>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({ isMobile: Boolean })
const h2Ref = ref(null)

function checkOverflow() {
  const el = h2Ref.value
  if (!el) return

  const rect = el.getBoundingClientRect()

  // Si l'élément sort à gauche → on force sa position à 0
  if (rect.left < 0) {
    el.style.position = "absolute"
    el.style.left = "0px"
    el.style.marginLeft = "0"
  }

  // Si l'élément sort à droite → on le colle à droite
  if (rect.right > window.innerWidth) {
    el.style.position = "absolute"
    el.style.left = `${window.innerWidth - rect.width}px`
    el.style.marginLeft = "0"
  }
}

onMounted(() => {
  checkOverflow()
  window.addEventListener("resize", checkOverflow)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkOverflow)
})

</script>
<style scoped>
.h2-default {
  color: black;
  font-size: 5em;
  font-weight: 10;
  position: absolute;
  margin-left: -5vw;
}

.h2-mobile {
  color: black;
  font-size: 4em;
  position: relative;
  margin-left: 0;
}

.padding-text {
  padding-left: 20vh;
}

.padding-marging-pic {
  margin-top: 4vh;
  padding-left: 10vh;
  padding-right: 10vh;
}

@media (max-width: 150dvh) {


  .padding-text {
    padding-left: 3vh;
    padding-right: 3vh;
  }

  .padding-marging-pic {
    margin-top: 0;
    padding-left: 2vh;
    padding-right: 2vh;
  }
}

.bg-subtitle {
  background-color: black;
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  height: 10vh;
  opacity: 0.5;
  color: white;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  padding-left: 2vh;
  padding-right: 2vh;
}

span {
  font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI';
}

.italic {
  font-style: italic;
}

.bold {
  font-weight: 500;
}
</style>
