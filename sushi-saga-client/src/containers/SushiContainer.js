import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      {props.fourSushi &&
        <div className="belt">
          {props.fourSushi.map( sushi => {
            return <Sushi sushi={sushi} key={sushi.id} secondHandler={props.secondHandler} budget={props.budget}/>
          })}
          <MoreButton handler={props.handler}/>
        </div>
      }
    </Fragment>
  )
}

export default SushiContainer
