import React, { Component } from 'react';
import AdminHeader from './AdminHeader.js';
/*
Created By Ghada
*/
class AdminGallery extends Component {
  render() {
    return (
      <div className="AdminGallery">
           <AdminHeader/>
        <div className="mycard">

       <h1 className="HeaderName"> Gallery:  </h1>
           <form>

              <label for="file">Choose Image to add to gallery</label>
              <br/>
              <input type="file" name="file"/>
              <br/>
              <br/>
              <label for="header">Image Description</label>
                  <input type="text" id="header" name="desc"/>
              <br/>
              <input type="submit" className="btn btnn" value="Add"/>

           </form>
                  
                  
        </div>
      </div>
    );
  }
}

export default AdminGallery;
