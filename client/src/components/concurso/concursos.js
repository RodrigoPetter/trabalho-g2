import React, {Component} from "react";
import ReactTable from "react-table";

const data = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
        name: 'Jason Maurer',
        age: 23,
    }
},{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
        name: 'Jason Maurer',
        age: 23,
    }
},{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
        name: 'Jason Maurer',
        age: 23,
    }
},{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
        name: 'Jason Maurer',
        age: 23,
    }
},{
    name: 'Rodrigo',
    age: 26,
    friend: {
        name: 'aaaaaaaa',
        age: 23,
    }
}];

const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
}, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
}, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
}];

class Concursos extends Component {
    render() {
        return (
            <div className="container bg-white">
                <h3 className="border-bottom border-gray pb-2 mb-0">Concursos</h3>
                <div className="row margin15">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-sm">Adicionar</button>
                    </div>
                </div>
                <div className="row margin15">
                    <ReactTable
                        data={data}
                        columns={columns}
                        filterable
                    />
                </div>
            </div>
        );
    }
}

export default Concursos;