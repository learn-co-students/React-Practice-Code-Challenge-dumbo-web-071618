import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props.checkIfEaten(props.sushi.id) )
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.handleClick}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          (props.checkIfEaten(props.sushi.id) && <img src={props.sushi.img_url} data-id={props.sushi.id} data-price={props.sushi.price} width="100%" /> )}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi