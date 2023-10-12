import React from 'react'
import './card.css'

function leftblog(props){
  console.log(props)
  const renderList = props.smallcontainer.map((blogs)=>{
    return(
      <div className='card'>
      <div className='imgleft'>
          <img src={blogs.image} alt="" />
      </div>
      <div className='heading'> <h1>{blogs.Heading}</h1></div>
      <div className='heading'>
      {blogs.paragraph}
      </div>
      </div>
    )
  })
  return(
   <>{renderList}</>
  )
  
}
export default leftblog