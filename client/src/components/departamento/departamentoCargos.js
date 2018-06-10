import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import configuration from "../../configuration";

let formURL = "cargo/";

class DepartamentoCargos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            departamento: props.match.params.id,
            loading: true
        };
    }

    componentDidMount() {
        fetch(configuration.baseURL + 'DepartamentoCargoAPI.php?departamento_id=' + this.state.departamento)
            .then(response => {
                let temp = response.clone();
                response.json().then(colecao => {

                    colecao.forEach(depCargo => {
                    console.log(depCargo);
                    });

                }).catch(error => {
                    alert("Erro no parse da mensagem: " + error);
                    temp.text().then(text => {
                        alert("Mensagem original: " + text);
                    });
                })
            })
            .catch(error => {
                alert("Error: " + error);
            })
            .finally(() => {
                this.setState({loading: false})
            })
    }

    delete(event, value) {
        event.preventDefault();
        fetch(configuration.baseURL + 'DepartamentoCargosAPI.php?id=' + value, {
            method: 'DELETE'
        }).then(response => {
            this.componentDidMount();
        });
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
            minWidth: 100,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];

        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Cargos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Novo cargo
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


export default DepartamentoCargos;