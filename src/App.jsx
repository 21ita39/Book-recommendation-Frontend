import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import BookList from './components/Booklist';
import BookDetails from './components/BookDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'


function App() {
    
    const [filter, setFilter] = useState('All Categories');
    return (

        <BrowserRouter>
        <Header setFilter={setFilter}/>
            <Routes>
                
                <Route path="/" element={<Home  />} />
                <Route path="/Booklist" element={<BookList setFilter={setFilter} filter={filter} />} />
                <Route path="/api/:id" element={<BookDetails />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes></BrowserRouter>
    );
}

export default App;


