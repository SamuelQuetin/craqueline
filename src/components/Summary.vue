<template>
  <v-carousel
      cycle
      interval="5000"
      show-arrows="hover"
      touch
      height="70vh"
      hide-delimiters
  >
    <v-carousel-item>
      <v-sheet class="bg-1 h-100">
        <!--        Colonne de gauche   -->
        <v-row cols="12" class="h-100">
          <v-col cols="12" sm="5" md="5" lg="5" xl="5" class="h-100">
            <v-row class="h-75">

                <v-img
                    class="my-6 img-shell"
                    src="@/assets/photo/chouxSoft.png"
                    :class="{ 'drop-in': dropLeft }"
                    height="400"
                    width="300"
                ></v-img>

            </v-row>
            <v-row class="h-25 d-flex align-center justify-center">
              <v-btn
                  variant="outlined"
                  color="tertiary"
                  @click="clickBtn"
              >
                voir la carte
              </v-btn>
            </v-row>
          </v-col>

          <!-- Colonne droite -->
          <v-col cols="12" sm="7" md="7" lg="7" xl="7" >
            <v-row class="mt-4">
              <div>
                <p>Découvrez notre gamme de choux</p>
                <h2>UN SAVOIR-FAIRE<br>ARTISANAL</h2>
              </div>
            </v-row>
            <v-row justify="center">
              <v-img
                  src="@/assets/photo/chouxFleury.png"
                  :class="{ 'drop-out': dropLeft }"
                  max-width="300"
              ></v-img>
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const dropLeft = ref(false)

function clickBtn() {
  dropLeft.value = !dropLeft.value
  console.log("test " + dropLeft.value)
}

</script>

<style scoped>
.bg-1 {
  background-color: rgb(var(--v-theme-quaternary));
}

p {
  color: rgb(var(--v-theme-tertiary));
}

h2 {
  color: rgb(var(--v-theme-tertiary));
}

/* masque le débordement pendant l'animation */
.img-shell { overflow: hidden; display: inline-block; }

/* animation entrée depuis le haut */
.drop-in {
  animation: dropIn 750ms cubic-bezier(0, 0, 0.2, 1) both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-out {
  animation: dropOut 750ms cubic-bezier(0, 0, 0.2, 1) both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

@keyframes dropIn {
  0%   { transform: translate3d(0, -600px, 0); opacity: 0; }
  85%  { transform: translate3d(0,  -12px, 0); opacity: 1; } /* proche du sol */
  100% { transform: translate3d(0,    0px, 0); }
}

@keyframes dropOut {
  0%   { transform: translate3d(0, 600px, 0); opacity: 0; }
  85%  { transform: translate3d(0,  12px, 0); opacity: 1; } /* proche du sol */
  100% { transform: translate3d(0,    0px, 0); }
}
</style>