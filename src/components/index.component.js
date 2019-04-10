import React , { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

	constructor(props){
		super(props);
		this.state = {students : []};
	}

	componentDidMount(){
		axios.get('http://localhost:4000/students')
			.then(response =>{
				this.setState({students : response.data});
			})
			.catch(function(error){
				console.log(error);
			})
	}

	tabRow(){
		return this.state.students.map((object, i) => {
			console.log(object,i);
			return <TableRow obj={object} key={i} indice={i} delete ={ (ind) => this.deleteItem(ind)} />;
		});
	}

	deleteItem(index){
		this.setState({students : this.state.students.filter((_,i) => i !== index)});
	}

	render(){
		return (
			<div>
				<h3>students List</h3>
				<table className="table table-striped" style={{ marginTop: 20 }}>
		            <thead>
		              <tr>
		                <th>First Name</th>
		                 <th>Middle Name</th>
		                <th>Last Name</th>
		                <th>Phone Number</th>
		                <th>Email</th>
		                <th colSpan="2">Action</th>
		              </tr>
		            </thead>
		            <tbody>
		              { this.tabRow() }
		            </tbody>
          		</table>
			</div>
		)
	}
}