import React, {useState} from 'react'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';


function App() {
  const [modal, setShowModal] = useState(false)
  const [overlay, setOverlay] = useState(false)

  const handleConnectWallet = () => {
    console.log("working")
    setShowModal(true)
    setOverlay(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setOverlay(false)
    console.log("working")
  }

  return (
    <div className={`App font-custom-rose ${overlay ? 'fixed' : 'relative'}`}>
      <Navbar handleConnectWallet={handleConnectWallet}/>

      <Home modal={modal} overlay={overlay} handleCloseModal={handleCloseModal} />
      {/* <Places/> */}
      
      <Footer/>

    </div>
  );
}

export default App;
