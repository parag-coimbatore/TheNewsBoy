import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 34;

  state ={
    progress: 0,

  }
  setProgress = (progress)=> {
   this.setState({progress: progress})   
  }
  render() {
    
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Home/>
        <Switch>
       
        
          <Route exact path = "/home"></Route>
      
          <Route exact path="/entertainment"><News setProgress={this.setprogress} key="entertainment" pageSize = {this.pageSize} country="in" category="entertainment"/></Route>

          <Route exact path="/business"><News setProgress={this.setprogress} key="business" pageSize = {this.pageSize} country="in" category="business"/></Route>

          <Route exact path="/general"><News setProgress={this.setprogress} key="general" pageSize = {this.pageSize} country="in" category="general"/></Route>

          <Route exact path="/health"><News setProgress={this.setprogress} key="health" pageSize = {this.pageSize} country="in" category="health"/></Route>
          
          <Route exact path="/science"><News setProgress={this.setprogress} key="science" pageSize = {this.pageSize} country="in" category="science"/></Route>

          <Route exact path="/sports"><News setProgress={this.setprogress} key="sports" pageSize = {this.pageSize} country="in" category="sports"/></Route>

          <Route exact path="/technology"><News setProgress={this.setprogress} key="technology" pageSize = {this.pageSize} country="in" category="technology"/></Route>   

        </Switch>

        </Router>
        
      </div>
    )
  }
}
