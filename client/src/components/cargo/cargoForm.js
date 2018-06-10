import React, {Component} from "react";
import configuration from "../../configuration";

class cargoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {id: props.match.params.id || '', nome: ''}
        };

        this.salvar = this.salvar.bind(this);
        this.getURL = this.getURL.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.formInputs.id) {
            fetch(this.getURL())
                .then(response => {
                    let temp = response.clone();
                    response.json().then(json => {
                        console.log(json);
                        this.setState(() => {
                            return {formInputs: {id: this.state.formInputs.id, nome: json[0].nome}}
                        });
                    }).catch(error => {
                        alert("Erro no parse da mensagem: " + error);
                        temp.text().then(text => {
                            alert("Mensagem original: " + text);
                        });
                    })
                });
        }
    }

    handleChange(el) {
        let inputName = el.target.name;
        let inputValue = el.target.value;
        let statusCopy = Object.assign({}, this.state);
        statusCopy.formInputs[inputName] = inputValue;
        this.setState(statusCopy);
    }

    getURL() {
        let URL = configuration.baseURL + 'CargoAPI.php' + (!this.state.formInputs.id ? '' : '?id=' + this.state.formInputs.id);
        console.log('fetchURL: ', URL);
        return URL;
    }

    salvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch(this.getURL(),
            {
                method: 'POST',
                body: data,
            }).then(response => {
            let temp = response.clone();
            response.json().then(json => {
                console.log(json);
                this.props.history.goBack();
            }).catch(error => {
                alert("Erro no parse da mensagem: " + error);
                temp.text().then(text => {
                    alert("Mensagem original: " + text);
                });
            })
        })
    }

    render() {
        console.log(this.state.formInputs);
        return (
            <div className="container bg-white">
                <h2>{this.state.formInputs.id ? 'Editar' : 'Novo'} cargo</h2>
                <form onSubmit={this.salvar}>
                    <div className="form-group" hidden={!this.state.formInputs.id}>
                        <label>ID</label>
                        <input type="text"
                               className="form-control"
                               name="id"
                               id="id"
                               value={this.state.formInputs.id}
                               placeholder="ID" disabled={true}/>
                    </div>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text"
                               className="form-control"
                               name="nome"
                               id="nome"
                               value={this.state.formInputs.nome}
                               onChange={this.handleChange}
                               placeholder="Nome do cargo" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default cargoForm;