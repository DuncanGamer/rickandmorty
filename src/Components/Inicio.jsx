
import React from 'react'
import { todosPersonajes } from '../Functions/funciones'
import { useEffect, useState } from 'react'

const inicio = () => {

  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    todosPersonajes(setPersonajes)
  }, [])

  return (

    <>
      {personajes.map((personaje) => (
        
        

<div key={personaje.id}>       
 <div class="     md:gap-20 flex justify-center ">
  <div class=" shrink-0 overflow-x-hidden mx-20 md:mx-0   rounded-lg shadow-lg bg-white max-w-sm">
    
      <img class="rounded-t-lg w-full" src={personaje.image} alt=""/>
    
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{personaje.name}</h5>
      
      <a href={`/personajes/${personaje.id}`}><button type="button" class=" inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out">Get info</button> </a>
    </div>
  </div>
</div>
        </div>
      )
        ,)}






    </>
  )
}

export default inicio