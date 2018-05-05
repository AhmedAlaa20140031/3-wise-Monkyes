import React, { Component } from 'react';
import AdminHeader from './AdminHeader.js';
/*
Created By karim
*/
class AdminVideos extends Component {
  render() {
    return (
      <div className="AdminVideos">
      <AdminHeader/>
        <div class="mycard">
         <h1 className="HeaderName"> Videos:  </h1>

           <form>

           <label for="url">URL</label>
       <br/>
           <input type="url" id="url"/>
       <br/>
           <label for="name">Video Name</label>
           <br/>
           <input type="text" id="name"/>
          <br/>
            <input type="submit" className="btn btnn" value="Add"/>

           </form>


        </div>
      </div>
    );
  }
}

export default AdminVideos;
