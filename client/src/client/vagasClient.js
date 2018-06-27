import configuration from "../configuration";
import notify from "./notify";

let url = configuration.baseURL + 'VagasAPI.php';

class vagasClient {

    static getAll(concursoId, callback) {
        return fetch(url + '?concurso_id=' + concursoId)
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

    static getOne(concurso, cargo, callback) {
        return fetch(url + '?concurso_id=' + concurso + '&cargo_id=' + cargo)
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

    static salvar(concurso, cargo, data, callback) {
        console.log('data', data.values());
        return fetch(url + (!concurso ? '' : '?concurso_id=' + concurso) + (!cargo ? '' : '&cargo_id=' + cargo), {
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

    static delete(concurso_id, cargo_id, callback) {
        return fetch(url + '?concurso_id=' + concurso_id + '&cargo_id=' + cargo_id, {
            method: 'DELETE'
        }).then(response => {
            if (!response.ok) {
                response.text().then(txt => {
                    notify.erro(txt)
                })
            } else {
                callback(response)
            }
        });
    }
}

export default vagasClient;