import { z } from "zod";

export const CreateRegistrationSchema = z
  .object({
    username: z
      .string()
      .min(1, "Минимальное количество символов 1")
      .max(15, "Превышена максимальная длина имени пользователя")
      .regex(
        /^[a-zA-Zа-яА-Я0-9\s.,]+$/,
        "Имя может содержать только буквы, цифры, пробелы, точки и запятые"
      )
      .refine(
        (value) => value.trim().length > 0 && !value.startsWith(" "),
        "Поле не должно быть пустым"
      ),
    email: z
      .string()
      .email("Проверьте правильность ввода электронной почты")
      .max(320, "Превышена максимальная длина адреса электронной почты"),
    password: z
      .string()
      .min(7, "Введите более 7 символов")
      .max(25, "Не более 25 символов")
      .regex(
        /^[a-zA-Z0-9~!@#$%^&*()[\]{}><\/\\|"'.,:;]+$/,
        "Пароль может содержать только латинские буквы, цифры и ~!@#$%^&*()[]{}>< и другие символы"
      )
      .refine(
        (value) => !value.startsWith(" "),
        "Пароль не должен начинаться с пробела"
      ),
    confirmPassword: z.string(),
    consent: z
      .boolean()
      .refine((value) => value, "Для регистрации необходимо дать согласие"),
    
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
      });
    }
  });

  export type CreateRegistrationForm = z.infer<typeof CreateRegistrationSchema>;

  export const verifyEMailScheme = z.object({
    code: z
      .string()
      .min(5, 'Минимум 5 символов')
  })

  export type verifyEMailType = z.infer<typeof verifyEMailScheme>;