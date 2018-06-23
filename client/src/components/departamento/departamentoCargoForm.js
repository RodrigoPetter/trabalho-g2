import React, {Component} from "react";
import departamentoCargoClient from "../../client/departamentoCargosClient";
import departamentoClient from "../../client/departamentoClient";
import cargoClient from "../../client/cargoClient";

class DepartamentoCargoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {departamento_id: props.match.params.id, cargo_id: ''},
            departamentoData: {},
            cargoData: []
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        departamentoClient.getOne(this.state.formInputs.departamento_id, json => {
            console.log(json);
            this.setState({departamentoData: json[0]});
        });

        departamentoCargoClient.getAll(this.state.formInputs.departamento_id, depCargos => {
            cargoClient.getAll(data => {
                this.setState({cargoData: data.filter((cargo) => {
                        return !depCargos.some(depcargo =>{
                            return depcargo.cargo_id === cargo.id;
                        });
                    })});
            });
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
        const data = new FormData(event.target);
        departamentoCargoClient.salvar(data, () => {
            this.props.history.goBack();
        });
    }

    render() {
        console.log('render');
        return (
            <div className="container bg-white">
                <h2>Adicionar cargo ao departamento</h2>
                <form onSubmit={this.salvar}>
                    <div className="form-group">
                        <label>Departamento</label>
                        <select value={this.state.formInputs.departamento_id}
                                className="form-control"
                                name="departamento_id"
                                id="departamento_id"
                                onChange={this.handleChange}>
                            <option value={this.state.departamentoData.id}>{this.state.departamentoData.nome}</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Cargo</label>
                        <select value={this.state.formInputs.cargo_id}
                                className="form-control"
                                name="cargo_id"
                                id="cargo_id"
                                onChange={this.handleChange}>
                            {this.state.cargoData.map((e, key) => {
                                return <option key={key} value={e.id}>{e.nome}</option>;
                            })}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                </form>
            </div>
        );
    }
}

export default DepartamentoCargoForm;