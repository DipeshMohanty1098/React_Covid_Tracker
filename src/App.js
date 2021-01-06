import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/navbar';
import Routes from './routes';


class App extends React.Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    this.setState({
      counter: parseInt((this.state.counter)) + 1
    })
  }

  decrementCounter = () =>{
    if (this.state.counter > 0){
    this.setState({
      counter: this.state.counter - 1
    })
  }
  }

  handleOnChange = (e) =>{
    this.setState({
      counter: e.target.value
    })
  }

  render (){
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes/>
      <div className="center">
      <a className="waves-effect waves-light btn" onClick={this.incrementCounter}>Add</a>
      <input className="black-text black-highlight" onChange={this.handleOnChange} value={this.state.counter}/>
      <a className="waves-effect waves-light btn red" onClick={this.decrementCounter}>Remove</a>
    </div>
    </BrowserRouter>
    </div>
  );
  }
}

export default App;
