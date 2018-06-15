import configuration from "../configuration";

let url = configuration.baseURL + 'EtapasAPI.php';

class etapasClient {

    static getAll(concursoId, callback) {
        return fetch(url + '?concurso_id=' + concursoId)
            .then(response => {
                let temp = response.clone();
                response.json()
                    .then(callback)
                    .catch(error => {
                        alert("Erro no parse da mensagem: " + error);
                        temp.text()
                            .then(text => {
                                alert("Mensagem original: " + text);
                            });
                    })
            })
            .catch(error => {
                alert("Error: " + error);
            })
    }

    static getOne(id, callback) {
        return fetch(url + (!id ? '' : '?id=' + id))
            .then(response => {
                let temp = response.clone();
                response.json().then(callback).catch(error => {
                    alert("Erro no parse da mensagem: " + error);
                    temp.text().then(text => {
                        alert("Mensagem original: " + text);
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
                        alert("Erro no parse da mensagem: " + error);
                        temp.text()
                            .then(text => {
                                alert("Mensagem original: " + text);
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
                    alert("Erro: "+txt)
                })
            } else {
                callback(response)
            }
        });
    }
}

export default etapasClient;