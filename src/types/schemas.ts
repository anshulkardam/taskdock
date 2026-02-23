import z from "zod";

export const loginSchema = z.object({
  email: z.email("Enter a valid email").min(1, "Email is required"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: z.email("Enter a valid email").min(1, "Email is required"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
