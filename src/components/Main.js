import React, {Component} from 'react';
import Title from './Title.js';
import PhotoWall from './PhotoWall.js';
import AddPhoto from './AddPhoto.js';
import {Route, Link} from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single from './Single';

class Main extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>
                  <Link to='/'> PhotoWall </Link>
                </h1>
              <Route exact path = "/" render={() => (
                <div>
                 
                  <PhotoWall {...this.props} />
                </div>
              )}/>

              <Route path = "/AddPhoto" render = {({history}) => (
                  <AddPhoto {...this.props} onHistory={history} />
              )}/>

              <Route path="/single/:id" render = {(params) => (
                <Single {...this.props} {...params}/>
              )}/>
            </div>  
        )
    }
}

export default Main;