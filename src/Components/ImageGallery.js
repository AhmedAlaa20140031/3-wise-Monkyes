import React, { Component } from 'react';
/*
Created By Ahmed
*/
class ImageGallery extends Component {
  render() {
    return (
      <div className="ImageGallery">
      <div class="container-fluid gallery">
          <div class="row">
             <div class="col-lg-2 col-xl-2 col-md-2 col-sm-2 col-2"></div>
               <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                 <h1>Images Gallery</h1>
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
                   <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                       <div class="gallery1">
                       </div>
                   </div>


                    <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                        <div class="row">
                            <div class="gallery2">
                                <div class="top">
                                        <div class="txt">
                                          <p>8/1</p>
                                            <div class="divi"></div>
                                          <p>Innovative Young<br/>Arabs</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                              <div class="gallery2"></div>
                        </div>
                     <row>
                      </row>
                  </div>


                    <div class="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-4">
                       <div class="gallery1">
                       </div>
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

export default ImageGallery;
