import React from 'react'
import axios from 'axios'

// BASE DA URL DA API: https://api.themoviedb.org/3/
// ULR DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=e151a18386ddbb7eb0cf93813d8a2381

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/' //nunca muda para nenhuma chamada
})

export default api;