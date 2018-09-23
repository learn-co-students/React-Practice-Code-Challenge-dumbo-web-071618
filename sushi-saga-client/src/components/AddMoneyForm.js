import React, { Component, Fragment } from 'react';

class AddMoneyForm extends Component {
	state = {
		money: 0
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addMoney(this.state.money)
	}

	handleChange = (e) => {
		this.setState({
			money: parseInt(e.target.value)
		})
	}
	
	render() {
		return (
			<Fragment>
			<div>
				<form onSubmit={this.handleSubmit} >
					<label>
						Add Money!
						<input type="text" onChange={this.handleChange} />
					</label>
					<input type="submit" />
				</form>
			</div>
			</Fragment>
		);
	}
}

export default AddMoneyForm;
