import React from 'react'

function ItemDescription({props}) {
  return (
    <div>
        <p>{props.name}</p>
        <p>
            <i>{props.description}</i>
        </p>


    </div>
  )
}

export default ItemDescription