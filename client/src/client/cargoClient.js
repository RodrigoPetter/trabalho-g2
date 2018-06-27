import configuration from "../configuration";
import notify from "./notify";

let url = configuration.baseURL + 'CargoAPI.php';

class cargoClient {

    static getAll(callback) {
        return fetch(url)
            .then(response => {
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

    static getOne(id, callback) {
        return fetch(url + (!id ? '' : '?id=' + id))
            .then(response => {
                let temp = response.clone();
                response.json().then(callback).catch(error => {
                    notify.erro("Erro no parse da mensagem: " + error);
                    temp.text().then(text => {
                        notify.erro("Mensagem original: " + text);
                    });
                })
            });
    }

    static salvar(id, data, callback) {
        return fetch(url + (!id ? '' : '?id=' + id), {
            method: 'POST',
            body: data,
        })
            .then(response => {
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
    }

    static delete(id, callback) {
        return fetch(url + '?id=' + id, {
            method: 'DELETE'
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

export default cargoClient;