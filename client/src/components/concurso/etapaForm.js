import React, {Component} from "react";
import etapasClient from "../../client/etapasClient";

class EtapaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {
                concurso_id: props.match.params.id || '',
                id: props.match.params.etapa_id || '',
                descricao: '',
                tipo: ''
            }
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.formInputs.id) {
            etapasClient.getOne(this.state.formInputs.id, json => {
                console.log(json);
                this.setState(() => {
                    return {
                        formInputs: {
                            concurso_id: this.state.formInputs.concurso_id,
                            id: this.state.formInputs.id,
                            descricao: json[0].descricao,
                            tipo: json[0].tipo
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
        console.log(event.target);
        let data = new FormData(event.target);
        data.append('concurso_id', this.state.formInputs.concurso_id);
        etapasClient.salvar(this.state.formInputs.id, data, () => {
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div className="container bg-white">
                <h2>{this.state.formInputs.id ? 'Editar' : 'Nova'} Etapa</h2>
                <form onSubmit={this.salvar}>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text"
                               className="form-control"
                               name="descricao"
                               id="descricao"
                               value={this.state.formInputs.descricao}
                               onChange={this.handleChange}
                               placeholder="Descrição da etapa" required/>
                    </div>
                    <div className="form-group">
                        <label>Tipo</label>
                        <select value={this.state.formInputs.tipo}
                                className="form-control"
                                name="tipo"
                                id="tipo"
                                onChange={this.handleChange}
                                required={true}>
                            <option></option>
                            <option key={1} value={1}>{'Classificatória'}</option>
                            <option key={2} value={2}>{'Eliminatória'}</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default EtapaForm;