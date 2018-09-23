import React, { Fragment } from 'react'

const Sushi = (props) => {
	return (
		<div className="sushi">
		<div className="plate" 
			onClick={() => props.payForSushi(props.sush)}>
			{ 
			/* Tell me if this sushi has been eaten! */ 
			props.eatenSushi.includes(parseInt(props.sush.id)) ?
				null
			:
				<img src={props.sush.img_url} width="100%" alt="" data-id={props.sush.id} />
			}
		</div>
		<h4 className="sushi-details">
			{props.sush.name} - ${props.sush.price}
		</h4>
		</div>
	)
}

export default Sushi