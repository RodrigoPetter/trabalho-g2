import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import departamentoCargoClient from "../../client/departamentoCargosClient";
import departamentoClient from "../../client/departamentoClient";

let formURL = "cargo/";

class DepartamentoCargos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            departamento: props.match.params.id,
            departamentoNome: "",
            loading: true
        };
    }

    componentDidMount() {
        this.setState({data: []});
        departamentoCargoClient.getAll(this.state.departamento, depCargos => {
            this.setState({data: depCargos});
        })
            .finally(() => {
                this.setState({loading: false})
            });

        departamentoClient.getOne(this.state.departamento, departamento =>{
            this.state.departamentoNome = departamento[0].nome;
        })
    }

    delete(event, value) {
        event.preventDefault();
        departamentoCargoClient.delete(this.state.departamento, value, ()=>{
           this.componentDidMount();
        });
    }

    render() {

        let columns = [{
            Header: 'ID',
            accessor: 'cargo_id'
        }, {
            Header: 'Cargo',
            accessor: 'cargo.nome',
            width: getColumnWidth(this.state.data, 'cargo.nome', 'Cargo')
        }, {
            Header: 'Ações',
            accessor: 'cargo_id',
            filterable: false,
            minWidth: 100,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.delete(event, value)
                }} className="badge badge-secondary ml-2">Excluir</a>
            </div>)
        }];
        console.log('render: ', this.state.data);
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Cargos do departamento {this.state.departamentoNome}</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={function () {
                                    document.location.href = formURL
                                }}>Adicionar cargo
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