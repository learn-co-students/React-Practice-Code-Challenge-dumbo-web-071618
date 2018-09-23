import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const renderSushi = (props) => {
	return (
		props.sushi.map(sush => {
			return <Sushi eatenSushi={props.eatenSushi} payForSushi={props.payForSushi} sush={sush} />
		})
	)
}

const SushiContainer = (props) => {
	return (
		<Fragment>
		<div className="belt">
			{
				renderSushi(props)
			}
			<MoreButton getSushi={props.getSushi}/>
		</div>
		</Fragment>
	)
}

export default SushiContainer