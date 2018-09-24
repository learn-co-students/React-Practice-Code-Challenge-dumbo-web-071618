import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eatenSushi: [],
    sushiIdx: 0,
    moneyRemaining: 20
  }

  sushiEaten = (sushi) =>
    this.state.eatenSushi.find(eSushi => eSushi.id === sushi.id)
  
  canAffordSushi = (sushi) =>
    this.state.moneyRemaining - sushi.price > 0

  consumeSushi = (sushi) => {
    if (!this.sushiEaten(sushi) && this.canAffordSushi(sushi)) {      
      this.setState( prevState => ({
        eatenSushi: [...prevState.eatenSushi, sushi],
        moneyRemaining: prevState.moneyRemaining - sushi.price
      }))
    }
  }

  getMoney = () => {
    this.setState(prevState => ({
      moneyRemaining: prevState.moneyRemaining + 100
    }))
  }

  getNewSushiSet = () => {
    this.setState( prevState => ({
      sushiIdx: (prevState.sushiIdx + 4) % 100
    }))
  }

  sushiSet = () => 
    this.state.sushis.slice(this.state.sushiIdx, this.state.sushiIdx + 4)

  componentWillMount() {
    fetch(API).then(response => response.json()).then(sushis => {
      this.setState({ sushis })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          getMoney={this.getMoney}
          getNewSushiSet={this.getNewSushiSet}
          consumeSushi={this.consumeSushi}
          eatenSushi={this.state.eatenSushi}
          sushis={this.sushiSet()} />
        <Table
          eatenSushi={this.state.eatenSushi}
          moneyRemaining={this.state.moneyRemaining} />
      </div>
    );
  }
}

export default App;