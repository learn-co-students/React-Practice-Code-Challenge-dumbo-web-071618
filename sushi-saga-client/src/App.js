import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoneyForm from './components/AddMoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sushi: [],
			eatenSushi: [],
			currentSushi: 0,
			wallet: 100
		}
	}

	componentDidMount() {
		this.getSushi()
	}

	getSushi = () => {
		fetch(API)
		.then(res => res.json())
		.then(sushi => {
			this.setSushi(sushi)
		})
	}

	setSushi = (sushiArr) => {
		let newSushiArr = []
		let i 
		let current 

		this.state.currentSushi === 100 ? current = 0 : current = this.state.currentSushi
		for (i = current; i < current + 4; i++){
			newSushiArr.push(sushiArr[i])
		}
		this.setState({
			sushi: newSushiArr,
			currentSushi: i
		})
	}

	payForSushi = (sushiPiece) => {
		let wallet = this.state.wallet

		if (!this.state.eatenSushi.includes(sushiPiece.id)){
			
			if (wallet >= sushiPiece.price) {
				this.setState((prevState) => {
					return {
						eatenSushi: prevState.eatenSushi.concat(sushiPiece.id),
						wallet: prevState.wallet - sushiPiece.price
					}
				}, () => console.log(this.state))
			} else {
				alert("You don't have enough money for more sushi!")
			}
		}
	}

	addMoney = (money) => {
		this.setState( prevState => {
			return {
				wallet: prevState.wallet + money
			}
		})
	}

	render() {
		return (
		<div className="app">
			<SushiContainer eatenSushi={this.state.eatenSushi} payForSushi={this.payForSushi} sushi={this.state.sushi} getSushi={this.getSushi} />
			<Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet} />
			<AddMoneyForm addMoney={this.addMoney} />
		</div>
		);
	}
}

export default App;