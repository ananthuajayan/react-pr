import React from 'react'
import './footer.css';


export const footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='btns'>
         <button className='prevbtn'>Previous</button>
         <button className='nxtbtn'>next </button>
        </div>
        <h5 className='para'>powered by Ananthu Ajayan</h5>
    </div>
    </>
  )
}

export default footer
