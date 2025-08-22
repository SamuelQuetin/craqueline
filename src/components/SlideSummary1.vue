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

/* animation entrée depuis le haut */
.drop-in {
  animation: dropIn 1s cubic-bezier(0, 0, 0.2, 1) both;
  will-change: transform, opacity;
  backface-visibility: hidden;
  position: relative;
  z-index: 10;
}

.drop-out {
  animation: dropOut 1s cubic-bezier(0, 0, 0.2, 1) both;
  will-change: transform, opacity;
  backface-visibility: hidden;
  position: relative;
  z-index: 10;
}

.drop-left {
  animation: dropLeft 1s cubic-bezier(0, 0, 0.2, 1) both;
  will-change: transform, opacity;
  backface-visibility: hidden;
  position: relative;
  z-index: 10;
}

.drop-right {
  animation: dropRight 1s cubic-bezier(0, 0, 0.2, 1) both;
  will-change: transform, opacity;
  backface-visibility: hidden;
  position: relative;
  z-index: 10;
}


@keyframes dropIn {
  0% {
    transform: translate3d(0, -90vh, 0);
    opacity: 0;
  }
  50% {
    transform: translate3d(0, -1vh, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0px, 0);
  }
}

@keyframes dropOut {
  0% {
    transform: translate3d(0, 90vh, 0);
    opacity: 0;
  }
  50% {
    transform: translate3d(0, 1vh, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0px, 0);
  }
}

@keyframes dropLeft {
  0% {
    transform: translate3d(-90vh, 0, 0);
    opacity: 0;
  }
  50% {
    transform: translate3d(-1vh, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes dropRight {
  0% {
    transform: translate3d(90vh, 0, 0);
    opacity: 0;
  }
  50% {
    transform: translate3d(1vh, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>