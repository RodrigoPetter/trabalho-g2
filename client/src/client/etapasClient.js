import configuration from "../configuration";
import notify from "./notify";

let url = configuration.baseURL + 'EtapasAPI.php';
let urlAprovar = configuration.baseURL + 'AprovarAPI.php';

class etapasClient {

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
        return fetch(url+ (!id ? '' : '?id=' + id), {
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

    static delete(concurso_id, etapa_id, callback) {
        return fetch(url + '?concurso_id=' + concurso_id + '&id=' + etapa_id, {
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

    static aprovar(concurso_id, etapa_id, nota, callback) {
        return fetch(urlAprovar + '?concurso_id=' + concurso_id + '&etapa_id=' + etapa_id, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: encodeURIComponent('nota') + "=" + encodeURIComponent(nota)
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

export default etapasClient;