<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">LA CARTE</h2>
  <section id="savoir-faire"/>
  <v-spacer v-if="!isMobile" class="padding-v-spacer-h2"></v-spacer>
  <v-row  align="center" >

      <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="d-flex justify-center"  order="2" order-xs="2" order-sm="2" order-md="1" order-lg="1" order-xl="1">
        <v-img src="@/assets/photo/chouxLaCarte.png" max-width="20em"></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9" class=" justify-text" order="1" order-xs="1" order-sm="1" order-md="2" order-lg="2" order-xl="2">
        <h3 class="pb-8">UN SAVOIR - FAIRE ARTISANAL</h3>
        <p class="marging-text pb-4"> Chaque jour,<br> nous produisons une vaste gamme de chou à la crème.
        </p>
        <p class="marging-text">
          Adoptant une démarche responsable,<br> nous respectons la saisonnalité des produits, c’est pourquoi certains
          parfums laissent place à d’autre au fil de l’année
        </p>
      </v-col>
  </v-row>
  <v-row  align="center" >
    <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9" class=" justify-text">
      <h3 class="pb-8">UNE PÂTISSERIE DURABLE</h3>
      <p class="marging-text pb-4"> Nous avons rigoureusement sélectionné nos fournisseurs afin de travailler au
        maximum en circuit court et avec des produits de grande qualité
      </p>
      <ul class="marging-text justify-list">
        <li><p>Oeufs BIO de la maison Trébuchon (Pic Saint Loup)</p></li>
        <li><p>Farine BIO du moulin de Sauret (Montpellier)</p></li>
        <li><p>Chocolats et pralinés haut de gamme Valrhona (Tain-l'Hermitage)</p></li>
      </ul>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="d-flex justify-center">
      <v-img src="@/assets/photo/chouxNoisette.jpg" max-width="20em"></v-img>
    </v-col>
  </v-row>
  <v-row  align="center" >
    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="d-flex justify-center" order="2" order-xs="2" order-sm="2" order-md="1" order-lg="1" order-xl="1">
      <v-img src="@/assets/photo/chouxNoisette.jpg" max-width="20em"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9" class=" justify-text" order="1" order-xs="1" order-sm="1" order-md="2" order-lg="2" order-xl="2">
      <h3 class="pb-8">UN SALON DE THÉ ET CAFÉ</h3>
      <p class="marging-text pb-4">Nous proposons un vaste choix de boissons chaudes et froides à déguster sur place ou
        à emporter, créées avec nos partenaires de Montpellier et de la région Occitanie.
      </p>
      <ul class="marging-text justify-list">
        <li><p>Café Bun</p></li>
        <li><p>Si le thé m’était conté</p></li>
        <li><p>Jus SIBIO</p></li>
        <li><p>BB Kombucha</p></li>
      </ul>
    </v-col>
  </v-row>
  <v-row >
    <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9" class=" justify-text">
      <h3 class="pb-8">VOS ÉVÈNEMENTS SUBLIMÉS</h3>
      <p class=" pb-4">Mariage, anniversaire ou réception privée : émerveillez vos invités avec nos pièces
        montées de choux et nos Saint-Honoré d'exception.
      </p>
      <p>Raffinés, gourmands et personnalisables, ils allient traditions et élégance pour
        transformer vos instants précieux en souvenirs inoubliables.
      </p>
      <v-btn class="mt-8" variant="outlined" elevation="0"> DEMANDER UN DEVIS </v-btn>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="d-flex justify-center">
      <v-img src="@/assets/photo/PieceMontee.png" max-width="20em"></v-img>
    </v-col>

  </v-row>

  <v-row class="row-bleed bg-s py-3 my-4" v-if="isMobile">
    <v-col>
      <v-carousel
          cycle
          hide-delimiters
          interval="500000"
          show-arrows="hover"
      >
        <v-carousel-item v-for="(image, i) in imagesSaintHono" :key="i">
          <v-img :src="image" width="100%"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <v-row class="row-bleed bg-s py-3 my-4" v-else>
    <v-col class="pa-0 ma-1" v-for="(image, i) in imagesSaintHono" :key="i" :width="(100/imagesSaintHono.length) + 'vw'">
      <v-img :src="image" class="image-pop" width="100%"></v-img>
    </v-col>
  </v-row>
  <v-row class="row-bleed bg-q mt-4 pa-6" v-if="isMobile">
    <v-col>
      <v-carousel
          cycle
          hide-delimiters
          interval="500000"
          show-arrows="hover"
      >
        <v-carousel-item v-for="(image, i) in imagesCarte" :key="i">
          <v-img :src="image" width="100%"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <v-row class="row-bleed bg-q mt-4 pa-6" cols="12" v-else>
    <v-col v-for="(image, i) in imagesCarte" :key="i" cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="overflow-visible d-flex justify-center">
      <v-img :src="image" class="image-pop"></v-img>
    </v-col>
  </v-row>
</template>

<script setup>
const props= defineProps({isMobile: Boolean})

const modulesCarte = import.meta.glob(
    '/src/assets/photo/carte/*.{png,jpg,jpeg,webp,svg,gif}',
    { eager: true, import: 'default' }
)
const imagesCarte = Object.entries(modulesCarte) // optionnel
    .map(([, url]) => url)

const modulesSaintHono = import.meta.glob(
    '/src/assets/photo/saintHono/*.{png,jpg,jpeg,webp,svg,gif}',
    { eager: true, import: 'default' }
)
const imagesSaintHono = Object.entries(modulesSaintHono) // optionnel
    .map(([, url]) => url)

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


.justify-text {
  text-align: center;
}
.justify-list {
  text-align: start;
}

.padding-v-spacer-h2{
  padding-bottom: 10vh;
}
.marging-text {
  margin-left: 10vw;
  margin-right: 10vw;
}

p {
  font-size: 1.2em;
}
h3 {
  font-weight: 500;
  font-size: 2.5em;

}

.bg-q {
  background-color: rgb(var(--v-theme-quaternary), 0.5);;
}

.bg-s {
  background-color: rgba(var(--v-theme-secondary),0.5);;
}


.row-bleed {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  overflow: visible;
}

.row-bleed .v-col { overflow: visible; }

.image-pop {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-pop:hover {
  transform: scale(1.05);
  box-shadow:
      0 4px 15px rgba(0, 0, 0, 0.15),
      0 0 20px rgba(255, 182, 193, 0.2);
}

@media (max-width: 960px) {
  .row-bleed {
    left: auto;
    transform: none;
    width: auto;
    max-width: none;
  }
}
</style>
