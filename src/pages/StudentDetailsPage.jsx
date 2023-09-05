import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StudentDetailsPage = () => {
  const {studentId} = useParams()

  const [student, setStudent] = useState();

  const fetchStudent = async() => {
    try {
      const response = await fetch (`http://localhost:5005/api/students/${studentId}`)
      if (response.status === 200) {
        const parsedStudent = await response.json()
        setStudent(parsedStudent)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStudent()
  }, [])

  return student ? ( 
    <>
      <h1>Student Details </h1>
      <h2>{student.name}</h2>
      <h3>{student.email}</h3>
      <ul>
        {student.priorXp.map(currentXp => (
          <li >{currentXp}</li>
        ))}
      </ul>
      
    </>
  ) : <h1>Loading...</h1>
}

export default StudentDetailsPage;