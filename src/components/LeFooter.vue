<template>
  <v-row class="bg-footer px-10 py-8">
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="px-4 pb-4" justify="center">
      <v-row>
        <h3>ADRESSE</h3>
      </v-row>
      <v-row>
        <a
            style="text-decoration: none; color: black;"
            target="_blank"
            href="https://www.google.com/maps/place/4+Rue+Marceau,+34000+Montpellier/@43.6080465,3.8729604,19.75z/data=!4m6!3m5!1s0x12b6afa85553d009:0x8dcb3dc730c52416!8m2!3d43.6081004!4d3.8731839!16s%2Fg%2F11q2vwqkmm?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D">
          <p>4 rue marceau, 34000 Montpellier</p>
        </a>
      </v-row>
      <v-row>
        <h3>HORAIRES</h3>
      </v-row>
      <v-row>
        <p>
          Du Mardi au Samedi de 10h à 19h<br/>
          Dimanche de 9h à 13h
        </p>
      </v-row>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="px-4 pb-4" justify="center">
      <v-row>
        <h3>CONTACT</h3>
      </v-row>
      <v-row>
        <v-col>
          <v-row>
            <p>Email :</p>
          </v-row>
          <v-row>
            <p>Tél :</p>
          </v-row>
        </v-col>
        <v-col>
          <v-row>
            <a href="mailto:contact@craqueline.fr">
              contact@craqueline.fr
            </a>
          </v-row>
          <v-row>
            <a href="tel:+33430968462">
              04 30 96 84 62
            </a>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-btn
            size="x-small"
            href="https://www.google.com/search?sa=X&sca_esv=69ce569418db93e5&sxsrf=AE3TifMpkJmyYEnSBK6Q_iGfpadQKJJ_GA:1765796238854&q=Craqueline+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDWwMDO0NDE1MzcyszC2tLQ0NtjAyPiKkd-5KLGwNDUnMy9VwbEss3gRK7oIAMsNwbY_AAAA&rldimm=15086194567268399930&tbm=lcl&hl=fr-FR&ved=2ahUKEwih6b_Mt7-RAxUsSaQEHXWZENkQ9fQKegQILRAG&biw=1920&bih=945&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            aria-label="Ouvrir Google Avis (nouvel onglet)"
            class="mr-2"
            icon
            color="black"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-google</v-icon>
        </v-btn>

        <v-btn
            size="x-small"
            href="https://www.facebook.com/profile.php?id=61577574747182"
            target="_blank"
            aria-label="Ouvrir Facebook (nouvel onglet)"
            class="mr-2"
            icon
            color="black"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-facebook</v-icon>
        </v-btn>

        <v-btn
            size="x-small"
            href="https://www.instagram.com/craqueline.chou/"
            target="_blank"
            aria-label="Ouvrir Instagram (nouvel onglet)"
            class="mr-2"
            icon
            color="black"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-instagram</v-icon>
        </v-btn>
        <v-btn
            size="x-small"
            href="https://www.tiktok.com/@craqueline.chou"
            target="_blank"
            aria-label="Ouvrir TikTok (nouvel onglet)"
            class="mr-2"
            icon
            color="black"
            elevation="0">
          <i style="color: rgb(var(--v-theme-secondary))" class="fa-brands fa-tiktok fa-xl"></i>
        </v-btn>
        <v-btn
            size="x-small"
            href="https://www.linkedin.com/company/craqueline/"
            target="_blank"
            aria-label="Ouvrir Linkedin (nouvel onglet)"
            class="mr-2"
            icon
            color="black"
            elevation="0">
          <v-icon color="secondary" size="25">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn
            size="x-small"
            href=""
            target="_blank"
            aria-label="Ouvrir Tripadvisor (nouvel onglet)"
            class="mr-2"
            icon
            color="black"
            elevation="0">
          <i style="color: rgb(var(--v-theme-secondary))" class="fa-brands fa-tripadvisor fa-xl"></i>
        </v-btn>
      </v-row>
    </v-col>
    <v-spacer cols="12" xs="0" sm="0" md="1" lg="2" xl="2"></v-spacer>
    <v-col cols="12" xs="12" sm="12" md="3" lg="2" xl="2" class="px-4" justify="center">
      <v-row>
        <a href="#section-0">Accueil</a>
      </v-row>
      <v-row>
        <a href="#section-2">Notre Histoire</a>
      </v-row>
      <v-row>
        <a href="#section-3">La Carte</a>
      </v-row>
      <v-row>
        <a href="#section-4">La Boutique</a>
      </v-row>
      <v-row>
        <a href="#">Contact</a>
      </v-row>
      <v-spacer class="py-4"></v-spacer>
      <v-row>
        <a href="#">Mentions légales</a>
      </v-row>
      <v-row>
        <a href="#">CGV</a>
      </v-row>
      <v-row>
        <a href="#">Politique de confidentialité</a>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>

</script>

<style scoped>
.bg-footer {
  background-color: rgb(var(--v-theme-secondary));
}

h3 {
  font-size: 2em;
  font-weight: 550;
}
a {
  color: inherit;
}
</style>