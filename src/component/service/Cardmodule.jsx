import React from 'react'
import { Plus } from 'lucide-react';
import './card.css'

const Cardmodule = (props) => {
  return (
    <>
    <div className='card'>
        <span className='upper'>
            <img className='log' src="https://www.nexucon.com/assets/images/ser-icon10.png" alt="" />
            <p className='title'>{props.title}</p>
        </span>

        <p className='bio'>{props.bio}</p>

        <span className='lower'>
            <Plus />
            <p className='read-more'>Read More</p>
        </span>


    </div>
    </>
  )
}

export default Cardmodule
