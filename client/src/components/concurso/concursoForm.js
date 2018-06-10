import React, {Component} from "react";
import concursoClient from "../../client/concursoClient";

class ConcursoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {
                id: props.match.params.id || '',
                descricao: '',
                data: '',
                local: '',
            }
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.formInputs.id) {
            concursoClient.getOne(this.state.formInputs.id, json => {
                console.log(json);
                this.setState(() => {
                    return {
                        formInputs: {
                            id: this.state.formInputs.id,
                            descricao: json[0].descricao,
                            data: json[0].data,
                            local: json[0].local
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
        concursoClient.salvar(this.state.formInputs.id, data, () => {
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div className="container bg-white">
                <h2>{this.state.formInputs.id ? 'Editar' : 'Novo'} Concurso</h2>
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
                        <label>Descrição</label>
                        <input type="text"
                               className="form-control"
                               name="descricao"
                               id="descricao"
                               value={this.state.formInputs.descricao}
                               onChange={this.handleChange}
                               placeholder="Descrição do concurso" required/>
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date"
                               className="form-control"
                               name="data"
                               id="data"
                               value={this.state.formInputs.data}
                               onChange={this.handleChange}
                               placeholder="Data do concurso"
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Local</label>
                        <input type="text"
                               className="form-control"
                               name="local"
                               id="local"
                               value={this.state.formInputs.local}
                               onChange={this.handleChange}
                               placeholder="Local do concurso" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default ConcursoForm;