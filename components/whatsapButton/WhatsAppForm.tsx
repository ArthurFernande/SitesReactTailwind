"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  LockKeyhole,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { z } from "zod";
import { useTranslation } from "../traducaoButtons";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Digite pelo menos 2 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),

  email: z
    .string()
    .trim()
    .min(1, "Digite seu e-mail corporativo.")
    .email("Digite um e-mail válido."),

  phone: z.string().refine(
    (value) => {
      const digits = value.replace(/\D/g, "");

      return digits.length === 10 || digits.length === 11;
    },
    {
      message: "Digite um telefone válido com DDD.",
    },
  ),

  employees: z.enum(["1-10", "11-50", "51-100", "100+"], {
    message: "Selecione a quantidade de funcionários.",
  }),
});

type LeadFormData = z.infer<typeof leadSchema>;
type FieldName = keyof LeadFormData;
type FormErrors = Partial<Record<FieldName, string>>;

type WhatsAppFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Step = {
  field: FieldName;
  question: string;
  placeholder?: string;
};

const steps: Step[] = [
  {
    field: "name",
    question: "Olá! Para começar, como você se chama?",
    placeholder: "Digite seu nome",
  },
  {
    field: "email",
    question: "Qual é o seu e-mail corporativo?",
    placeholder: "nome@empresa.com.br",
  },
  {
    field: "phone",
    question: "Qual é o seu número de telefone?",
    placeholder: "(00) 00000-0000",
  },
  {
    field: "employees",
    question: "Por fim, quantos funcionários sua empresa possui?",
  },
];

const employeeOptions: Array<{
  label: string;
  value: LeadFormData["employees"];
}> = [
  {
    label: "1 a 10",
    value: "1-10",
  },
  {
    label: "11 a 50",
    value: "11-50",
  },
  {
    label: "51 a 100",
    value: "51-100",
  },
  {
    label: "Mais de 100",
    value: "100+",
  },
];

const initialFormData: LeadFormData = {
  name: "",
  email: "",
  phone: "",
  employees: "1-10",
};

