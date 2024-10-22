
import { Route, Routes,  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes >
    <Route path='/' element={<Home/>} />
    <Route path='/create' element={<Create/>} />
    <Route path="/update/:id" element={<Update />} />
    </Routes>


    </>
  )
}

export default App
