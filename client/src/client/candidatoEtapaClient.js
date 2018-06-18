import configuration from "../configuration";

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
}

export default candidatoEtapaClient;