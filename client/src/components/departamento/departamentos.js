import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";

let formURL = "departamento/";

function actions() {
    return <div>
        <a href="#" className="badge badge-primary ml-2">Cargos</a>
        <a href="#" className="badge badge-secondary ml-2">Excluir</a>
    </div>;
}

class Departamentos extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost/trabalho-g2/server/DepartamentoAPI.php').then(response => {
            response.json().then(json => {
                json.forEach(item => {
                    item.acoes = actions();
                });
                this.setState({data: json});
            })
        })
    }


    render() {
        let columns = [{
            Header: 'ID',
            accessor: 'id' // String-based value accessors!
        }, {
            Header: 'Nome',
            accessor: 'nome',
            width: getColumnWidth(this.state.data, 'nome', 'Nome')
        }, {
            Header: 'Ações',
            accessor: 'acoes',
            filterable: false,
            minWidth: 150
        }];

        console.log(this.state.data);
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
                        minRows={0}
                        filterable
                    />
                </div>
            </div>
        );
    }
}


export default Departamentos;