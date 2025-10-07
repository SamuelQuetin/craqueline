<template>
  <h2>LA CARTE</h2>
  <section id="savoir-faire"/>
  <v-spacer class="padding-v-spacer-h2"></v-spacer>
  <v-row class="padding-v-row" align="center" >

      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center"  order-xs="2" order-sm="2" order-md="1" order-lg="1" order-xl="1">
        <v-img src="@/assets/photo/chouxLaCarte.png" max-width="20em"></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="padding-text justify-text" order-xs="1" order-sm="1" order-md="2" order-lg="2" order-xl="2">
        <h3 class="pb-8">UN SAVOIR - FAIRE ARTISANAL</h3>
        <p class="marging-text pb-4"> Chaque jour, nous produisons une vaste gamme de chou à la crème.
        </p>
        <p class="marging-text">
          Adoptant une démarche responsable, nous respectons la saisonnalité des produits, c’est pourquoi certains
          parfums laissent place à d’autre au fil de l’année
        </p>
      </v-col>
  </v-row>
  <v-row class="padding-v-row" align="center" >
    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="padding-text justify-text">
      <h3 class="pb-8">UNE PÂTISSERIE DURABLE</h3>
      <p class="marging-text pb-4"> Nous avons rigoureusement sélectionnés nos fournisseurs afin de travailler au
        maximum en circuit court et avec des produits de grande qualité
      </p>
      <ul class="marging-text justify-list">
        <li><p>la Maison Trébuchon au pied du Pic Saint Loup pour ses oeufs BIO</p></li>
        <li><p>Le moulin de Sauret à Montpellier pour sa farine BIO</p></li>
        <li><p>la maison Valrhona à Tain-l’Hermitage pour ses chocolats et pralinés haut de gamme</p></li>
      </ul>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center">
      <v-img src="@/assets/photo/chouxNoisette.jpg" max-width="20em"></v-img>
    </v-col>
  </v-row>
  <v-row class="padding-v-row" align="center" >
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center" order-xs="2" order-sm="2" order-md="1" order-lg="1" order-xl="1">
      <v-img src="@/assets/photo/chouxNoisette.jpg" max-width="20em"></v-img>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="padding-text justify-text" order-xs="1" order-sm="1" order-md="2" order-lg="2" order-xl="2">
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
  <v-row class="padding-v-row">
    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="padding-text justify-text">
      <h3 class="pb-8">VOS ÉVÈNEMENTS SUBLIMÉS</h3>
      <p class=" pb-4">Mariage, anniversaire ou réception privée : émerveillez vos invités avec nos pièces
        montées de choux et nos Saint-Honoré d'exception.
      </p>
      <p>Raffinés, gourmands et personnalisables, ils allient traditions et élégance pour
        transformer vos instants précieux en souvenirs inoubliables.
      </p>
      <v-btn class="mt-8" variant="outlined" elevation="0"> DEMANDER UN DEVIS </v-btn>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex justify-center">
      <v-img src="@/assets/photo/PieceMontee.png" max-width="20em"></v-img>
    </v-col>

  </v-row>
  <v-row class="row-bleed bg-s mt-4 pa-6" justify="center" cols="12">
    <v-col v-for="(image, i) in imagesSaintHono" :key="i" cols="12" xs="12" sm="12" md="2" lg="2" xl="2" class="overflow-visible d-flex justify-center">
      <v-img :src="image" class="image-pop"></v-img>
    </v-col>
  </v-row>
  <v-row class="row-bleed bg-q mt-4 pa-6" cols="12">
    <v-col v-for="(image, i) in imagesCarte" :key="i" cols="12" xs="12" sm="12" md="3" lg="3" xl="3" class="overflow-visible d-flex justify-center">
      <v-img :src="image" class="image-pop"></v-img>
    </v-col>
  </v-row>
</template>
<script setup>
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
h2 {
  color: black;
  font-size: 5em;
  position: absolute;
  margin-left: -10vh;
}
.padding-text {
  padding-right: 10vh;
}

.justify-text {
  text-align: center;
}
.justify-list {
  text-align: start;
}


.padding-v-row {
  padding-left: 5vh;
  padding-right: 5vh;
  padding-bottom: 5vh;
}
.padding-v-spacer-h2{
  padding-bottom: 20vh;
}
.marging-text {
  margin-left: 10vh;
  margin-right: 10vh;
}

@media (max-width: 150dvh) {
  h2 {
    color: black;
    font-size: 4em;
    position: absolute;
    margin-left: 0;
  }

  .padding-text {
    padding-left: 2vh;
    padding-right: 2vh;
  }

  .marging-text {
    margin-left: 2vh;
    margin-right: 2vh;
  }

  .padding-v-spacer-h2{
    padding-bottom: 10vh;
  }

  .padding-v-row {
    padding-left: 0;
    padding-right: 0;
  }
}

p {
  font-size: 1.2em;
}
h3 {
  font-weight: 500;
  font-size: 2.5em;

}

.bg-q {
  background-color: rgb(var(--v-theme-quaternary));;
}

.bg-s {
  background-color: rgb(var(--v-theme-secondary));;
}


/* Le v-row occupe 100vw et est centré par rapport à la fenêtre */
.row-bleed {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  overflow: visible;
}

/* Laisser déborder */
.row-bleed .v-col { overflow: visible; }

/* Décalages pour un débordement symétrique (à ajuster à l’œil) */
.row-bleed .v-col:nth-child(1) .image-pop { transform: translateX(-15%); }
.row-bleed .v-col:nth-child(2) .image-pop { transform: translateX(-10%); }
.row-bleed .v-col:nth-child(3) .image-pop { transform: translateX(10%); }
.row-bleed .v-col:nth-child(4) .image-pop { transform: translateX(15%); }

.image-pop {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-pop:hover {
  transform: scale(1.05);
  box-shadow:
      0 4px 15px rgba(0, 0, 0, 0.15), /* ombre principale douce */
      0 0 20px rgba(255, 182, 193, 0.2); /* légère lueur rosée pastel */
}

/* Mobile: on annule pour éviter le scroll horizontal */
@media (max-width: 960px) {
  .row-bleed {
    left: auto;
    transform: none;
    width: auto;
    max-width: none;
  }
}
</style>
