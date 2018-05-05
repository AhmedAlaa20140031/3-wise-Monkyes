import React, { Component } from 'react';
import guest_img from './assets/images/guest_photo.gif';
/*
Created By Ahmed
*/
class Guests extends Component {
  render() {
    return (
      <div className="Guests">
      <div class="container-fluid guests">
         <div class="row">
            <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
              <div class="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8">
                <h1>Guests</h1>
              </div>
            <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
         </div>

           <div class="row">
                <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
                <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2">
                    <div class="divider"></div>
                </div>
                <div class="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8"></div>
         </div>

          <div class="container">

              <div class="row">
                  <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                      <div class="single_guest">
                          <center>
                             <img src={guest_img} alt="guest"/>
                          </center>

                          <center>
                              <h1>Rose Leslie</h1>
                          </center>

                          <center>
                              <h2>Movie actor</h2>
                          </center>

                          <center>
                               <div class="line"></div>
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

                  <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                      <div class="single_guest">
                       <center>
                             <img src={guest_img} alt="guest"/>
                          </center>

                          <center>
                              <h1>Rose Leslie</h1>
                          </center>

                          <center>
                              <h2>Movie actor</h2>
                          </center>

                          <center>
                               <div class="line"></div>
                          </center>

                          <center>
                               <div class="social">
                                 <div class="fb"></div>
                                    <div class="twitter"></div>
                                    <div class="send"></div>
                                    <div class="menu"></div>
                              </div>

                          </center></div>
                  </div>

                   <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                      <div class="single_guest">
                        <center>
                             <img src={guest_img} alt="guest"/>
                          </center>

                          <center>
                              <h1>Rose Leslie</h1>
                          </center>

                          <center>
                              <h2>Movie actor</h2>
                          </center>

                          <center>
                               <div class="line"></div>
                          </center>

                          <center>
                               <div class="social">
                                 <div class="fb"></div>
                                    <div class="twitter"></div>
                                    <div class="send"></div>
                                    <div class="menu"></div>
                              </div>

                          </center></div>
                  </div>
              </div>

         </div>

          <center>
          <div class="btn">View more</div>
              </center>
     </div>
      </div>
    );
  }
}

export default Guests;
