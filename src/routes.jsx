import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Filmes from './pages/Filmes/Filmes';
import Favorito from './pages/Favorito/Favorito';
import Header from './components/Header/Header';

function Rotas() {
    return(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filmes/:id" element={<Filmes/>}/>
            <Route path="/favorito" element={<Favorito/>}/>

        </Routes>
    
    </BrowserRouter>
    )
    
}

export default Rotas