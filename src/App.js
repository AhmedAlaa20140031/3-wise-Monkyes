import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import User from './Components/User.js';
import Tweets from './Components/Tweets.js';
import Login from './Components/Login.js';
import AdminBasic from './Components/AdminBasic.js';
import AdminBio from './Components/AdminBio.js';
import AdminGallery from './Components/AdminGallery.js';
import AdminVideos from './Components/AdminVideos.js';
import AdminGuests from './Components/AdminGuests.js';
/*
Created by Ahmed
*/
class App extends Component {
  render() {
     
    return (


	   <Switch>
            <Route exact path={"/"} component={User}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/AdminBasic"} component={AdminBasic}/>
            <Route exact path={"/AdminBio"} component={AdminBio}/>
            <Route exact path={"/AdminGallery"} component={AdminGallery}/>
            <Route exact path={"/AdminVideos"} component={AdminVideos}/>
            <Route exact path={"/AdminGuests"} component={AdminGuests}/>

    </Switch>

//  <AdminBasic/>

    );
  }

}

export default App;
