<template>
  <v-carousel
      cycle
      :show-arrows="!isMobile"
      hide-delimiters
      class="mb-4"
      height="85vh"
  >
    <v-carousel-item
        v-for="(image, index) in images"
        :key="index"
        width="100%"
    >
      <LazyPictures
          :src="image.src"
          :alt="image.alt"
          :lazy="true"
          :isMobile="isMobile"
          maxWidth="100%"
      />
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import LazyPictures from "@/components/LazyPictures.vue";
import Carte1 from "@/assets/carte/Carte1.jpg"
import Carte2 from "@/assets/carte/Carte2.jpg"
import Carte3 from "@/assets/carte/Carte3.jpg"
import Carte4 from "@/assets/carte/Carte4.jpg"

const props = defineProps({isMobile: Boolean})

const images = [
    {
      src : Carte1,
      alt : "Carte menu \"Nos Boissons Chaudes\" : Ristretto 1,50€, Espresso 2€, Double espresso 3,50€, Americano 2,50€. Espresso macchiato 3€, Cappuccino 4€, Latté macchiato 4,50€. Chaï Latté 5€, Matcha Latté 5€, Chocolat Guanaja Valrhona 4,50€, Mocaccino 5,50€. Thé et infusions 4€."
    },
    {
      src : Carte2,
      alt : "Carte menu \"Nos Boissons Fraîches\" : Café glacé 4€, Café latté glacé 5€, Chaï latté glacé 5,50€, Matcha latté glacé 5,50€, Chocolat glacé 5€, Moccacino glacé 6€. Milkshake 6€ (vanille, fraise, chocolat, banane), Citronnade maison 35cl 4,50€, Thé glacé maison 35cl 4,50€. Kombucha 33cl 5,50€, Jus de fruit 25cl 4€ (abricot, pomme gingembre, pêche), Eau plate 33cl 2,50€, Eau pétillante 33cl 3€."
    },
    {
      src : Carte3,
      alt : "Carte menu \"Nos Choux\" : chou individuel 3,10€, boîte 6 choux 18€, boîte 12 choux 35€, boîte 18 choux 50€. Offre gourmande : chou à 3€ avec boisson. Parfums disponibles : Vanille de Madagascar, Vanille & Caramel, Caramel beurre salé, Café d'Éthiopie, Chocolat noir Valrhona 80%, Praliné amande noisette, Pistache de Sicile, Citron Yuzu, Fruit de la passion. Selon saison : rose litchi, mangue, cacahuète, coco citron vert, fraise rhubarbe, tiramisu, noix de pécan, matcha, crème de marron, fleur d'oranger."
    },
    {
      src : Carte4,
      alt : "Carte menu \"Nos Spécialités à Partager\" (sur commande 48h à l'avance). Saint Ho' Classique, vanille de Madagascar et caramel vanillé au beurre salé : 3/4 parts 26€, 4/6 parts 36€, 6/8 parts 42€. Saint Ho' du Moment, parfum variable (chocolat, noisette, pistache, pécan, cacahuète, marron, fruit de saison…) : 3/4 parts 30€, 4/6 parts 40€, 6/8 parts 46€."
    },
]
</script>
