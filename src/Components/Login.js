import React, { Component } from 'react';
/*
Created By Karim
*/
class Login extends Component {
  render() {
    return (
      <div className="Login">
          <div className="limiter">
          <div className="container-login100" >
            <div className="wrap-login100">
              <form className="login100-form validate-form" action="http://localhost:3000/AdminBasic">
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape"></i>
                </span>

                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>

                <div className="wrap-input100 validate-input" data-validate = "Enter username">
                  <input className="input100" type="text" name="username" placeholder="Username" required/>

                </div>

                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" name="pass" placeholder="Password" required/>

                </div>

                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                  <label className="label-checkbox100" for="ckb1">
                    Remember me
                  </label>
                </div>

                <div className="container-login100-form-btn">
                  <input type="submit" value="Login" className="login100-form-btn"/>

                </div>
              </form>
            </div>
          </div>
  </div>


  <div id="dropDownSelect1"></div>

      </div>
    );
  }
}

export default Login;
