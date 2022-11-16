import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Inicio from './Components/Inicio'
import Personajes from './Components/Personajes'
import Navbar from './Components/Navbar'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
    <BrowserRouter>
     
     <Navbar />
     
      <Routes>
        <Route path='/personajes/:id' element={<Personajes/>}/>
        <Route path='/' element={<App />}/>
        
     </Routes>
      <Footer />
</BrowserRouter>
    
   

    
  </>

)
