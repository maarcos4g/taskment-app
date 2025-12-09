import { z } from "zod/v4";

export const registerSchema = z.object({
  email: z.email("E-mail inválido"),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres."),
  name: z.string().min(3, "O nome precisa conter no minimo 3 caracteres.")
})

export type RegisterFormData = z.infer<typeof registerSchema>;