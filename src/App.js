import React, { Component } from 'react';
import Form from './Form'
import CardList from './CardList'
import './App.css';


class App extends Component {
  state = {
    profiles :[],
  }
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  render(){
    return (
      <div className="App">
        <nav className="navbar sticky-top navbar-light bg-light justify-content-center">
  <h4 className="navbar-brand" >Github Cards App React</h4>
</nav>
<br>
</br>
<br>
</br>
        <Form onSubmit={this.addNewProfile}/>
        
        <CardList profiles={this.state.profiles} />
        <nav className="navbar navbar-light bg-light justify-content-center">
  <span className="navbar-brand mb-0 h1 ">Made By patidarparas13</span>
</nav>
      </div>
    );
  }
}

export default App;
