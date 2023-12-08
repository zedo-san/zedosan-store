import * as z from "zod";

export const loginSchema = z.object({
  emailAddress: z.string().email("Please enter a valid email."),
  password: z.string().min(1, "Please enter your password"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
