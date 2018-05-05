import React, { Component } from 'react';
import AdminBasic from './AdminBasic.js';
import AdminBio from './AdminBio.js';
import AdminGallery from './AdminGallery.js';
import AdminVideos from './AdminVideos.js';
import AdminGuests from './AdminGuests.js';
import Login from './Login.js';
import {Link} from 'react-router-dom';
/*
Created By Karim
*/
class AdminHeader extends Component {
  render() {
    return (
      <div className="AdminHeader">
       <div className="col-s-8 col-m-4 col-l-4 col xl-4">
               <div className="row">
               <ul className="menu_style">
                    <li><Link to="./Login">Logout</Link></li>
                    <li><a href="#">Add Admin</a></li>
                    <li><a href="#">Remove Admin</a></li>

              </ul>
                   </div>
           </div>
       <div className="col-s-8 col-m-4 col-l-4 col xl-4">
           <div className="row">
               <ul className="ul_style">
                   <li><Link to="./AdminBasic">Basic</Link></li>
                   <li><Link to="./AdminBio">Biography</Link></li>
                   <li><Link to="./AdminVideos">Videos</Link></li>
                   <li><Link to="./AdminGuests">Guests</Link></li>
                   <li><Link to="./AdminGallery">Gallery</Link></li>
               </ul>
           </div>
        </div>
      </div>
    );
  }
}

export default AdminHeader;
