import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { personaje } from '../Functions/funciones'


const Personajes = () => {

  const [personajeInfo, setPersonajeInfo] = useState([])
  const params = useParams()

  useEffect(() => {

    personaje(params.id, setPersonajeInfo)

  }, [])
  return (
    <>
  <div className='Container h-screen bg-cyan-900 content-center '>
    <div class="flex  justify-center py-40 md:py-96 p-4   ">
      <div class="flex flex-col md:flex-row md:max-w-full rounded-lg bg-white shadow-lg">
        <img class=" w-full h-96 md:h-auto object-cover md:w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src={personajeInfo.image} alt="" />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{personajeInfo.name}</h5>
          <p class="text-gray-700 text-base mb-4">
            {personajeInfo.status}
          </p>
          <p class="text-gray-700 text-base mb-4">
            {personajeInfo.gender}
          </p>
          <p class="text-gray-600 text-base">{personajeInfo.species}</p>
        </div>
      </div>
    </div>

</div>

</>
  )
}

export default Personajes