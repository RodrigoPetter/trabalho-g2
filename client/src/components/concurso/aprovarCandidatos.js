import React, {Component} from "react";
import etapasClient from "../../client/etapasClient";

class EtapaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concurso: props.match.params.id,
            etapa: {id: props.match.params.etapa_id},
            formInputs: {
                descricao: "",
                tipo: "",
                nota: 10
            }
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        etapasClient.getOne(this.state.etapa.id, json => {
            this.setState({etapa: json[0]});
        });
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
        let data = new FormData(event.target);
        data.append('concurso_id', this.state.concurso);
        etapasClient.salvar(undefined, data, () => {
            etapasClient.aprovar(this.state.concurso, this.state.etapa.id, data.get('nota'), () => {
                this.props.history.go(-2);
            });
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container bg-white">
                <h2>Aprovar candidatos da etapa {this.state.etapa.descricao}</h2>
                <form onSubmit={this.salvar}>
                    <div className="form-group">
                        <label>Nota de corte</label>
                        <input type="number"
                               className="form-control"
                               name="nota"
                               id="nota"
                               min="1" max="10"
                               value={this.state.formInputs.nota}
                               onChange={this.handleChange}
                               placeholder="Nota de corte" required/>
                    </div>
                    <div className="form-group">
                        <label>Descrição da próxima etapa</label>
                        <input type="text"
                               className="form-control"
                               name="descricao"
                               id="descricao"
                               value={this.state.formInputs.descricao}
                               onChange={this.handleChange}
                               placeholder="Descrição da próxima etapa" required/>
                    </div>
                    <div className="form-group">
                        <label>Tipo da próxima etapa</label>
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