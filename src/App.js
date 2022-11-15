import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';


function App() {
  const [modal, setShowModal] = useState(false)
  const [overlay, setOverlay] = useState(false)

  const handleConnectWallet = () => {
    setShowModal(true)
    setOverlay(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setOverlay(false)
  }

  return (
    <Router>

    <div className={`App font-custom-rose w-full ${overlay ? ' fixed' : ' static'}`}>
      <Navbar handleConnectWallet={handleConnectWallet} />
        <Routes>
          <Route
            path='/'
            index
            element={<Home modal={modal} overlay={overlay} handleCloseModal={handleCloseModal} />
            } />
          
          <Route path='/places' element={<Places modal={modal} overlay={overlay} handleCloseModal={handleCloseModal}/>}/>
        </Routes>
      
      <Footer/>

      </div>
      </Router>

  );
}

export default App;
