import React, { Component } from 'react';
import logo from './assets/images/logo.png';
/*
Created By Ahmed
*/
class Header extends Component {
  render() {
    return (
      <div className="Header">
      <div class="container-fluid slider">
          <div class="row">
              <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
              <div class="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8">
                  <img src={logo} alt="logo"/>
                  <div class="social">
                      <div class="fb"></div>
                      <div class="twitter"></div>
                      <div class="send"></div>
                      <div class="menu"></div>

                  </div>
              </div>
              <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
          </div>


         <div class="slider_text">
              <div class="row">
                  <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
                  <div class="col-lg-5 col-xl-5 col-md-5 col-sm-5 col-5">
                     <h1>JESSY EL MURR</h1>
                  </div>
                  <div class="col-lg-5 col-xl-5 col-md-5 col-sm-5 col-5"></div>
              </div>


              <div class="row">
                  <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
                  <div class="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3">
                     <h2>International Journalist & Speaker</h2>
                  </div>
                  <div class="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-7"></div>
              </div>

             <div class="row">
                  <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
                  <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2">
                      <div class="divider"></div>
                  </div>

                  <div class="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8"></div>
              </div>

              <div class="row">
                  <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
                  <div class="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3">
                     <h3>Jessy El Murr is a multimedia journalist, speaker and moderator with a special interest in social media and Arab youth</h3>
                  </div>
                  <div class="col-lg-7 col-xl-7 col-md-7 col-sm-7 col-7"></div>
              </div>
          </div>
       </div>
      </div>
    );
  }
}

export default Header;
