import { useState } from "react"

const StudentForm = ({ onSubmit, student }) => {
  const [name, setName] = useState(student?.name || '')
  const [email, setEmail] = useState(student?.email || '')
  const [priorxp, setPriorXp] = useState(student?.priorxp.join(' ') || '')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ name, email, priorxp })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        placeholder='name'
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <input
        type='text'
        value={email}
        placeholder='email'
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
      <input
        type='text'
        value={priorxp}
        placeholder='Prior Experience'
        onChange={e => {
          setPriorXp(e.target.value)
        }}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}


export default StudentForm