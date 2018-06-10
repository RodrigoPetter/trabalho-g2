import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import configuration from "../../configuration";

let formURL = "departamento/";

class Departamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch(configuration.baseURL + 'DepartamentoAPI.php').then(response => {
            let temp = response.clone();
            response.json().then(json => {
                this.setState({data: json});
            }).catch(error => {
                alert("Erro no parse da mensagem: " + error);
                temp.text().then(text => {
                    alert("Mensagem original: " + text);
                });
            })
        }).finally(() => {
            this.setState({loading: false})
        })
    }

    delete(event, value) {
        event.preventDefault();
        fetch(configuration.baseURL + 'DepartamentoAPI.php?id='+value, {
            method: 'DELETE'
        }).then(response => {
          this.componentDidMount();
        });
    }

    editar(event, value) {
        event.preventDefault();
        this.props.history.push('departamento/'+value+'/');
    }

    render() {
        let columns = [{
            Header: 'ID',
            accessor: 'id'
        }, {
            Header: 'Nome',
            accessor: 'nome',
            width: getColumnWidth(this.state.data, 'nome', 'Nome')
        }, {
            Header: 'Ações',
            accessor: 'id',
            filterable: false,
            minWidth: 190,
            Cell: ({value}) => (<div>
                <a href="#" className="badge badge-primary ml-2">Cargos</a>
                <a href="#" onClick={(event) => {
                    this.editar(event, value)
                }} className="badge badge-secondary ml-2">Editar</a>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];

        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Departamentos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Novo departamento
                        </button>
                    </div>
                </div>
                <div className="row margin15">
                    <ReactTable
                        data={this.state.data}
                        columns={columns}
                        showPagination={false}
                        loading={this.state.loading}
                        minRows={0}
                        filterable
                    />
                </div>
            </div>
        );
    }
}


export default Departamentos;