import React, { Component } from 'react';
import Header from './Header.js';
import Bio from './Bio.js';
import Videos from './Videos.js';
import Guests from './Guests.js';
import Tweets from './Tweets.js';
import ImageGallery from './ImageGallery.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
/*
Created By Ahmed
*/
class User extends Component {
  render() {
    return (
      <div className="User">
      <Header/>
      <Bio/>
      <Videos/>
      <Guests/>
      <Tweets/>
      <ImageGallery/>
      <Testimonials/>
      <Footer/>
      </div>
    );
  }
}

export default User;
