import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
        <Link className='filmes-brasil' to="/">Filmes Brasil</Link>

        <Link to="/favorito" className='link-filmes'>Meus filmes</Link>
    </div>
  )
}

export default Header