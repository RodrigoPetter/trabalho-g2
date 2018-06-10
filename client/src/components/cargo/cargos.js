import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import configuration from "../../configuration";

let formURL = "cargo/";

class Cargos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch(configuration.baseURL + 'CargoAPI.php').then(response => {
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
        fetch(configuration.baseURL + 'CargoAPI.php?id='+value, {
            method: 'DELETE'
        }).then(response => {
          this.componentDidMount();
        });
    }

    editar(event, value) {
        event.preventDefault();
        this.props.history.push('cargo/'+value+'/');
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
            minWidth: 150,
            Cell: ({value}) => (<div>
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


export default Cargos;