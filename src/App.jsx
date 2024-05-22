import './App.css'
import Box from './assets/Box'
import Header from './assets/Header'
import Footer from './assets/Footer'
function App() {

  return (
    <>
        <Header/>
        <div className="container">
            <p id="title">BLOCKBUSTER MOVIES</p>
            <Box/>
            <Box/>
            <Box/>
        </div>
        <Footer/>
    </>
  )
}

export default App
