// estilos
import './App.css';
// vistas y componentes
import NavBar from './components/NavBar/NavBar';
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import About from './components/About/About';
import Details from './Views/Details/Details';
import Favorites from './components/Favorites/Favorites';
// helpers, hooks y librerias
import axios from 'axios';
import { ROUTES } from './helpers/ROUTES';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { setUser } from './redux/actions'
import { useDispatch } from 'react-redux';


function App() {

   const [ access, setAccess ] = useState(false)
   const [characters, setCharacters] = useState([])
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const dispatch = useDispatch()

   useEffect(() => {
      !access && navigate(ROUTES.landing)
   }, [access])

   let EMAIL = 'rick@morty.com'
   let PASSWORD = 'asd123'

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true)
         dispatch(setUser(userData.email))
         navigate(ROUTES.home)
      }
   }

   const guest = () => {
      dispatch(setUser('Guest'))
      navigate(ROUTES.home)
   }

   const onSearch = (id) => {
      if (characters.every(character=>{
         return character.id != id;
      })) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter(character => {
         return character.id != id; 
      }))
   }

   const clearAll = () => {
      setCharacters([])
   }

   

   return (
      <div className='App'>
         { (pathname !== ROUTES.landing) && <NavBar/> }
         <Routes>
            <Route path={ROUTES.landing} element={<Landing login={login} guest={guest}/>}></Route>
            <Route path={ROUTES.home} element={<Home characters={characters} onSearch={onSearch} onClose={onClose} clearAll={clearAll}/>}></Route>
            <Route path={ROUTES.about} element={<About />}></Route>
            <Route path={ROUTES.detail + ':id'} element={<Details />}></Route>
            <Route path={ROUTES.favorites} element={<Favorites />}></Route>
         </Routes>
      </div>
   );
}

export default App;
