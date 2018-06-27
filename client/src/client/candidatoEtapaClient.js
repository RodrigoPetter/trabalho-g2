import configuration from "../configuration";
import notify from "./notify";

let url = configuration.baseURL + 'candidatoEtapaAPI.php';

class candidatoEtapaClient {

    static getAll(concurso, etapa, callback) {
        return fetch(url + '?concurso=' + concurso + '&etapa=' + etapa)
            .then(response => {
                console.log('response', response);
                let temp = response.clone();
                response.json()
                    .then(callback)
                    .catch(error => {
                        notify.erro("Erro no parse da mensagem: " + error);
                        temp.text()
                            .then(text => {
                                notify.erro("Mensagem original: " + text);
                            });
                    })
            })
            .catch(error => {
                notify.erro(error);
            })
    }

    static update(data, callback) {
        return fetch(url+'?id=0', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: data.join("&")
        }).then(response => {
            if (!response.ok) {
                response.text().then(txt =>{
                    notify.erro(txt)
                })
            } else {
                callback(response)
            }
        });
    }
}

export default candidatoEtapaClient;