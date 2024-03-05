import {z} from 'zod'

const  formValidationSchema = z.object({
    name : z.string(),
    email: z.string({message: "please provide a valid email"})
})

type formValidation = z.infer<typeof formValidationSchema>