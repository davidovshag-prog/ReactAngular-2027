import { z } from "zod";

export const registerSchema = z
    .object({
        firstName: z
            .string()
            .min(2, "Ім'я повинно містити мінімум 2 символи"),

        lastName: z
            .string()
            .min(2, "Прізвище повинно містити мінімум 2 символи"),

        email: z
            .email("Введіть коректний email"),

        password: z
            .string()
            .min(8, "Пароль повинен містити мінімум 8 символів"),

        confirmPassword: z
            .string()
            .min(1, "Підтвердіть пароль"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Паролі не співпадають",
        path: ["confirmPassword"],
    });