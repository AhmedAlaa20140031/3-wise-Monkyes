import React, { Component } from 'react';
/*
Created By Ahmed
*/
class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
      <div class="container-fluid testimonials">
        <div class="row">
           <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
             <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
               <h1>Testimonials</h1>
             </div>
           <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
        </div>

          <div class="row">
               <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
               <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2">
                   <div class="divider"></div>
               </div>
               <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8"></div>
        </div>
          <center>
         <div class="photo"></div>
         <div class="box">
             <div class="content">
             <p class="p1">Emma Stone</p>
             <p class="p2">Jessy El Murr is a multimedia journalist, speaker and moderator with a<br/>special interest in social media and Arab youth.</p>
                 </div>
              </div>
          </center>

    </div>
      </div>
    );
  }
}

export default Testimonials;
