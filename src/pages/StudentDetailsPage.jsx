import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StudentDetailsPage = () => {
  const {studentId} = useParams()
  const navigate = useNavigate()

  const [student, setStudent] = useState();

  const fetchStudent = async() => {
    try {
      const response = await fetch (`http://localhost:5005/api/students/${studentId}`)
      if (response.status === 200) {
        const parsedStudent = await response.json()
        setStudent(parsedStudent)
      }else {
        console.log('Error fetching student:', response.status, response.statusText);
      }
    } catch (error) {
      console.log('Fetch student error:', error);
    }
  };

  useEffect(() => {
    fetchStudent()
  }, [])

  const handleDelete = async() => {
    try {
      const response = await fetch (`http://localhost:5005/api/students/${studentId}`, {
        method: 'DELETE',
      })
      if (response.status === 202) {
        navigate('/students')
      }
    } catch (error) {
      console.log("on the front",error)
    }
  }

  return student ? ( 
    <>
      <h1>Student Details </h1>
      <h2>{student.name}</h2>
      <h3>{student.email}</h3>
      <ul>
        {student.priorxp.map(currentXp => (
          <li>{currentXp}</li>
        ))}
      </ul>
      <button type='button' onClick={handleDelete}>Delete</button>
    </>
  ) : <h1>Loading...</h1> 
}

export default StudentDetailsPage;