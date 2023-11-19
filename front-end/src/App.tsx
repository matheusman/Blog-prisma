import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigateProvider } from './Context/navigate';
import AdminRouter from './Admin/AdminRouter';
import './sass/index.scss'

function App() {


  return (
    <BrowserRouter>
    <NavigateProvider>
      <Routes>
        <Route path="/admin/*" element={<AdminRouter />} />  
      </Routes>    
    </NavigateProvider>
    </BrowserRouter>
  )
}

export default App
