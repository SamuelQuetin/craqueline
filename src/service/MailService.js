import axios from "axios";

export class MailService {
    client = axios.create({
        baseURL: "MAIL_SERVICE_URL",
    });

    sendMail(data){
        return this.client.post("sendMail.php",data)
    }
}
export default new MailService();