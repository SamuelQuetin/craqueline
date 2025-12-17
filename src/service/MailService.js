import axios from "axios";

export class MailService {
    client = axios.create({
        baseURL: "https://www.craqueline.fr/api/",
        headers: {"Content-Type": "application/json"}
    });

    sendMail(data, nom){
        return this.client.post("sendMail.php",{
            "from":"contact@craqueline.fr",
            "to":"contact@craqueline.fr",
            "subject":"Demande de devis de "+ nom,
            "message": data
        })
    }

    sendMailToUser(data, email){
        return this.client.post("sendMail.php", {
            "from":"contact@craqueline.fr",
            "to": email,
            "subject":"Détail de la Demande de devis de Craqueline",
            "message": "Votre devis a bien été envoyé. Nous vous répondrons dans les plus brefs délais. <br>" +
                "Voici un résumé de votre demande de devis : <br>" +
                data

        })
    }
}
export default new MailService();