import React, {Component} from "react";
import vagasClient from "../../client/vagasClient";
import cargoClient from "../../client/cargoClient";

class VagaForm extends Component {
    constructor(props) {
        super(props);
        console.log('props: ', props);
        this.state = {
            formInputs: {
                concurso_id: props.match.params.id || '',
                cargo_id: props.match.params.cargo_id || '',
                vagas: ''
            },
            isInsert: !props.match.params.cargo_id,
            cargoData: []
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.formInputs.cargo_id) {
            vagasClient.getOne(this.state.formInputs.concurso_id, this.state.formInputs.cargo_id, json => {
                console.log(json);
                this.setState(() => {
                    return {
                        formInputs: {
                            concurso_id: this.state.formInputs.concurso_id,
                            cargo_id: this.state.formInputs.cargo_id,
                            vagas: json[0].vagas
                        }
                    }
                });
            });
        }

        cargoClient.getAll(data => {
            this.setState({cargoData: data});

            vagasClient.getAll(this.state.formInputs.concurso_id, vagas => {
                this.setState(() => {
                    return {
                        cargoData: this.state.cargoData.filter(item => {
                            return !vagas.some(vaga => {
                                return vaga.cargo_id === item.id
                            });
                        })
                    }
                });
            })
        })
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
        let callback = () => {
            this.props.history.goBack();
        };
        if (this.state.isInsert) {
            data.append('concurso_id', this.state.formInputs.concurso_id);
            vagasClient.salvar(undefined, undefined, data, callback);
        } else {
            vagasClient.salvar(this.state.formInputs.concurso_id, this.state.formInputs.cargo_id, data, callback);
        }

    }

    render() {
        return (
            <div className="container bg-white">
                <h2>{this.state.isInsert ? 'Nova' : 'Editar'} Vaga</h2>
                <form onSubmit={this.salvar}>
                    <div className="form-group">
                        <label>Cargo</label>
                        <select value={this.state.formInputs.cargo_id}
                                className="form-control"
                                name="cargo_id"
                                id="cargo_id"
                                onChange={this.handleChange}
                                disabled={!this.state.isInsert}>
                            {this.state.cargoData.map((e, key) => {
                                return <option key={key} value={e.id}>{e.nome}</option>;
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Vagas</label>
                        <input type="number"
                               className="form-control"
                               name="vagas"
                               id="vagas"
                               value={this.state.formInputs.vagas}
                               onChange={this.handleChange}
                               placeholder="Vagas para o cargo" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default VagaForm;