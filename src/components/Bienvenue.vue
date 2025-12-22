<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">NOTRE HISTOIRE</h2>
  <v-row cols="12" class="mb-4">
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" :class="isMobile ? 'padding-text-mobile':'padding-text-defaut'">
      <v-spacer v-if="!isMobile" class="py-16"></v-spacer>
      <v-row class="mb-4">
          <span class="italic bold">
            « L’idée de Craqueline est née dès notre enfance. Mamie mettait toujours un point d’honneur à terminer ses
            repas de fête par un Saint-Honoré. Le feuilletage croustillant, les choux moelleux au caramel craquant et
            la crème délicatement parfumée à la vanille…<br> C’est l’essence même de Craqueline : le désir qu’une bouchée
            suffise à nous faire retomber en enfance. »
          </span>
      </v-row>
      <v-row class="mb-4">
        <span>
          Bertille et Mélissa sont deux cousines liées par leur grand-mère Jacqueline. <br>
          Cuisinière et pâtissière passionnée, elle fut une véritable source d’inspiration pour Bertille, qui décida de
          se former en cuisine, puis en pâtisserie et en chocolaterie. <br>
          Dix ans plus tard, forte de son expérience en boutique et en restauration gastronomique et étoilée, elle
          décide de se lancer. <br> Mélissa ne tarda pas à la rejoindre avec enthousiasme dans cette aventure.
        </span>
      </v-row>
      <v-row class="mb-4">
        <p>
          De là naît <i>Craqueline</i>, clin d’œil au craquelin qui sublime le chou, et hommage à Jacqueline, leur source
          d’inspiration.
        </p>
      </v-row>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6" :class="isMobile ? 'padding-marging-pic-mobile d-flex justify-center':'padding-marging-pic-defaut d-flex justify-center'">
      <v-img src="@/assets/photo/portrait1.png" max-width="25em"></v-img>
    </v-col>
  </v-row>
</template>
<script setup>

const props = defineProps({ isMobile: Boolean })

</script>
<style scoped>
.h2-default {
  color: black;
  font-size: 5em;
  font-weight: 10;
  position: absolute;
  left: 5vw;
  white-space: nowrap;
}

.h2-mobile {
  color: black;
  font-size: 4em;
  position: relative;
  margin-left: 0;
}

.padding-text-defaut {
  padding-left: 5vw;
}

.padding-text-mobile {
  padding-left: 3vw;
  padding-right: 3vw;
}

.padding-marging-pic-defaut {
  margin-top: 4vh;
  padding-left: 10vw;
  padding-right: 10vw;
}

.padding-marging-pic-mobile {
  margin-top: 0;
  padding-left: 2vw;
  padding-right: 2vw;
}

.bg-subtitle {
  background-color: black;
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  height: auto;
  opacity: 0.5;
  color: white;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  padding: 2vh 2vw;
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
