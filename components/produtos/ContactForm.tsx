"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useTranslation } from "@/components/traducaoButtons";

import {
  contactSchema,
  type ContactFormData,
} from "./contactSchema";

type FormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

type SubmitStatus = "idle" | "success" | "error";

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const initialFormData: ContactFormData = {
  nome: "",
  telefone: "",
  email: "",
  mensagem: "",
};

const baseFieldStyles = `
  w-full
  rounded-[15px]
  border
  bg-[#171e2a]/90
  px-5
  text-base
  text-white
  outline-none
  transition-all
  duration-300
  placeholder:text-slate-500
  hover:border-[#50639b]
  focus:ring-2
  disabled:cursor-not-allowed
  disabled:opacity-60
`;

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(
      2,
      6,
    )}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(
    2,
    7,
  )}-${digits.slice(7)}`;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");

  const [submitMessage, setSubmitMessage] = useState("");

  function updateField(
    field: keyof ContactFormData,
    value: string,
  ) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }));
    }

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  }

  function handleInputChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const field =
      event.target.name as keyof ContactFormData;

    updateField(field, event.target.value);
  }

  function formatValidationErrors(
    fieldErrors: Record<string, string[] | undefined>,
  ) {
    const formattedErrors: FormErrors = {};

    if (fieldErrors.nome?.[0]) {
      formattedErrors.nome = t("products.form.validation.name");
    }

    if (fieldErrors.telefone?.[0]) {
      formattedErrors.telefone = t("products.form.validation.phone");
    }

    if (fieldErrors.email?.[0]) {
      formattedErrors.email = t("products.form.validation.email");
    }

    if (fieldErrors.mensagem?.[0]) {
      formattedErrors.mensagem = t("products.form.validation.message");
    }

    return formattedErrors;
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setSubmitStatus("idle");
    setSubmitMessage("");

    const validationResult =
      contactSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors =
        validationResult.error.flatten().fieldErrors;

      setErrors(formatValidationErrors(fieldErrors));
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      const response = await fetch("/api/produtos-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        /*
         * Envia somente os quatro campos preenchidos
         * pelo usuário.
         */
        body: JSON.stringify(validationResult.data),
      });

      const responseData = (await response
        .json()
        .catch(() => null)) as ApiResponse | null;

      if (!response.ok) {
        throw new Error(
          t("products.form.submitError"),
        );
      }

      setFormData(initialFormData);
      setSubmitStatus("success");

      setSubmitMessage(
        t("products.form.submitSuccess"),
      );
    } catch (error) {
      console.error("Erro no formulário de produtos:", error);

      setSubmitStatus("error");

      setSubmitMessage(
        error instanceof Error
          ? error.message
          : t("products.form.submitErrorRetry"),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function getFieldStyles(
    field: keyof ContactFormData,
  ) {
    const hasError = Boolean(errors[field]);

    return `
      ${baseFieldStyles}
      ${
        hasError
          ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/15"
          : "border-[#394776] focus:border-[#36bff4] focus:ring-[#36bff4]/15"
      }
    `;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex w-full flex-col gap-7 lg:gap-8"
    >
      {/* Nome */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2.5 block text-xs font-bold uppercase tracking-tight text-white"
        >
          {t("products.form.name")} <span className="text-[#ff5263]">*</span>
        </label>

        <input
          id="contact-name"
          name="nome"
          type="text"
          value={formData.nome}
          onChange={handleInputChange}
          disabled={isSubmitting}
          autoComplete="name"
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={
            errors.nome
              ? "contact-name-error"
              : undefined
          }
          className={`${getFieldStyles("nome")} h-[58px]`}
        />

        {errors.nome && (
          <p
            id="contact-name-error"
            className="mt-2 text-sm text-red-400"
          >
            {errors.nome}
          </p>
        )}
      </div>

      {/* Telefone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-2.5 block text-xs font-bold uppercase tracking-tight text-white"
        >
          {t("products.form.phone")}{" "}
          <span className="text-[#ff5263]">*</span>
        </label>

        <input
          id="contact-phone"
          name="telefone"
          type="tel"
          value={formData.telefone}
          onChange={(event) =>
            updateField(
              "telefone",
              maskPhone(event.target.value),
            )
          }
          disabled={isSubmitting}
          inputMode="numeric"
          autoComplete="tel"
          placeholder={t("products.form.phonePlaceholder")}
          aria-invalid={Boolean(errors.telefone)}
          aria-describedby={
            errors.telefone
              ? "contact-phone-error"
              : undefined
          }
          className={`${getFieldStyles(
            "telefone",
          )} h-[58px]`}
        />

        {errors.telefone && (
          <p
            id="contact-phone-error"
            className="mt-2 text-sm text-red-400"
          >
            {errors.telefone}
          </p>
        )}
      </div>

      {/* E-mail */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-2.5 block text-xs font-bold uppercase tracking-tight text-white"
        >
          {t("products.form.email")}{" "}
          <span className="text-[#ff5263]">*</span>
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSubmitting}
          inputMode="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={
            errors.email
              ? "contact-email-error"
              : undefined
          }
          className={`${getFieldStyles("email")} h-[58px]`}
        />

        {errors.email && (
          <p
            id="contact-email-error"
            className="mt-2 text-sm text-red-400"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2.5 block text-xs font-bold uppercase tracking-tight text-white"
        >
          {t("products.form.message")}{" "}
          <span className="text-[#ff5263]">*</span>
        </label>

        <textarea
          id="contact-message"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleInputChange}
          disabled={isSubmitting}
          rows={5}
          maxLength={1000}
          aria-invalid={Boolean(errors.mensagem)}
          aria-describedby={
            errors.mensagem
              ? "contact-message-error"
              : undefined
          }
          className={`
            ${getFieldStyles("mensagem")}
            min-h-[140px]
            resize-none
            py-4
          `}
        />

        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            {errors.mensagem && (
              <p
                id="contact-message-error"
                className="text-sm text-red-400"
              >
                {errors.mensagem}
              </p>
            )}
          </div>

          <span className="shrink-0 text-xs text-slate-500">
            {formData.mensagem.length}/1000
          </span>
        </div>
      </div>

      {submitStatus === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-red-500/25 bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-400"
        >
          {submitMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          flex
          h-[59px]
          w-full
          items-center
          justify-center
          rounded-[14px]
          bg-gradient-to-r
          from-[#31c6f5]
          via-[#419bdc]
          to-[#6265c7]
          px-6
          text-sm
          font-bold
          text-white
          shadow-[0_12px_35px_rgba(50,160,235,0.16)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:brightness-110
          disabled:cursor-not-allowed
          disabled:translate-y-0
          disabled:opacity-60
        "
      >
        {t(isSubmitting ? "products.form.submitting" : "products.form.submit")}
      </button>

      {submitStatus === "success" && (
        <p
          role="status"
          className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-400"
        >
          {submitMessage}
        </p>
      )}
    </form>
  );
}