export function WhatsAppForm({ isOpen, onClose }: WhatsAppFormProps) {
  const { t } = useTranslation();
  const translatedSteps: Step[] = [
    { field: "name", question: t("whatsapp.nameQuestion"), placeholder: t("whatsapp.namePlaceholder") },
    { field: "email", question: t("whatsapp.emailQuestion"), placeholder: t("whatsapp.emailPlaceholder") },
    { field: "phone", question: t("whatsapp.phoneQuestion"), placeholder: t("whatsapp.phonePlaceholder") },
    { field: "employees", question: t("whatsapp.employeesQuestion") },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleQuestions, setVisibleQuestions] = useState(1);

  const [formData, setFormData] = useState<LeadFormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isTyping, setIsTyping] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const conversationRef = useRef<HTMLDivElement | null>(null);

  const currentQuestion = translatedSteps[currentStep];
  const currentField = currentQuestion.field;

  useEffect(() => {
    if (!isOpen) return;

    const timeout = window.setTimeout(() => {
      scrollConversationToBottom();
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isOpen, visibleQuestions, isTyping, isFinished]);

  function scrollConversationToBottom() {
    const conversation = conversationRef.current;

    if (!conversation) return;

    conversation.scrollTo({
      top: conversation.scrollHeight,
      behavior: "smooth",
    });
  }

  function updateField<Field extends FieldName>(
    field: Field,
    value: LeadFormData[Field],
  ) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  }

  function validateCurrentStep() {
    const currentSchema = leadSchema.shape[currentField];
    const result = currentSchema.safeParse(formData[currentField]);

    if (!result.success) {
      setErrors((previous) => ({
        ...previous,
        [currentField]: result.error.issues[0]?.message ?? "Campo inválido.",
      }));

      return false;
    }

    setErrors((previous) => ({
      ...previous,
      [currentField]: undefined,
    }));

    return true;
  }

  async function handleNext() {
    if (isTyping || isSubmitting) return;

    const isValid = validateCurrentStep();

    if (!isValid) return;

    if (currentStep === translatedSteps.length - 1) {
      await handleSubmit();
      return;
    }

    setIsTyping(true);

    window.setTimeout(() => {
      const nextStep = currentStep + 1;

      setCurrentStep(nextStep);
      setVisibleQuestions(nextStep + 1);
      setIsTyping(false);
    }, 850);
  }

  function handlePrevious() {
    if (currentStep === 0 || isTyping || isSubmitting) return;

    const previousStep = currentStep - 1;

    setCurrentStep(previousStep);
    setVisibleQuestions(previousStep + 1);
    setErrors({});
  }

 async function handleSubmit() {
   const result = leadSchema.safeParse(formData);

   if (!result.success) {
     const newErrors: FormErrors = {};

     result.error.issues.forEach((issue) => {
       const field = issue.path[0] as FieldName;

       if (!newErrors[field]) {
         newErrors[field] = issue.message;
       }
     });

     setErrors(newErrors);
     return;
   }

   try {
     setIsSubmitting(true);
     setIsTyping(true);
     setErrors({});

     const response = await fetch("/api/whatsapp-lead", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         nome: result.data.name,
         email: result.data.email,
         telefone: result.data.phone,
         quantidade_empregados: result.data.employees,
         plataforma_origem: window.location.href,
       }),
     });

     const responseData = await response.json().catch(() => null);

     if (!response.ok || !responseData?.success) {
       throw new Error(
         responseData?.message || "Não foi possível cadastrar o lead.",
       );
     }

     setIsTyping(false);
     setIsFinished(true);

     const whatsappNumber = "5599999999999";

     const message = t("whatsapp.redirectMessage").replace("{name}", result.data.name);

     const whatsappUrl =
       `https://wa.me/${whatsappNumber}` +
       `?text=${encodeURIComponent(message)}`;

     window.location.href = whatsappUrl;
   } catch (error) {
     console.error("Erro ao enviar formulário:", error);

     const errorMessage =
       error instanceof Error
         ? error.message
         : "Não foi possível enviar seus dados. Tente novamente.";

     setIsTyping(false);

     setErrors((previous) => ({
       ...previous,
       employees: errorMessage,
     }));
   } finally {
     setIsSubmitting(false);
   }
 }

  function handleClose() {
    onClose();
  }

  function handleReset() {
    setCurrentStep(0);
    setVisibleQuestions(1);
    setFormData(initialFormData);
    setErrors({});
    setIsTyping(false);
    setIsFinished(false);
    setIsSubmitting(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") return;

    event.preventDefault();
    void handleNext();
  }

  if (!isOpen) return null;

  return (
    <section
      role="dialog"
      aria-modal="false"
      aria-labelledby="whatsapp-form-title"
      className="
  fixed bottom-[78px] right-3 z-[100]

  flex
  h-[min(500px,calc(100dvh-100px))]
  w-[calc(100%-24px)]
  max-w-[390px]
  flex-col
  overflow-hidden

  rounded-[22px]
  border border-white/10
  bg-[#090909]
  text-white
  shadow-[0_24px_80px_rgba(0,0,0,0.65)]

  sm:bottom-[88px]
  sm:right-5
  sm:h-[min(540px,calc(100dvh-115px))]
  sm:w-[390px]
  sm:rounded-[24px]

  md:bottom-[108px]
  md:right-7
  md:h-[560px]
"
    >
      <header
        className="
          relative shrink-0
          border-b border-white/10
          bg-gradient-to-r
          from-[#102018]
          via-[#0c1611]
          to-[#090909]
          px-5 py-4
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                relative
                flex h-11 w-11
                shrink-0 items-center justify-center
                rounded-full
                bg-[#25d366]
                text-white
                shadow-[0_8px_24px_rgba(37,211,102,0.28)]
              "
            >
              <MessageCircle className="h-6 w-6 fill-current" strokeWidth={2} />

              <span
                className="
                  absolute bottom-0 right-0
                  h-3 w-3
                  rounded-full
                  border-2 border-[#102018]
                  bg-[#25d366]
                "
              />
            </div>

            <div className="min-w-0">
              <h2
                id="whatsapp-form-title"
                className="
                  truncate
                  text-base font-bold
                  text-white
                "
              >
                {t("whatsapp.title")}
              </h2>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#25d366]" />

                <span className="text-xs text-white/55">
                  {t("whatsapp.available")}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label={t("whatsapp.close")}
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-white/60
              transition

              hover:bg-white/10
              hover:text-white
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        ref={conversationRef}
        className="
          min-h-0 flex-1
          overflow-y-auto
          px-4 py-5

          [scrollbar-color:rgba(255,255,255,0.15)_transparent]
          [scrollbar-width:thin]
        "
      >
        <div className="flex flex-col gap-4">
          {translatedSteps.slice(0, visibleQuestions).map((step, index) => {
            const isCurrentQuestion = index === currentStep && !isFinished;

            const hasAnswered = index < currentStep || isFinished;

            return (
              <div key={step.field} className="flex flex-col gap-3">
                <ConsultantMessage message={step.question} />

                {hasAnswered && (
                  <UserAnswer
                    value={getAnswerLabel(step.field, formData[step.field])}
                  />
                )}

                {isCurrentQuestion && (
                  <div className="pl-10">
                    {step.field === "name" && (
                      <input
                        autoFocus
                        type="text"
                        value={formData.name}
                        placeholder={step.placeholder}
                        onChange={(event) =>
                          updateField("name", event.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        className={getInputClass(Boolean(errors.name))}
                      />
                    )}

                    {step.field === "email" && (
                      <input
                        autoFocus
                        type="email"
                        value={formData.email}
                        placeholder={step.placeholder}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        className={getInputClass(Boolean(errors.email))}
                      />
                    )}

                    {step.field === "phone" && (
                      <input
                        autoFocus
                        type="tel"
                        inputMode="numeric"
                        value={formData.phone}
                        placeholder={step.placeholder}
                        onChange={(event) =>
                          updateField("phone", formatPhone(event.target.value))
                        }
                        onKeyDown={handleKeyDown}
                        className={getInputClass(Boolean(errors.phone))}
                      />
                    )}

                    {step.field === "employees" && (
                      <div className="grid grid-cols-2 gap-2">
                        {employeeOptions.map((option) => {
                          const isSelected =
                            formData.employees === option.value;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() =>
                                updateField("employees", option.value)
                              }
                              className={`
                                relative
                                min-h-[48px]
                                rounded-xl
                                border px-2
                                text-xs font-bold
                                transition-all duration-200

                                ${
                                  isSelected
                                    ? `
                                      border-[#25d366]
                                      bg-[#25d366]/15
                                      text-[#58e68a]
                                    `
                                    : `
                                      border-white/10
                                      bg-white/[0.04]
                                      text-white/65
                                      hover:border-white/20
                                      hover:bg-white/[0.07]
                                      hover:text-white
                                    `
                                }
                              `}
                            >
                              {option.label}

                              {isSelected && (
                                <span
                                  className="
                                    absolute right-1.5 top-1.5
                                    flex h-4 w-4
                                    items-center justify-center
                                    rounded-full
                                    bg-[#25d366]
                                    text-white
                                  "
                                >
                                  <Check
                                    className="h-2.5 w-2.5"
                                    strokeWidth={3}
                                  />
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {errors[currentField] && (
                      <p
                        className="
                          mt-2
                          text-xs font-medium
                          text-red-400
                        "
                      >
                        {errors[currentField]}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && <TypingMessage />}

          {isFinished && (
            <div className="flex flex-col gap-3">
              <ConsultantMessage message={t("whatsapp.finished")} />

              <div className="pl-10">
                <button
                  type="button"
                  onClick={handleReset}
                  className="
                    text-xs font-semibold
                    text-[#25d366]
                    transition
                    hover:text-[#5dea91]
                  "
                >
                  {t("whatsapp.reset")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isFinished && (
        <footer
          className="
            shrink-0
            border-t border-white/10
            bg-[#101010]
            px-4 py-4
          "
        >
          <div className="flex items-center gap-2">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                disabled={isTyping || isSubmitting}
                aria-label="Voltar"
                className="
                  flex h-11 w-11 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  text-white/65
                  transition

                  hover:bg-white/10
                  hover:text-white

                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}

            <button
              type="button"
              onClick={() => void handleNext()}
              disabled={isTyping || isSubmitting}
              className="
                group
                flex h-11 flex-1
                items-center justify-center gap-2
                rounded-xl
                bg-[#25d366]
                px-4
                text-sm font-black
                uppercase
                text-white
                shadow-[0_10px_28px_rgba(37,211,102,0.2)]
                transition

                hover:bg-[#20bd5a]

                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {isTyping || isSubmitting
                ? t("whatsapp.wait")
                : currentStep === translatedSteps.length - 1
                  ? t("whatsapp.send")
                  : t("whatsapp.confirm")}

              {!isTyping &&
                !isSubmitting &&
                (currentStep === translatedSteps.length - 1 ? (
                  <Send className="h-4 w-4" />
                ) : (
                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                ))}
            </button>
          </div>

          <div
            className="
              mt-3
              flex items-center justify-center gap-1.5
              text-[10px]
              text-white/30
            "
          >
            <LockKeyhole className="h-3 w-3" />
            {t("whatsapp.secure")}
          </div>
        </footer>
      )}
    </section>
  );
}

function ConsultantMessage({ message }: { message: string }) {
  return (
    <div className="flex items-end gap-2">
      <div
        className="
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full
          bg-[#25d366]
          text-white
        "
      >
        <MessageCircle className="h-4 w-4 fill-current" strokeWidth={2} />
      </div>

      <div
        className="
          max-w-[82%]
          rounded-2xl rounded-bl-md
          border border-white/10
          bg-white/[0.06]
          px-4 py-3
          text-sm leading-5
          text-white/85
        "
      >
        {message}
      </div>
    </div>
  );
}

function UserAnswer({ value }: { value: string }) {
  return (
    <div className="flex justify-end">
      <div
        className="
          max-w-[82%]
          rounded-2xl rounded-br-md
          bg-[#075e54]
          px-4 py-3
          text-sm leading-5
          text-white
        "
      >
        {value}
      </div>
    </div>
  );
}

function TypingMessage() {
  return (
    <div className="flex items-end gap-2">
      <div
        className="
          flex h-8 w-8 shrink-0
          items-center justify-center
          rounded-full
          bg-[#25d366]
          text-white
        "
      >
        <MessageCircle className="h-4 w-4 fill-current" strokeWidth={2} />
      </div>

      <div
        aria-label="Consultor digitando"
        className="
          flex h-11 items-center gap-1.5
          rounded-2xl rounded-bl-md
          border border-white/10
          bg-white/[0.06]
          px-4
        "
      >
        <span
          className="
            h-2 w-2
            animate-bounce
            rounded-full
            bg-white/50

            [animation-delay:-0.3s]
          "
        />

        <span
          className="
            h-2 w-2
            animate-bounce
            rounded-full
            bg-white/50

            [animation-delay:-0.15s]
          "
        />

        <span
          className="
            h-2 w-2
            animate-bounce
            rounded-full
            bg-white/50
          "
        />
      </div>
    </div>
  );
}

function getAnswerLabel(field: FieldName, value: LeadFormData[FieldName]) {
  if (field === "employees") {
    return (
      employeeOptions.find((option) => option.value === value)?.label ??
      String(value)
    );
  }

  return String(value);
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) {
    return digits;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function getInputClass(hasError: boolean) {
  return `
    h-12 w-full
    rounded-xl
    border
    bg-white/[0.05]
    px-4
    text-sm text-white
    outline-none
    transition-all duration-200
    placeholder:text-white/25

    ${
      hasError
        ? `
          border-red-400
          focus:border-red-400
          focus:ring-4
          focus:ring-red-400/10
        `
        : `
          border-white/10
          hover:border-white/20
          focus:border-[#25d366]
          focus:ring-4
          focus:ring-[#25d366]/10
        `
    }
  `;
}
