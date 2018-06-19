import React, {Component} from "react";
import InscricaoClient from "../../client/inscricaoClient";
import ConcursoClient from "../../client/concursoClient";
import CargoClient from "../../client/cargoClient";
import VagasClient from "../../client/vagasClient";

class InscricaoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {
                candidato_id: props.match.params.id || '',
                concurso_cargo_concurso_id: '',
                concurso_cargo_cargo_id: '',
            },
            cargoData: [],
            vagasData: [],
            concursoData: []
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updVagas = this.updVagas.bind(this);
        this.getCargoDescricao = this.getCargoDescricao.bind(this);
    }

    componentDidMount() {
        CargoClient.getAll(data => {
            this.setState({cargoData: data});

            InscricaoClient.getOne(this.state.formInputs.candidato_id, inscricoe => {
                inscricoe.forEach(inscricao => {
                    let naoInscritos = this.state.concursoData.filter(e => e.id !== inscricao.concurso_cargo_concurso_id);
                    this.setState({concursoData: naoInscritos});
                });
            })
        });

        ConcursoClient.getAll(data => {
            this.setState({concursoData: data});
        });
    }

    handleChange(el) {
        let inputName = el.target.name;
        let inputValue = el.target.value;
        let statusCopy = Object.assign({}, this.state);
        statusCopy.formInputs[inputName] = inputValue;
        this.setState(statusCopy);
        if (inputName === 'concurso_cargo_concurso_id') {
            this.updVagas(inputValue);
        }
    }

    getCargoDescricao(cargoId) {
        let find = this.state.cargoData.find(cargo => {
            return cargo.id === cargoId;
        });
        return find.nome;
    }

    updVagas(cuncursoId) {
        VagasClient.getAll(cuncursoId, data => {
            this.setState({vagasData: data});
        });
    }

    salvar(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append('candidato_id', this.state.formInputs.candidato_id);
        InscricaoClient.salvar(data, () => {
            this.props.history.goBack();
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="container bg-white">
                <h2>Nova inscrição</h2>
                <form onSubmit={this.salvar}>
                    <div className="form-group">
                        <label>Concurso</label>
                        <select value={this.state.formInputs.concurso_cargo_concurso_id}
                                className="form-control"
                                name="concurso_cargo_concurso_id"
                                id="concurso_cargo_concurso_id"
                                onChange={this.handleChange} required={true}>
                            <option></option>
                            {this.state.concursoData.map((c, key) => {
                                return <option key={key} value={c.id}>{c.descricao}</option>;
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Cargo</label>
                        <select value={this.state.formInputs.concurso_cargo_cargo_id}
                                className="form-control"
                                name="concurso_cargo_cargo_id"
                                id="concurso_cargo_cargo_id"
                                onChange={this.handleChange}>
                            {this.state.vagasData.map((v, key) => {
                                return <option key={key}
                                               value={v.cargo_id}>{this.getCargoDescricao(v.cargo_id)}</option>;
                            })}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default InscricaoForm;