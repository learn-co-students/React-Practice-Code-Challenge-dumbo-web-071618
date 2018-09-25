import React, { Component } from 'react'

class Sushi extends Component {

  constructor(props) {

    super(props);
    this.state = {
      eaten: false
    }
  }
  handleClick = () => {

    if (this.props.budget >= this.props.sushi.price) {
    this.setState({
      eaten: true
    }, this.props.secondHandler(this.props.sushi.price))
  } else {
    alert("YOU DON'T HAVE ENOUGH MOOLAH FOR SUSHI")
  }}

  render() {

    return(
      <div className="sushi">
        <div className="plate" onClick={() => this.handleClick()}>

          {this.state.eaten ? null :
          <span>
            <img src={this.props.sushi.img_url}  width="100%" alt="FISH"/>
            <h4 className="sushi-details">
              {this.props.sushi.name} - ${this.props.sushi.price}
            </h4>
          </span>
          }
          </div>
        </div>
    )
  }
}


export default Sushi
