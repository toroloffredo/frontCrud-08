import { useEffect, useState } from "react";
import StudentForm from "../component/StudentForm"
import { fetchStudent } from "../Utils/studentAPICalls";
import { useNavigate, useParams } from "react-router-dom";
import { sendStudent } from "../Utils/studentAPICalls";

const UpdateStudentPage = () => {
  const navigate = useNavigate()
  const { studentId } = useParams()
  const [student, setStudent] = useState()

  useEffect(() => {
    fetchStudent(studentId, setStudent)
  }, [])
  
  const handleUpdateStudent = async payload => {
    try {
      const priorXpArray = payload.priorxp.split(' ')
      const updatedStudent = {
        name: payload.name,
        email: payload.email,
        priorxp: priorXpArray,
      };
      const response = await sendStudent(updatedStudent, 'PUT', studentId )
      const parsed = await response.json()
      navigate(`/students/${parsed._id}`)

    } catch (error) {
      console.log("updated student:", error)
    }
  };


  return (
    <>
      <h1>Update Student</h1>
      {student && <StudentForm onSubmit={handleUpdateStudent} student={student}/>}
    </>
  )

}

export default UpdateStudentPage;