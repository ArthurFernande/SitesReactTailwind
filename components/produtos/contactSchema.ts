import { z } from "zod";

export const contactSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe um nome válido.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),

  telefone: z
    .string()
    .trim()
    .refine(
      (value) => {
        const digits = value.replace(/\D/g, "");

        return digits.length >= 10 && digits.length <= 11;
      },
      {
        message: "Informe um telefone válido com DDD.",
      },
    ),

  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido."),

  mensagem: z
    .string()
    .trim()
    .min(5, "Escreva uma mensagem com pelo menos 5 caracteres.")
    .max(1000, "A mensagem deve ter no máximo 1000 caracteres."),
});

export type ContactFormData = z.infer<typeof contactSchema>;