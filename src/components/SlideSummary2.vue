<template>
  <v-sheet class="bg-1 h-100 mb-8 py-8">
    <v-row class="h-100">
      <v-spacer cols="12" sm="2" md="2" lg="2" xl="2"></v-spacer>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="h-100 ">
        <div class="mt-4">
          <div class="drop-left position-absolute zindex-10">
            <p>Sublimez vos évenements</p>
            <h2>FAITES L'EXPERIENCE<br/>D'UNE PÂTISSERIE<br/>AUTHENTIQUE</h2>
          </div>
        </div>
        <v-spacer class="h-25"></v-spacer>
        <v-row class="h-75 mt-8" justify="center">
          <v-img
              src="@/assets/photo/chouxSaintHono.png"
              class="drop-out zindex-1"
              max-width="325"
          ></v-img>
        </v-row>
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="h-100">
        <v-row class="h-75">
          <v-img
              class="my-6 drop-in"
              src="@/assets/photo/chouxTour.png"
              height="400"
              width="300"
          ></v-img>
        </v-row>
        <v-row class="h-25 d-flex align-center justify-center">
          <v-btn
              variant="outlined"
              color="black"
              class="drop-right"
          >
            Demander un devis
          </v-btn>
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
  background-color: rgb(var(--v-theme-primary));
}

p {
  color: black;
}

h2 {
  font-size: 4em;
  font-weight: 100;
  color: black;
}

.zindex-1 {
  z-index: 2;
}

.zindex-10 {
  z-index: 10;
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