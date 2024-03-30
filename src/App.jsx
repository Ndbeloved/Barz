import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {
  return(
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
