import React, {Component} from "react";

class ConcursoForm extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h2>Inserir Concurso</h2>
                <form>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" name="descricao" id="descricao" placeholder="Descrição do concurso" required/>
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" name="data" id="data" placeholder="Data do concurso" required/>
                    </div>
                    <div className="form-group">
                        <label>Local</label>
                        <input type="text" className="form-control" name="local" id="local" placeholder="Local do concurso" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
    );
    }
    }

    export default ConcursoForm;