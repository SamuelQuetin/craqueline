<template>
  <v-sheet class="bg-1 h-100 py-8">
    <v-row cols="12" class="h-100 margin-center">
      <!--        Colonne de gauche   -->
      <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6"  order-xs="2" order-sm="2" order-md="2" order-lg="1" order-xl="1" class="d-flex justify-center">
          <v-img
              class="my-6 drop-in"
              src="@/assets/photo/chouxSoft.png"
              :max-width="isMobile ? '40vw' : '300'"
          ></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6"
             order-xs="3" order-sm="3" order-md="3" order-lg="2" order-xl="2"
             class="d-flex justify-center">
        <div class="drop-right z-index-1" >
          <p>Découvrez notre gamme de choux</p>
          <h2 :class="isMobile ? 'h2-mobile':'h2-defaut'">UN SAVOIR-FAIRE<br>ARTISANAL</h2>
        </div>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" order-xs="4" order-sm="4" order-md="4" order-lg="3" order-xl="3" :class="isMobile ? 'd-flex justify-center ':'d-flex justify-center mt-16'" >
          <v-btn
              variant="outlined"
              color="tertiary"
              size="x-large"
              class="drop-left"
              @click="scrollto('#savoir-faire')"
          >
            voir la carte
          </v-btn>
      </v-col>
      <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6"  order-sm="1" order-md="1" order-lg="4" order-xl="4" class="d-flex justify-center">
        <v-img
            src="@/assets/photo/chouxFleury.png"
            :class="isMobile ? 'drop-out translate-y-20' : 'drop-out translate-y-200'"
            :max-width="isMobile ? '40vw' : '300'"
        ></v-img>
      </v-col>
      <v-spacer cols="12" xs="0" sm="2" md="2" lg="2" xl="2"></v-spacer>
    </v-row>
  </v-sheet>
</template>

<script setup>
const emits = defineEmits(['onClick'])

const props = defineProps({isMobile: Boolean})

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

h2{
  color: rgb(var(--v-theme-tertiary));
}

.h2-defaut {
  font-size: 5em;
  font-weight: 400;
}
.h2-mobile {
  font-size: 4em;
  font-weight: 400;
}

.translate-y-200{
  top: -200px
}

.translate-y-20{
  top: -20px
}

.z-index-1{
  z-index: 1;
}

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

.margin-center{
  margin-left: 10%;
  margin-right: 15%;
}

/* ===== Keyframes ===== */
@keyframes slideInLeft{
  0%   { transform: translate3d(-120vw,0,0); }
  70%  { transform: translate3d(-2px,0,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes slideInRight{
  0%   { transform: translate3d(120vw,0,0); }
  70%  { transform: translate3d(2px,0,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes slideInTop{
  0%   { transform: translate3d(0,-60vh,0); }
  70%  { transform: translate3d(0,-2px,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes slideInBottom{
  0%   { transform: translate3d(0,60vh,0); }
  70%  { transform: translate3d(0,2px,0); }
  100% { transform: translate3d(0,0,0); }
}
@keyframes fadeIn{
  0%   { opacity: 0; }
  30%  { opacity: .2; }
  60%  { opacity: .75; }
  100% { opacity: 1; }
}
</style>