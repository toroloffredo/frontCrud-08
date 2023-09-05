import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllStudentsPage = () => {
  const [students, setStudents] = useState([])
  
  const fetchStudents = async() => {
    try {
      const response = await fetch ('http://localhost:5005/api/students')
      if (response.status === 200) {
        const parsedStudents = await response.json()
        setStudents(parsedStudents)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])
  
  
  return(
    <>
    <h1>All Students</h1>
    {students.map(student => (
      <Link key={student._id} to={`/students/${student._id}`}>
        {student.name}
      </Link>
    ))}
    </>
  )
}

export default AllStudentsPage