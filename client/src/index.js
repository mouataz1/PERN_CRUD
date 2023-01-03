import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Create from './components/items/Create';
import Update from './components/items/Update';
import Navbar from './components/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<React.StrictMode>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/create' element={<Create />} />
    <Route path='/update' element={<Update />} />

  </Routes>
  </React.StrictMode>
</BrowserRouter>
  
  
  
);

