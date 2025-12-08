<template>
  <v-container class=" pa-5 bg_base" max-width="90em">
    <h2>CONTACTEZ-NOUS</h2>
    <v-form
        v-model="validForm"
    >
      <v-text-field
          v-model="nom"
          label="Nom"
          :rules="nameRules"
          outlined
          required
          type="text"
      ></v-text-field>
      <v-text-field
          v-model="email"
          label="E-mail"
          :rules="emailRules"
          outlined
          required
          type="email"
      ></v-text-field>
      <v-text-field
          v-model="numPhone"
          label="Numéro de téléphone"
          :rules="phoneRules"
          outlined
          type="phone"
      ></v-text-field>
      <v-date-picker
          v-model="date"
          color="quaternary"
          label="Date de l'évènement"
          :allowed-dates="allowedDates"
          outlined
          type="date"
          class="mb-4"
      ></v-date-picker>
      <v-text-field
          v-model="where"
          label="Lieu de l'évènement"
          outlined
      ></v-text-field>
      <v-text-field
          v-model="numPers"
          label="Nombre de convive"
          outlined
      ></v-text-field>

      <v-textarea
          v-model="message"
          label="Votre message *"
          outlined
          counter="1028"
          required
          type="text"
          :rules="messageRules"
      ></v-textarea>
      <v-btn
          :disabled="!validForm"
          @click="sendMail">
        Envoyer
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {MailService} from "@/service/MailService.js";
import {ref} from "vue";

const mailService = new MailService();
const nom = ref();
const email = ref();
const numPhone = ref();
const date = ref();
const where = ref();
const numPers = ref();
const message = ref();
const validForm = ref(false);

const nameRules = [
  v => !!v || 'le champ Nom est obligatoire',
  v => (v && v.length <= 100) || 'le champ Nom doit avoir moins de 100 characters',
]

const emailRules = [
    v => !!v || "L'adresse email est requise",
    v => /.+@.+\..+/.test(v) || "L'adresse email doit être valide",
  ]

const messageRules = [
  v => !!v || 'Le message est requis',
  v => (v && v.length <= 1028) || 'Le message doit être de 1028 caractères maximum',
]

const phoneRules = [
  v => !v || /^\d{10}$/.test(v) || 'Le format doit être 10 chiffres (ex: 0612345678)',
]


const today = new Date();
today.setHours(0, 0, 0, 0); // Réinitialiser l'heure pour comparer uniquement la date

const allowedDates = (val) => {
  return new Date(val) >= today;
};
function sendMail() {
  if(!validForm.value) return
  let data = ``;

  data += `<b>Nom :</b> ${nom.value}<br>`;
  data += `<b>E-mail :</b> ${email.value}<br>`;
  data += numPhone.value ? `<b>Numéro de téléphone :</b> ${numPhone.value}<br>` : ``;
  data += date.value ? `<b>Date de l'évènement :</b> ${date.value}<br>` : ``;
  data += where.value ? `<b>Lieu de l'évènement :</b> ${where.value}<br>` : ``;
  data += numPers.value ? `<b>Nombre de convives :</b> ${numPers.value}<br><br>` : ``;

  data += `<b>Message :</b><br>${message.value.replace(/\n/g, '<br>')}`;

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