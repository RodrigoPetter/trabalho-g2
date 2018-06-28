import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import cargoClient from "../../client/cargoClient";

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

        cargoClient.getAll(json => {
            this.setState({data: json})
        })
            .finally(() => {
                this.setState({loading: false})
            });

    }

    delete(event, value) {
        event.preventDefault();
        cargoClient.delete(value, response => {
            this.componentDidMount();
        });
    }
    novo(event) {
        event.preventDefault();
        this.props.history.push(formURL);
    }
    editar(event, value) {
        event.preventDefault();
        this.props.history.push('cargo/' + value + '/');
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
                                onClick={(event)=>{this.novo(event)}}>Novo cargo
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