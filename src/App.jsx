import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllStudentsPage from './pages/AllStudentsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/students" element={<AllStudentsPage />}/>

        <Route path="*" element={<h1>404 Page</h1>}/>
      </Routes>
    </>
  )
}

export default App
