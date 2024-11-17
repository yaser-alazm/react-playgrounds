import {useState} from 'react'
import {z} from 'zod'

const validationSchema = z.object({
  name: z
    .string()
    .min(5, {message: 'Name should be at least 5 chars'})
    .max(25, {message: 'Name should has maximum of 25 chars'}),
})

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const validateInputs = () => {
    // integrate zod for validation
  }

  const handleSubmit = () => {
    // handle mocked-api call and submission
  }
  return (
    <>
      <h2>Signup </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Full Name'
        />
        <br />
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email Address'
        />
        <br />
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Signup
