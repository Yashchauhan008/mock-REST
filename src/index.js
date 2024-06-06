import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import GetAll from './getAll';
import Add from './Add';
import Details from './Detail';
import Edit from './Edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='/get' element={<GetAll/>}></Route>
        <Route path='/get/:id' element={<Details/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>
      </Route>
      
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
