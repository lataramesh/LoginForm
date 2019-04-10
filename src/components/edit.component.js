import React , { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
	constructor(props) {
	    super(props);
	    this.onChangeFirstName = this.onChangeFirstName.bind(this);
	     this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
	    this.onChangeLastName = this.onChangeLastName.bind(this);
	    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
	    this.onChangeEmail = this.onChangeEmail.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);

	    this.state = {
	      first_name: '',
	      middle_name: '',
	      last_name: '',
	      phone_number:'',
	      email: ''
	    }
  	}

  	componentDidMount() {
      axios.get('http://localhost:4000/students/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                first_name: response.data.first_name, 
                middle_name: response.data.middle_name,
               last_name: response.data.last_name,
                phone_number: response.data.phone_number,
                email: response.data.email });
          })
          .catch(function (error) {
              console.log(error);
          })
    }


    onChangeFirstName(e) {
	    this.setState({
	      first_name: e.target.value
	    });
  	}

  	 onChangeMiddleName(e) {
	    this.setState({
	      middle_name: e.target.value
	    });
  	}
	
	onChangeLastName(e) {
	    this.setState({
	     last_name: e.target.value
	    })  
	}
	 
	onChangePhoneNumber(e) {
	    this.setState({
	      phone_number: e.target.value
	    })
	}

    onChangeEmail(e){
    this.setState({
      email : e.target.value
    });
  }


	onSubmit(e) {
    	e.preventDefault();
	    const obj = {
	      first_name: this.state.first_name,
	      middle_name : this.state.middle_name,
	      last_name: this.state.last_name,
	      phone_number: this.state.phone_number,
	      email : this.state.email
          
	    };
	    axios.post('http://localhost:4000/students/update/'+this.props.match.params.id, obj)
	        .then(res => console.log(res.data));
    
    	this.props.history.push('/index');
  	}

  	render() {
    
	    return (
	        <div style={{ marginTop: 10 }}>
	            <h3 align="center">Update Business</h3>
	            <form onSubmit={this.onSubmit}>
	                <div className="form-group">
	                    <label>First Name:  </label>
	                    <input 
	                      type="text" 
	                      className="form-control" 
	                      value={this.state.first_name}
	                      onChange={this.onChangeFirstName}
	                      />
	                </div>
	                 <div className="form-group">
                        <label>Middle Name: </label>
                        <input type="text" className="form-control"
                          value={this.state.middle_name}
                          onChange={this.onChangeMiddleName}
                        />
                    </div>
	                <div className="form-group">
	                    <label>Last Name: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.last_name}
	                      onChange={this.onChangeLastName}
	                      />
	                </div>
	                <div className="form-group">
	                    <label>Phone Number: </label>
	                    <input type="text" 
	                      className="form-control"
	                      value={this.state.phone_number}
	                      onChange={this.onChangePhoneNumber}
	                      />
	                </div>
	                 <div className="form-group">
                         <label for="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                   </div>
	                <div className="form-group">
	                    <input type="submit" 
	                      value="Update Business" 
	                      className="btn btn-primary"/>
	                </div>

	            </form>
	        </div>
	    )
  	}
}