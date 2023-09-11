import { useNavigate } from "react-router-dom";
import StudentForm from "../component/StudentForm";
import { sendStudent } from "../Utils/studentAPICalls";

function NewStudent() {
  const navigate = useNavigate()

  const handleNewStudent = async payload => {
    try {
      const priorXpArray = payload.priorxp.split(' ')
      const newStudent = {
        name: payload.name,
        email: payload.email,
        priorxp: priorXpArray,
      };
      
      const response = await sendStudent(newStudent)
      const parsed = await response.json()
      navigate(`/students/${parsed._id}`)

    } catch (error) {
      console.log("new student:", error)
    }
  };

  return (
    <div>
      <h1>New Student</h1>
     <StudentForm onSubmit={handleNewStudent} />
    </div>
  )
}

export default NewStudent