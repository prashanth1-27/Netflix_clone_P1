import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        console.log("Logged In");
        navigate('/');
      } else {
        console.log("Logged Out");
        navigate('/login');
      }
    });
    return () => unsubscribe(); // clean up
  }, [navigate]);

  return (
    <div>
     <ToastContainer theme='dark'/>
    <Routes> 
      <Route path='/' element={<Home />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/player/:id' element={<Player />} />
    </Routes>
    </div>
  )
}

export default App
