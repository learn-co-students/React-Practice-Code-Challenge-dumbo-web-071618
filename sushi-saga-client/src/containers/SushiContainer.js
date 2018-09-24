import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushiEaten = sushi => 
    props.eatenSushi.find( eatenSushi => eatenSushi.id === sushi.id)
  
  const handleClick = () => {
    props.getNewSushiSet()
  }

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(
            sushi => 
              <Sushi
                consumeSushi={props.consumeSushi}
                key={sushi.id} 
                data={sushi} 
                eaten={sushiEaten(sushi)} />
          )
        }
        <MoreButton handleClick={handleClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer