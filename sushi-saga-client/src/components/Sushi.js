import React, { Fragment } from 'react'

const Sushi = (props) => {
  const handleClick = () => {
    props.consumeSushi(props.data)
  }
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          props.eaten ?
            null
          :
            <img src={props.data.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.data.id} {props.data.name} - ${props.data.price}
      </h4>
    </div>
  )
}

export default Sushi