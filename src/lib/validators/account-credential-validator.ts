import { z } from "zod"

export const AuthCredeintialValidator = z.object({
    email:z.string().email(),
    password:z.string().min(8,{message:"PassWord shold be of at leasr 8 char"})
  })

export  type TAuthCredeintialValidator =z.infer<typeof AuthCredeintialValidator>