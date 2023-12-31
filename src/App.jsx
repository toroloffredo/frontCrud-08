import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllStudentsPage from './pages/AllStudentsPage'
import NewStudent from './pages/NewStudent'
import StudentDetailsPage from './pages/StudentDetailsPage'
import UpdateStudentPage from './pages/UpdateStudentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/students" element={<AllStudentsPage />}/>
        <Route path="/students/new" element={<NewStudent />}/>
        <Route path="/students/:studentId" element={<StudentDetailsPage />}/>
        <Route path="/students/:studentId/update" element={<UpdateStudentPage />}/>
        <Route path="*" element={<h1>404 Page</h1>}/>
      </Routes>
    </>
  )
}

export default App
