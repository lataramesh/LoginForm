
import React , { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {

  constructor(props){
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
     this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit= this.onSubmit.bind(this);

    this.state = {
      first_name : '',
      middle_name: '',
      last_name : '',
      phone_number: '',
      email : '',
      pwd : ''
    };
  }


  onChangeFirstName(e) {
    this.setState({
      first_name : e.target.value
    });
  }

    onChangeMiddleName(e) {
    this.setState({
      middle_name : e.target.value
    });
  }

  onChangeLastName(e){
    this.setState({
      last_name : e.target.value
    });
  }

  onChangePhoneNumber(e){
    this.setState({
      phone_number : e.target.value
    });
  }

   onChangeEmail(e){
    this.setState({
      email : e.target.value
    });
  }

   onChangePassword(e){
    this.setState({
      pwd : e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
   // console.log(`The values are ${this.state.first_name}, ${this.state.last_name}, and ${this.state.phone_number}`)
    
    const obj = {
     first_name : this.state.first_name,
     middle_name : this.state.middle_name,
      last_name : this.state.last_name,
      phone_number : this.state.phone_number,
      email : this.state.email,
      pwd : this.state.pwd
    };

    axios.post('http://localhost:4000/students/add', obj)
      .then( res=> console.log(res.data));

    this.setState({
      first_name : '',
      middle_name : '',
      last_name : '',
      phone_number : '',
      email : '',
      pwd : ''
    });
    
  }

   regClick = () =>{
    window.location.href="/";
  }

  render(){
    return (
      <div style={{marginTop: 10}}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name  </label>
                        <input type="text" className="form-control"
                          value={this.state.first_name}
                          onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Middle Name </label>
                        <input type="text" className="form-control"
                          value={this.state.middle_name}
                          onChange={this.onChangeMiddleName}
                        />
                    </div>
                     <div className="form-group">
                        <label>Last Name </label>
                        <input type="text" className="form-control"
                         value={this.state.last_name}
                          onChange={this.onChangeLastName}
                         />
                    </div>
                    <div className="form-group">
                        <label>Phone number </label>
                        <input type="text" className="form-control"
                        value={this.state.phone_number}
                        onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                         <label for="email">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" required
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                   </div>
                   <div className="form-group">
                        <label for="psw">Password</label>
                        <input type="password" placeholder="Enter Password" name="psw" className="form-control" required
                         value={this.state.pwd}
                        onChange={this.onChangePassword}/>
                   </div>
                    <div className="form-group">
                        <label for="psw-repeat">Repeat Password</label>
                        <input type="password" placeholder="Confirm Password" name="psw-repeat" className="form-control" required
                        />
                   </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary" onClick={this.regClick}/>
                    </div>
                </form>
            </div>
    )
  }
}