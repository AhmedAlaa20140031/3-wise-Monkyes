import React, { Component } from 'react';
import AdminHeader from './AdminHeader.js';
/*
Created By Ghada
*/
class AdminBio extends Component {
  render() {
    return (
      <div className="AdminBio">
       <AdminHeader/>
        <div className="mycard">
         <h1 className="HeaderName"> Bio:  </h1>
           
           <form>

           <input type="file"/>
                <br/>
                <br/>
                <label for="header">Header</label>
                <input type="text" id="header"/>
                <br/>
                <label for="txttt">Description</label>
                <textarea  id="txttt">
                </textarea>
                <br/>
                  <input type="submit" className="btn btnn" value="Add"/>
                

           </form>
                  
                  
        </div>
      </div>
    );
  }
}

export default AdminBio;
