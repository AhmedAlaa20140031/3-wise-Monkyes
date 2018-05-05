import React, { Component } from 'react';

/*
Created By Ahmed
*/


class Bio extends Component {
  render() {

    return (
      <div className="Bio">
      <div class="container-fluid bio">
          <div class="row">
             <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
               <div class="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-8">
                 <h1>Biography</h1>
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

              <center>
             <div class="row">
                 <div class="box">
                     <h1>Jessy El Murr</h1>
                     <div class="text">
                     <h2>Is a multimedia journalist, speaker and moderator with a special interest in social media and Arab youth.
                      <br/><br/>
                      El Murr currently produces and presents Sky News Arabia’s daily segment Taghreedat Al Sabah  which highlights portraits of inspirational young Arabs who have succeeded in making an impact in our digital world.
                      <br/><br/>

                      With over 15 years of media experience, El Murr is a Lebanese-American journalist who has reported for several international TV networks including BBC and Al Jazeera before moving to UAE in 2012. </h2>
                         </div>

                     <div class="btn">View more</div>
                 </div>
                 <div class="photo" ></div>

              </div>
              </center>

          </div>

      </div>
      </div>
    );
  }
}

export default Bio;
