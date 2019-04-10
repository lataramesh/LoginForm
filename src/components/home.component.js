import React , { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Home extends Component {

  handleClick = () =>{
    window.location.href="/register";
  }


validate = () =>{
    var success;

    // validate email
   var email = document.getElementById("email").value;
   let val = 'email@domain.com';
if ((/^[^\s@]+@[^\s@]+\.(com)$/).test(email)) {
  document.getElementById("emailmsg").innerHTML = "";
  success = true;
}
else
{ document.getElementById("emailmsg").innerHTML = "please emter email in form user@domain.com"; success = false;  }

if (success)
{
  window.location.href ="/index";
}

}
  render(){
    return (
 
                <form onSubmit={this.onSubmit}>
                <div class="container">
   
                  <h3 align="left">Login Information</h3>
                    <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Email" required className="form-control"/>
                    </div>

                    <div className="form-group">
                     <label for="password">Password : </label>
                    <input className="form-control" type="password" id="password" placeholder="Password" pattern="[0-9].{6,}" title="Please enter a 6 digit password" required />
                    </div>

                   <div className="form-group">
                     <p id="emailmsg"></p>
                     <p id="passmsg"></p>
                     </div>

                     <div>
                    <button id="login" type="submit" onClick={this.validate}>Login</button>
                    <button id="register" onClick={this.handleClick}>Register</button>
                    </div>
                
                  </div>
                  </form>
                  )
  }
}

