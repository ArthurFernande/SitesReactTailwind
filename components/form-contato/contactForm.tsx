"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { LockKeyhole } from "lucide-react";
import { z } from "zod";
import { useTranslation } from "@/components/traducaoButtons";

const contactFormSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Digite um nome com pelo menos 2 caracteres.")
    .max(100, "O nome deve possuir no máximo 100 caracteres."),

  whatsapp: z
    .string()
    .trim()
    .min(1, "Informe seu WhatsApp.")
    .transform((value) => value.replace(/\D/g, ""))
    .refine(
      (value) => value.length === 10 || value.length === 11,
      "Informe um WhatsApp válido com DDD.",
    ),

  cidade: z
    .string()
    .trim()
    .min(2, "Digite uma cidade válida.")
    .max(100, "A cidade deve possuir no máximo 100 caracteres."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type ContactFormFields = {
  nome: string;
  whatsapp: string;
  cidade: string;
};

type ContactFormErrors = Partial<
  Record<keyof ContactFormFields, string>
>;

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const initialFormData: ContactFormFields = {
  nome: "",
  whatsapp: "",
  cidade: "",
};

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] =
    useState<ContactFormFields>(initialFormData);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target;

    const fieldName = name as keyof ContactFormFields;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]:
        fieldName === "whatsapp"
          ? formatWhatsApp(value)
          : value,
    }));

    if (errors[fieldName]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [fieldName]: undefined,
      }));
    }

    if (successMessage) {
      setSuccessMessage("");
    }

    if (errorMessage) {
      setErrorMessage("");
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setErrors({});
    setSuccessMessage("");
    setErrorMessage("");

    const validationResult =
      contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: ContactFormErrors = {};

      validationResult.error.issues.forEach((issue) => {
        const fieldName =
          issue.path[0] as keyof ContactFormFields;

        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = t(
            fieldName === "nome"
              ? "contact.form.validation.name"
              : fieldName === "whatsapp"
                ? "contact.form.validation.whatsapp"
                : "contact.form.validation.city",
          );
        }
      });

      setErrors(fieldErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      const validatedData: ContactFormData =
        validationResult.data;

      const response = await fetch("/api/form-contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: validatedData.nome,

          // A rota espera "telefone".
          telefone: validatedData.whatsapp,

          cidade: validatedData.cidade,

          plataforma_origem: window.location.href,
        }),
      });

      const responseData = (await response
        .json()
        .catch(() => null)) as ApiResponse | null;

      if (!response.ok) {
        throw new Error(
          t("contact.form.error"),
        );
      }

      setSuccessMessage(
        t("contact.form.success"),
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error(
        "Erro ao enviar formulário de contato:",
        error,
      );

      setSuccessMessage("");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : t("contact.form.error"),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="hero-contact-form"
      className="
        mx-auto
        w-full
        max-w-[560px]
        scroll-mt-5
        rounded-xl
        bg-black/80
        px-5
        py-8
        shadow-[0_20px_70px_rgba(0,0,0,0.5)]
        backdrop-blur-[3px]

        sm:px-8

        lg:mx-0
        lg:max-w-none
        lg:px-3
        lg:py-7

        xl:px-4
        xl:py-9
      "
    >
      <div className="px-1 sm:px-2 lg:px-0">
        <h2
          className="
            text-center
            font-[Arial]
            text-[18px]
            font-bold
            uppercase
            leading-[1.35]

            sm:text-[20px]
            lg:text-[17px]
            xl:text-[19px]
          "
        >
          {t("contact.form.heading.line1")}
          <br />
          {t("contact.form.heading.line2")}
          <br />
          <span className="text-[#ffc400]">
            {t("contact.form.heading.line3")}
          </span>
          <br />
          {t("contact.form.heading.line4")}
        </h2>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="
            mt-8
            space-y-6

            lg:mt-7
            lg:space-y-5
          "
        >
          <FormField
            id="nome"
            label={t("contact.form.name")}
            name="nome"
            type="text"
            value={formData.nome}
            error={errors.nome}
            autoComplete="name"
            disabled={isSubmitting}
            onChange={handleChange}
          />

          <FormField
            id="whatsapp"
            label={t("contact.form.whatsapp")}
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            error={errors.whatsapp}
            autoComplete="tel"
            inputMode="numeric"
            placeholder={t("contact.form.phonePlaceholder")}
            maxLength={15}
            disabled={isSubmitting}
            onChange={handleChange}
          />

          <FormField
            id="cidade"
            label={t("contact.form.city")}
            name="cidade"
            type="text"
            value={formData.cidade}
            error={errors.cidade}
            autoComplete="address-level2"
            disabled={isSubmitting}
            onChange={handleChange}
          />

          {errorMessage && (
            <p
              role="alert"
              className="
                rounded-lg
                border
                border-red-500/30
                bg-red-500/10
                px-4
                py-3
                text-center
                font-[Arial]
                text-[12px]
                font-bold
                text-red-400
              "
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-2
              flex
              h-[58px]
              w-full
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-[#ff5454]
              via-[#e31b1e]
              to-[#ad0005]
              px-4
              font-[Arial]
              text-[14px]
              font-bold
              uppercase
              shadow-[0_0_26px_rgba(217,15,20,0.45)]
              transition
              duration-300

              hover:brightness-110
              active:scale-[0.99]

              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:brightness-100

              lg:h-[52px]
              lg:rounded-lg

              xl:h-[58px]
              xl:text-[16px]
            "
          >
            {isSubmitting
              ? t("contact.form.submitting")
              : t("contact.form.submit")}
          </button>

          {successMessage && (
            <p
              role="status"
              className="
                rounded-lg
                border
                border-green-500/30
                bg-green-500/10
                px-4
                py-3
                text-center
                font-[Arial]
                text-[12px]
                font-bold
                text-green-400
              "
            >
              {successMessage}
            </p>
          )}

          <div className="flex items-center justify-center gap-2 pt-1">
            <LockKeyhole
              size={16}
              className="text-[#ffc400]"
              fill="currentColor"
              aria-hidden="true"
            />

            <p
              className="
                font-[Arial]
                text-[9px]
                font-bold
                uppercase
                text-white/90
              "
            >
              {t("contact.form.secure")}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

type FormFieldProps = {
  id: string;
  label: string;
  name: keyof ContactFormFields;
  type: "text" | "tel";
  value: string;
  error?: string;
  autoComplete: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
};

function FormField({
  id,
  label,
  name,
  type,
  value,
  error,
  autoComplete,
  inputMode,
  placeholder,
  maxLength,
  disabled,
  onChange,
}: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          font-[Arial]
          text-[10px]
          font-bold
          uppercase
          text-white
        "
      >
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={onChange}
        className={`
          h-[52px]
          w-full
          rounded-xl
          border
          bg-black/30
          px-4
          font-[Arial]
          text-[15px]
          text-white
          outline-none
          transition
          duration-200

          placeholder:text-white/30

          disabled:cursor-not-allowed
          disabled:opacity-60

          lg:h-[46px]
          lg:rounded-lg

          xl:h-[52px]

          ${
            error
              ? `
                border-red-500
                focus:border-red-500
                focus:ring-2
                focus:ring-red-500/20
              `
              : `
                border-white/30
                focus:border-[#ffc400]
                focus:ring-2
                focus:ring-[#ffc400]/20
              `
          }
        `}
      />

      {error && (
        <p
          id={errorId}
          role="alert"
          className="
            mt-1.5
            font-[Arial]
            text-[11px]
            leading-4
            text-red-400
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}

function formatWhatsApp(value: string) {
  const numbers = value
    .replace(/\D/g, "")
    .slice(0, 11);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(
      2,
      6,
    )}-${numbers.slice(6)}`;
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(
    2,
    7,
  )}-${numbers.slice(7)}`;
}
