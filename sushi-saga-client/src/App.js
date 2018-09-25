import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();
    this.handler = this.handler.bind(this)
    this.secondHandler = this.secondHandler.bind(this)
    this.state = {
      allSushi: [],
      start: null,
      end: null,
      clicked: 0,
      emptyPlate: [],
      budget: 50
    }
  }

  componentDidMount() {
      fetch(API, () => {})
      .then(r => r.json())
      .then(r => this.setState({ allSushi: [ ...this.state.allSushi, ...r ] }))
      .then(r => this.findFish())
      }

      handler(e) {
        e.preventDefault()
        this.setState({
          clicked: this.state.clicked + 1
        }, this.findFish())
      }

      secondHandler = (arg) => {
        this.setState({
          emptyPlate: [...this.state.emptyPlate, {1: 1}],
          budget: this.state.budget - arg
        })
      }

  findFish() {
    if (this.state.clicked === 0) {
      this.setState(
        { start: 0,
          end: 4,
          clicked: 1
        })
    } else {
        this.setState(
          { start: this.state.start + 4,
            end: this.state.end + 4,
            clicked: this.state.clicked + 1
          })
        }
      }



  render() {
    return (
      <div className="app">
        <SushiContainer fourSushi={this.state.allSushi.slice(this.state.start,this.state.end)}
          handler={this.handler}
          secondHandler={this.secondHandler}
          budget={this.state.budget}
        />
        <Table emptyPlates={this.state.emptyPlate}
          budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;
