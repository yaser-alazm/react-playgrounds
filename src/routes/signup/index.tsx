import {FormEvent, useState} from 'react'
import {ZodError} from 'zod'
import {validationSchema} from './validations'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      validationSchema.parse({name, email, password})
      const result = (await addUser()) as Promise<string>
      console.log(result)
    } catch (error) {
      if (error instanceof ZodError) {
        console.error('validation error: ', error.issues[0].message)
      } else {
        console.error('Unexpected error: ', error)
      }
    }
  }

  const addUser = () => {
    return new Promise((resolve, _) => {
      setTimeout(() => resolve('Added successfully!'), 3000)
    })
  }
  return (
    <>
      <h2>Signup </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        />
        <br />
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
        />
        <br />
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Signup
