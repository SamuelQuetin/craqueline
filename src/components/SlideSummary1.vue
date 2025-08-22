<template>
  <v-sheet class="bg-1 h-100 py-8">
    <!--        Colonne de gauche   -->
    <v-row cols="12" class="h-100">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="h-100">
        <v-row class="h-75">
          <v-img
              class="my-6 drop-in"
              src="@/assets/photo/chouxSoft.png"
              height="400"
              width="300"
          ></v-img>
        </v-row>
        <v-row class="h-25 d-flex align-center justify-center">
          <v-btn
              variant="outlined"
              color="tertiary"
              class="drop-left"
              @click="scrollto('#savoir-faire')"
          >
            voir la carte
          </v-btn>
        </v-row>
      </v-col>

      <!-- Colonne droite -->
      <v-col cols="12" sm="5" md="5" lg="5" xl="5">
        <v-row class="mt-4">
          <div class="drop-right">
            <p>Découvrez notre gamme de choux</p>
            <h2>UN SAVOIR-FAIRE<br>ARTISANAL</h2>
          </div>
        </v-row>
        <v-row justify="center">
          <v-img
              src="@/assets/photo/chouxFleury.png"
              class="drop-out"
              max-width="300"
          ></v-img>
        </v-row>
      </v-col>
      <v-spacer cols="12" sm="2" md="2" lg="2" xl="2"></v-spacer>
    </v-row>
  </v-sheet>
</template>

<script setup>
const emits = defineEmits(['onClick'])

function scrollto(section){
  console.log(section)
  emits('onClick',section)
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
  font-size: 5em;
  font-weight: 400;
  color: rgb(var(--v-theme-tertiary));
}

/* ===== Classes ===== */
.drop-left{
  animation:
      slideInLeft 3s cubic-bezier(.22,1,.36,1) both,
      fadeIn     2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-right{
  animation:
      slideInRight 3s cubic-bezier(.22,1,.36,1) both,
      fadeIn      2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-in{ /* depuis le haut */
  animation:
      slideInTop 3s cubic-bezier(.22,1,.36,1) both,
      fadeIn    2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.drop-out{ /* depuis le bas */
  animation:
      slideInBottom 3s cubic-bezier(.22,1,.36,1) both,
      fadeIn       2000ms ease both;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* ===== Keyframes ===== */
@keyframes slideInLeft{
  0%   { transform: translate3d(-120vw,0,0); }
  70%  { transform: translate3d(2px,0,0); }   /* mini dépassement */
  100% { transform: translate3d(0,0,0); }
}
@keyframes slideInRight{
  0%   { transform: translate3d(120vw,0,0); }
  70%  { transform: translate3d(-2px,0,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes slideInTop{
  0%   { transform: translate3d(0,-60vh,0); }
  70%  { transform: translate3d(0,2px,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes slideInBottom{
  0%   { transform: translate3d(0,60vh,0); }
  70%  { transform: translate3d(0,-2px,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes fadeIn{
  0%   { opacity: 0; }
  30%  { opacity: .2; }
  60%  { opacity: .75; }
  100% { opacity: 1; }
}
</style>