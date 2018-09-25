import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    eatenSushi: [],
    index: 0,
    money: 25
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushis}))
  }

  handleClick = (event) =>{
    let eaten = event.target.dataset.id
    let price = event.target.dataset.price
    if(this.state.money < price ){
      alert("you got no money")
    }else{
      this.setState({eatenSushi: [...this.state.eatenSushi, eaten] })
      this.setState({money: this.state.money - price})
    }
  }

  checkIfEaten = (id) =>{
    console.log(this)
    return !this.state.eatenSushi.includes(id.toString())
  }

  handleMoreButton = () =>{
    console.log(this.state.index)
    if(this.state.index === 96){
      return this.setState({index: 0})
    }else{
    return  this.setState({index: this.state.index+4})
    }
  }
   
  render() {
    console.log(this.state.index,"this is index")
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} handleClick={this.handleClick} checkIfEaten={this.checkIfEaten} handleMoreButton={this.handleMoreButton} index={this.state.index}/>
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;