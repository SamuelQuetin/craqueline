<template>
  <h2 :class="isMobile ? 'h2-mobile':'h2-default'">CONTACTEZ-NOUS</h2>
  <v-row>
    <v-col cols="12" md="6">
        <span>
            Besoin d’un devis sur mesure ?<br>
            D’un renseignement ?<br>
            <br>
            Nous vous invitons à compléter le formulaire de contact ci-après.<br>
            Nous y répondrons dans les plus brefs délais.<br>
        </span>
    </v-col>
    <v-col cols="12" md="6">
      <v-form
          v-model="validForm"
      >
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
                v-model="nom"
                :rules="nameRules"
                label="Nom"
                outlined
                required
                type="text"
                prepend-icon="mdi-account"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                outlined
                required
                type="email"
                prepend-icon="mdi-email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
                v-model="numPhone"
                :rules="phoneRules"
                label="Numéro de téléphone"
                outlined
                type="phone"
                prepend-icon="mdi-phone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
                v-model="date"
                label="Date de l'évènement"
                prepend-icon="mdi-calendar"
            >
              <v-menu
                  activator="parent"
                  location="bottom"
              >
                <v-date-picker
                    v-model="date"
                    :allowed-dates="allowedDates"
                    color="quaternary"
                >
                </v-date-picker>
              </v-menu>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
                v-model="where"
                label="Lieu de l'évènement"
                outlined
                prepend-icon="mdi-map-marker"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
                v-model="numPers"
                label="Nombre de convives"
                outlined
                prepend-icon="mdi-account-multiple"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-textarea
            v-model="message"
            :rules="messageRules"
            counter="1028"
            label="Votre message *"
            outlined
            required
            type="text"
        ></v-textarea>
        <v-btn
            block
            color="secondary"
            :disabled="!validForm"
            @click="sendMail"
            :loading="isLoadingToSendMail"
        >
          Envoyer
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
  <v-snackbar
    v-model="isMailSended"
    timeout="5000"
    color="secondary"
  >
    Votre devis à bien été envoyé.
  </v-snackbar>
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
const isLoadingToSendMail = ref(false);
const isMailSended = ref(false);

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

const props = defineProps({isMobile: Boolean})

function sendMail() {
  if (!validForm.value) return
  isLoadingToSendMail.value = true;
  let data = ``;

  data += `<b>Nom :</b> ${nom.value}<br>`;
  data += `<b>E-mail :</b> ${email.value}<br>`;
  data += numPhone.value ? `<b>Numéro de téléphone :</b> ${numPhone.value}<br>` : ``;
  data += date.value ? `<b>Date de l'évènement :</b> ${date.value}<br>` : ``;
  data += where.value ? `<b>Lieu de l'évènement :</b> ${where.value}<br>` : ``;
  data += numPers.value ? `<b>Nombre de convives :</b> ${numPers.value}<br><br>` : ``;

  data += `<b>Message :</b><br>${message.value.replace(/\n/g, '<br>')}`;

  mailService.sendMail(data, nom.value).then(res => {
    console.log(res);
    mailService.sendMailToUser(data, email.value).then(ress => {
      console.log(ress)
      isMailSended.value = true;
    })
  }).catch(err => console.log(err))
      .finally(() => {
        isLoadingToSendMail.value = false;
      })

}
</script>

<style scoped>
.h2-default {
  color: black;
  font-size: 5em;
  font-weight: 10;
  white-space: nowrap;
}

.h2-mobile {
  color: black;
  font-size: 40px;
  position: relative;
  margin-left: 0;
}

</style>