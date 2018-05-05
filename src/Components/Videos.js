import React, { Component } from 'react';
import videoimg from './assets/images/video_lg.gif';
/*
Created By Ahmed
*/
class Videos extends Component {
  render() {
    return (
      <div className="Videos">
      <div class="container-fluid videos">
          <div class="row">
             <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
               <div class="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8">
                 <h1>Videos</h1>
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


           <div class="row">
                 <div class="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3">


                 </div>
                 <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-6">
                     <center>
                         <div class="video">
                             <img src={videoimg}/>
                         </div>
                     </center>
                 </div>
                 <div class="col-lg-3 col-xl-3 col-md-3 col-sm-3 col-3"></div>
          </div>
      </div>
      </div>
    );
  }
}

export default Videos;
