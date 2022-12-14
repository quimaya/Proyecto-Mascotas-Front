import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { httpGet } from '../services/API';
import './InfoMascota.css';

const InfoMascota = () => {

    const { nick } = useParams();

    const [ pet, setPet ] = useState([]);

    const UrlByNick = '/mascotaByNick';

    const getMascota = async() => {
        const peticion = await httpGet(`${UrlByNick}/${nick}`)
        const data = await peticion.data.mascota;
        setPet( data );
    }

    useEffect(() => {
      getMascota();
    }, [])
    

  return (
    <div className='infoMascota'>
      { console.log( pet)}
       <h2> { pet.name } </h2>
       <img src={ pet.images} alt={ pet.name } />
       <p className='nick'> Nick: { pet.nick } </p>
       <p className='raza'> Raza: { pet.raza } </p>
       <p className='pelo'> Tipo de pelo:{ pet.pelaje } </p>
       <p className='color'> Color de pelo: { !pet.color ? <p>No se ha especificado</p> : pet.color }</p>
    </div>
  )
}

export default InfoMascota