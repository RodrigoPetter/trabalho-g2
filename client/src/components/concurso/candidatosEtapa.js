import React, {Component} from "react";
import ReactTable from "react-table";
import {getColumnWidth} from "../reacttable/tableUtils";
import candidatoEtapaClient from "../../client/candidatoEtapaClient";
import concursoClient from "../../client/concursoClient";
import etapasClient from "../../client/etapasClient";

class CandidatosEtapa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            concurso: props.match.params.id,
            etapa: props.match.params.etapa_id,
            concursoDescricao: "",
            etapaDescricao: "",
            loading: true
        };
    }

    componentDidMount() {
        this.setState({data: []});
        candidatoEtapaClient.getAll(this.state.concurso, this.state.etapa, candidatos => {
            this.setState({data: candidatos});
        })
            .finally(() => {
                this.setState({loading: false})
            });

        concursoClient.getOne(this.state.concurso, concurso => {
            this.setState({concursoDescricao: concurso[0].descricao})
        });

        etapasClient.getOne(this.state.etapa, etapa => {
            this.setState({etapaDescricao: etapa[0].descricao})
        });
    }

    aprovar(event) {
        event.preventDefault();
        this.props.history.push('aprovar/');
    }

    informar_nota(event, obj) {
        event.preventDefault();
        console.log(obj);
        let nota = prompt('Informar uma nota para ' + obj.candidato_nome, obj.nota);
        if (nota) {
            if (nota < 0 || nota > 10 || isNaN(nota)) {
                alert("Nota inválida!");
            } else {
                let data = [];
                data.push(encodeURIComponent('nota') + "=" + encodeURIComponent(nota));
                data.push(encodeURIComponent('etapa_id') + "=" + encodeURIComponent(obj.etapa_id));
                data.push(encodeURIComponent('inscricoes_candidato_id') + "=" + encodeURIComponent(obj.inscricoes_candidato_id));
                data.push(encodeURIComponent('inscricoes_concurso_cargo_cargo_id') + "=" + encodeURIComponent(obj.inscricoes_concurso_cargo_cargo_id));
                data.push(encodeURIComponent('inscricoes_concurso_cargo_concurso_id') + "=" + encodeURIComponent(obj.inscricoes_concurso_cargo_concurso_id));
                candidatoEtapaClient.update(data, () => {
                    this.componentDidMount();
                })
            }
        }
    }

    render() {

        let columns = [{
            Header: 'Candidato',
            accessor: 'candidato_nome',
            width: getColumnWidth(this.state.data, 'candidato_nome', 'Cargo')
        }, {
            Header: 'Cargo',
            accessor: 'cargo_nome',
            width: getColumnWidth(this.state.data, 'cargo_nome', 'Cargo')
        }, {
            Header: 'Nota',
            accessor: 'nota',
            width: 60
        }, {
            Header: 'Ações',
            id: 'acao',
            accessor: (d) => {
                return d;
            },
            filterable: false,
            minWidth: 120,
            Cell: ({value}) => (<div>
                <a href="#" onClick={(event) => {
                    this.informar_nota(event, value)
                }} className="badge badge-primary ml-2">Informar nota</a>
            </div>)
        }];
        console.log('render: ', this.state);
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Candidatos da
                    etapa {this.state.concursoDescricao} do
                    concurso {this.state.etapaDescricao}</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm"
                                onClick={(event) => {
                                    this.aprovar(event)
                                }}>Aprovar candidatos
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


export default CandidatosEtapa;