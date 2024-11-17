import {z} from 'zod'

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
)

export const validationSchema = z.object({
  name: z
    .string()
    .min(5, {message: 'Name should be at least 5 chars'})
    .max(25, {message: 'Name should has maximum of 25 chars'}),
  email: z
    .string()
    .email()
    .min(5, {message: 'Email should be at least 5 chars'})
    .max(25, {message: 'Email should has maximum of 25 chars'}),
  password: z
    .string()
    .regex(passwordValidation, {message: 'Password isnot valid!'}),
})
