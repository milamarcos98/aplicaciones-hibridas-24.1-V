import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Home, Login, Register, ProjectDetail, Board } from './pages'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects/:id" element={<ProjectDetail/>}/>
          <Route path="/board/:id" element={<Board/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
