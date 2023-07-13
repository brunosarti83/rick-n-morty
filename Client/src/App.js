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
import { setUser, getFavs } from './redux/actions'
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

   const login = async (userData) => {
      const { email, password } = userData
      const URL = 'http://localhost:3001/rickandmorty/login/'
      try {
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access, user } = data
         dispatch(setUser(user))
         dispatch(getFavs(user.id))
         setCharacters([])
         setAccess(access)
         access && navigate(ROUTES.home)

      } catch (err) {
         window.alert(err.message);
      }
   }

   const guest = () => { // esto seguramente no va más
      dispatch(setUser('Guest'))
      navigate(ROUTES.home)
   }

   const onSearch = async (id) => {
      if (characters.every(character=>{
         return character.id != id;
      })) {
         try {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            data.name && setCharacters((oldChars) => [...oldChars, data]);
         } catch (err) {
            window.alert(`There is no character with this ID! ID:${id}`);
         }
      } else {
         window.alert(`The character with this ID is already on screen! ID:${id}`);
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
