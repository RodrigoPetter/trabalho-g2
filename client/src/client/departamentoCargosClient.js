import configuration from "../configuration";
import cargoClient from "./cargoClient";
import notify from "./notify";

let url = configuration.baseURL + 'DepartamentoCargoAPI.php';

class departamentoCargoClient {

    static getAll(departamentoId, callback) {
        return fetch(url + '?departamento_id=' + departamentoId)
            .then(response => {
                let temp = response.clone();
                response.json()
                    .then(depCargos => {
                        if (!!depCargos) {
                            depCargos.forEach(item => {
                                cargoClient.getOne(item.cargo_id, cargo => {
                                    item.cargo = cargo[0];
                                    callback(depCargos)
                                })
                            });
                        } else {
                            callback(false)
                        }
                    })
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

    static salvar(data, callback) {
        return fetch(url, {
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

    static delete(departamento_id, cargo_id, callback) {
        return fetch(url + '?departamento_id=' + departamento_id + '&cargo_id=' + cargo_id, {
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

export default departamentoCargoClient;