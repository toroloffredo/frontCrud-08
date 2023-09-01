import { useState } from "react";

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
      <h3 key={student._id}>{student.name}</h3>
    ))}
    </>
  )
}

export default AllStudentsPage