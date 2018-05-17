import React, {Component} from "react";

class ConcursoForm extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h2>Inserir Concurso</h2>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Descrição</label>
                        <input type="te" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
    );
    }
    }

    export default ConcursoForm;