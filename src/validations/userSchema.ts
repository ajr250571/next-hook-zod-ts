import { z } from "zod";
const plans = ["free", "basic", "medium", "premium"] as const;

export const userSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Minimo de 3 caracteres.",
    })
    .max(50, {
      message: "Maximo de 50 caracteres.",
    }),
  email: z.string().email({
    message: "Ingrese un correo valido.",
  }),
  password: z.string().min(6, {
    message: "Minimo de 6 caracteres.",
  }),
  confirmPassword: z.string().min(6, {
    message: "Minimo de 6 caracteres.",
  }),
  weight: z.string().refine((weight) => !isNaN(parseFloat(weight)), {
    message: "Weight no es numero.",
  }),
  plan: z.enum(plans, {
    errorMap: () => ({ message: "Seleccione un Plan." }),
  }),
});
