import React, {Component} from "react";
import departamentoClient from "../../client/departamentoClient";

class DepartamentoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInputs: {id: props.match.params.id || '', nome: ''}
        };

        this.salvar = this.salvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.formInputs.id) {
            departamentoClient.getOne(this.state.formInputs.id, json => {
                console.log(json);
                this.setState(() => {
                    return {formInputs: {id: this.state.formInputs.id, nome: json[0].nome}}
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
        departamentoClient.salvar(this.state.formInputs.id, data, () => {
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div className="container bg-white">
                <h2>{this.state.formInputs.id ? 'Editar' : 'Novo'} departamento</h2>
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
                               placeholder="Nome do departamento" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        );
    }
}

export default DepartamentoForm;