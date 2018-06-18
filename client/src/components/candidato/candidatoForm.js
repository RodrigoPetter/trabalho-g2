import React, {Component} from "react";
import candidatoClient from "../../client/candidatoClient";
import InputMask from 'react-input-mask';

class CandidatoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {
                id: props.match.params.id || '',
                nome: '',
                telefone: '',
                endereco: '',
                bairro: '',
                cep: ''
            }
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.formInputs.id) {
            candidatoClient.getOne(this.state.formInputs.id, json => {
                console.log(json);
                this.setState(() => {
                    return {
                        formInputs: {
                            id: this.state.formInputs.id,
                            nome: json[0].nome,
                            telefone: json[0].telefone,
                            endereco: json[0].endereco,
                            bairro: json[0].bairro,
                            cep: json[0].cep
                        }
                    }
                });
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

    salvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        candidatoClient.salvar(this.state.formInputs.id, data, () => {
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div className="container bg-white">
                <h2>{this.state.formInputs.id ? 'Editar' : 'Novo'} Candidato</h2>
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
                               placeholder="Nome do candidato" required/>
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <InputMask type="text"
                                   className="form-control"
                                   name="telefone"
                                   id="telefone"
                                   value={this.state.formInputs.telefone}
                                   onChange={this.handleChange}
                                   placeholder="Telefone do candidato" required
                                   mask="(99)99999-9999"/>
                    </div>
                    <div className="form-group">
                        <label>Endereco</label>
                        <input type="text"
                               className="form-control"
                               name="endereco"
                               id="endereco"
                               value={this.state.formInputs.endereco}
                               onChange={this.handleChange}
                               placeholder="Endereco do candidato" required/>
                    </div>
                    <div className="form-group">
                        <label>Bairro</label>
                        <input type="text"
                               className="form-control"
                               name="bairro"
                               id="bairro"
                               value={this.state.formInputs.bairro}
                               onChange={this.handleChange}
                               placeholder="Bairro do candidato" required/>
                    </div>
                    <div className="form-group">
                        <label>CEP</label>
                        <InputMask type="text"
                                   className="form-control"
                                   name="cep"
                                   id="cep"
                                   value={this.state.formInputs.cep}
                                   onChange={this.handleChange}
                                   placeholder="CEP do candidato" required
                                   mask="99999-999"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default CandidatoForm;