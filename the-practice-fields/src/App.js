import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Practice from './component/Practice';
import Practice2 from './component/Practice2';

class App extends Component {
  constructor (){
    super()
    this.state = {
      title: "test"
    };
  }


  render() {   
    
    return (

      <div>               
               
        <Practice title={this.state.title}/>
        <Practice2  />
               
      </div>
    );
  }
}

export default App;
