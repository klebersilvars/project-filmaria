import React, {useEffect, useState} from 'react'
import api from '../../services/api';
import './Home.css';
import {Link} from 'react-router-dom'

//url da api (sem a base) movie/now_playing?api_key=e151a18386ddbb7eb0cf93813d8a2381

const Home = () => {

  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{

    async function loadFilmes() {
      const response = await api.get("movie/now_playing", { 
        params:{
          api_key: "e151a18386ddbb7eb0cf93813d8a2381",
          language: "pt-BR",
          page: 1
        }
      })

      // para eu pegar os filmes, tenho que entrar em .data.results (estão os meus filmes lá)
      //console.log(response.data.results.slice(0,10))

      setMovies(response.data.results.slice(0,5)) //estou armazenando na minha useState de arrays, os filmes que foram capturados da minha api.
    }

    loadFilmes();

  },[])
  return (
    <div className='home-container'>
        <h1>BEM VINDO A HOME</h1>

        {movies.map((filme)=> {
          return(
            <article className='article-container' key={filme.id}>

              <h3 className='h3'>{filme.title}</h3>

              <img className='img' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>

              <Link className='filme-link' to={`/filmes/${filme.id}`}>Acessar filme</Link> 

            </article>

            
          )
        })}

    </div>
  )
}

export default Home