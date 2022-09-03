import React from 'react';
import './App.css';
import Home from './Pages/Home/Home'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

const App = () => {
    return (
        <div className='App'>  
            <div className='blur' style={{top: '-18%', right: '0'}} ></div>
            <div className='blur' style={{top: '36%', left: '-8rem'}} ></div>
            <Home />
        </div>
        
    )
}

export default App;
