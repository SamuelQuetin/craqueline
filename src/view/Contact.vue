
<template>
  <v-container class=" pa-5 bg_base" max-width="90em">
    <h2>CONTACTEZ-NOUS</h2>
    <v-form>
      <v-text-field label="Nom *" outlined v-model="nom"></v-text-field>
      <v-text-field label="E-mail *" outlined v-model="email"></v-text-field>
      <v-text-field label="Numéro de téléphone" outlined v-model="numPhone"></v-text-field>
      <v-text-field label="Date de l'évènement" outlined v-model="date"></v-text-field>
      <v-text-field label="Lieu de l'évènement" outlined v-model="where"></v-text-field>
      <v-text-field label="Nombre de convive" outlined v-model="numPers"></v-text-field>
      <v-text-field label="Votre message *" outlined v-model="message"></v-text-field>
      <v-btn @click="sendMail"> Envoyer </v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {MailService} from "@/service/MailService.js";
import {ref} from "vue";

const mailService = new MailService();
const nom = ref('Samuel');
const email = ref('samquetinuel@gmail.com');
const numPhone = ref('0619461765');
const date = ref(' demain');
const where = ref('ici');
const numPers = ref('125');
const message = ref('Bonjkours je suis le petit Samuel pourquoi chatgpt a ajouter petit devant samuel ? je vais le taper');
function sendMail(){

  let data = `<b>Nom :</b> `+ nom.value +`<br>
    <b>E-mail :</b> `+ email.value +` <br>
    <b>Numéro de téléphone :</b> `+ numPhone.value +` <br>
    <b>Date de l'évènement :</b> `+ date.value +` <br>
    <b>Lieu de l'évènement :</b> `+ where.value +` <br>
    <b>Nombre de convives :</b> `+ numPers.value +` <br><br>

    <b>Message :</b><br>
    `+ message.value +` `
  mailService.sendMail(data).then(res => console.log(res)).catch(err => console.log(err))

}
</script>
<style scoped>
h2 {
  color: black;
  font-size: 4em;
  padding-top: 5vh;
  margin-left: 0;
}
</style>