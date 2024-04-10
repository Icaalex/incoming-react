import React from 'react';
import {Routes, Route} from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import Projects from './Routes/Projects';
import Civi from './Routes/Civi';
import Contact from './Routes/Contact';
import Header from './Components/Header';


function App() {
  return (
    <>

     
     
     
      <div className='wrapper' >  
        
        <Header/>
        <main>
          <Routes>
      
            <Route path="/" index element={<Home/>}    />
            <Route path='about' element={<About/>} />
            <Route path='projects' element={<Projects/>} />
            <Route path='CV' element={<Civi/>} />
            <Route path='contact' element={<Contact/>} />





          </Routes>

        </main>
          
        
      </div>
      
      
      
    </>
  );
}

export default App;












{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
