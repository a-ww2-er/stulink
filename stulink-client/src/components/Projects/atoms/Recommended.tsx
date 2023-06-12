import React from 'react'
import { IoAdd } from 'react-icons/io5'

type typeprop ={
    image:string,
    name:string,
    dept?:string
}

const Recommended = ({image, name, dept}:typeprop) => {
  return (
    <section className='recommended_container'>
        <section>
       <img src={image} alt="" />
       <span>
        <h3>{name}</h3><p>{dept}</p>
       </span>
        </section>
            <IoAdd />
        
    </section>

  
  )
}

export default Recommended