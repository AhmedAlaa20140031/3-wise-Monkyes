import React, { Component } from 'react';
import AdminHeader from './AdminHeader.js';
/*
Created By Ghada
*/
class AdminBasic extends Component {
  render() {
    return (
      <div className="AdminBasic">
      <AdminHeader/>
        <div class="mycard">
         <h1 className="HeaderName"> Basic:  </h1>
           
           <form>

            <label for="file">Choose Image for slider background</label>
            <input id="file" type="file"/>
            <label for="name">Name</label>
            <br/>
            <input type="text" id="name"/>
            <label for="name">Header</label>
            <br/>
            <input type="text" id="header"/>
            <label for="name">Description</label>
            <br/>
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

export default AdminBasic;
