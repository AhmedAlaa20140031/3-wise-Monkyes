import React, { Component } from 'react';
/*
Created By Ahmed
*/
class Tweets extends Component {
  render() {
    return (
      <div className="Tweets">

              <div class="container-fluid tweets">
                  <div class="row">
                     <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
                       <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                         <h1>Daily Tweets Episodes</h1>
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

                   <div class="container">

                       <div class="row">
                           <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                               <div class="single_tweet">
                                    <iframe src="https://www.youtube.com/embed/piqA5NT-lmg" frameborder="0" allowfullscreen width="100%" height="100%;"></iframe>
                               </div>
                               <div class="video_title">
                                <h1>Episode One</h1>
                               </div>
                           </div>


                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                               <div class="single_tweet">
                                    <iframe src="https://www.youtube.com/embed/piqA5NT-lmg" frameborder="0" allowfullscreen width="100%" height="100%;"></iframe>
                               </div>
                                <div class="video_title">
                                <h1>Episode Two</h1>
                               </div>
                           </div>


                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                               <div class="single_tweet">
                                    <iframe src="https://www.youtube.com/embed/piqA5NT-lmg" frameborder="0" allowfullscreen width="100%" height="100%;"></iframe>
                               </div>
                               <div class="video_title">
                                <h1>Episode Three</h1>
                               </div>
                           </div>

                       </div>


                        <div class="row marginclass">
                           <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                               <div class="single_tweet">
                                   <iframe src="https://www.youtube.com/embed/piqA5NT-lmg" frameborder="0" allowfullscreen width="100%" height="100%;"></iframe>
                               </div>
                                <div class="video_title">
                                <h1>Episode Four</h1>
                               </div>
                           </div>


                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                               <div class="single_tweet">
                                    <iframe src="https://www.youtube.com/embed/piqA5NT-lmg" frameborder="0" allowfullscreen width="100%" height="100%;"></iframe>
                               </div>
                                 <div class="video_title">
                                <h1>Episode Five</h1>
                               </div>
                           </div>


                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                               <div class="single_tweet">
                                    <iframe src="https://www.youtube.com/embed/piqA5NT-lmg" frameborder="0" allowfullscreen width="100%" height="100%;"></iframe>
                               </div>
                               <div class="video_title">
                                <h1>Episode Six</h1>
                               </div>
                           </div>

                       </div>
                  </div>
              </div>
      </div>
    );
  }
}

export default Tweets;
