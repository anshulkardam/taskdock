import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, "Minimum 6 characters Required"),
});


export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});