import React, { Component } from 'react';
import axios from 'axios';
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
  state = {
    Data: 
    {
      "Basic": "Jessy El Murr is a multimedia journalist, speaker and moderator with a special interest in social media and Arab youth",
      "Biography": "Is a multimedia journalist, speaker and moderator with a special interest in social media and Arab youth.\nEl Murr currently produces and presents Sky News Arabia’s daily segment Taghreedat Al Sabah which highlights portraits of inspirational young Arabs who have succeeded in making an impact in our digital world.\n\nWith over 15 years of media experience, El Murr is a Lebanese-American journalist who has reported for several international TV networks including BBC and Al Jazeera before moving to UAE in 2012.",
      "Testimonials": "Jessy El Murr is a multimedia journalist, speaker and moderator with a\nspecial interest in social media and Arab youth.",
      "Tweets": "https://www.youtube.com/watch?v=piqA5NT-lmg"
    }
  }
 componentDidMount() {
    axios.get('http://192.168.1.6:8000/')
      .then(res => {
        const Data = res.data;
        this.setState({ Data });
      })
  }
  render() {
 
    return (
      <div className="User">
      <Header Data={this.state.Data.Basic}/>
      <Bio Data={this.state.Data.Biography}/>
      <Videos/>
      <Guests/>
      <Tweets Data={this.state.Data.Tweets}/>
      <ImageGallery/>
      <Testimonials Data={this.state.Data.Testimonials}/>
      <Footer/>
      </div>
    );
  
  }
}

export default User;
