import React, { Component } from 'react';
import AdminHeader from './AdminHeader.js';
/*
Created By Karim
*/
class AdminGuests extends Component {
  render() {
    return (
      <div className="AdminGuests">
       <AdminHeader/>
        <div className="mycard">

            <h1 className="HeaderName"> Guests:  </h1>
           
           <form>

                <input type="file"/>
            <br/>
            <br/>
                <label for="name">Name</label>
            <br/>
                <input type="text"  id="name"/>
            <br/>
                <label for="jobtitle">job</label>
            <br/>
                <input type="text" id="jobtitle"/>
               <br/>
              <input type="submit" className="btn btnn" value="Add"/>

           </form>
                  
                  
        </div>
      </div>
    );
  }
}

export default AdminGuests;
