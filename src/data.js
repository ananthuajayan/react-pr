import React from 'react'
import './card.css'

function data(props) {
  const Data = props.FourthArray.map((object) => {
    return (
      <div className='datas'>
        {object}
      </div>
    )
  })
  return (
    <>{Data}</>
  )
}

export default data
