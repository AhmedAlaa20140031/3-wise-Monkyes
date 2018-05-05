import React, { Component } from 'react';
import logo2 from './assets/images/logo2.png';
/*
Created By Ahmed
*/
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div class="container-fluid footer">
        <center>
            <img src={logo2} alt="Logo"/>
        </center>

        <center>
            <h1>GET IN TOUCH</h1>
        </center>

          <center class="footercenter">
            <input type="text" class="intext" placeholder="YOUR MAIL"/>
            <input type="submit" value="Subscribe" class="inbtn"/>
        </center>

            <center>
                 <div class="social">
                   <div class="fb"></div>
                   <div class="twitter"></div>
                   <div class="send"></div>
                   <div class="menu"></div>
                 </div>

            </center>
     </div>
      </div>
    );
  }
}

export default Footer;
