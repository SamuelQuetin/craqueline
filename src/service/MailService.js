import axios from "axios";

export class MailService {
    client = axios.create({
        baseURL: "https://www.craqueline.fr/api/",
        headers: {"Content-Type": "application/json"}
    });

    sendMail(data){
        return this.client.post("sendMail.php",{
            "from":"contact@craqueline.fr",
            "to":"contact@craqueline.fr",
            "subject":"Demande de devis",
            "message": data
        })
    }
}
export default new MailService();