import {useState} from "react";

function RagnarsPage () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [priorXp, setpriorXp] = useState([])

  const handleNewStudent = async() => {
    const priorXpArray = priorXp.slit(' ')
    const newStudent = {
      name,
      email,
      priorXP: priorXpArray
    };
    const response = await fetch('http://localhost:5005/api/students/',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent)
    })
      const parsed = await response.json()
  };

  return (
    <div>
      <form onSubmit={handleNewStudent}>
        <input type='text' value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
        <input type='text' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type='text' value={priorXp} placeholder='Prior Experience' onChange={(e)=>{setpriorXp(e.target.value)}}/>
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
  }

export default RagnarsPage