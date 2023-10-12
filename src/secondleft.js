import React from 'react'
import './card.css'


function secondleft(props){
  console.log(props)
  const dataRender = props.dataContainer.map((object)=>{
     return(
      <div className='card'>
      <div className='postimg'>
     <div className='subimg'>
      <img src={object.image} alt="" />
     </div>
     <div className='subhead'>
      <h4>{object.Heading}</h4>
      <h5>{object.Title}</h5>
     </div>
  </div>
      </div>
     )
  })
  return(
   <>{dataRender}</>
  )
  
}

export default secondleft