"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "@/components/traducaoButtons";

const initialForm = {
  nome: "",
  telefone: "",
  cidade: "",
};

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return digits;

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ArcadeLeadForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/arcade-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: form.nome,
          telefone: form.telefone,
          cidade: form.cidade,
          plataforma_origem: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(t("arcade.form.error"));
      }

      setIsSuccess(true);
      setForm(initialForm);
    } catch {
      setErrorMessage(
        t("arcade.form.error"),
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full rounded-[10px] bg-black/58 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <h3 className="font-title text-[32px] font-medium leading-tight text-white md:text-[38px]">
          {t("arcade.form.successTitle")}
        </h3>

        <p className="mx-auto mt-5 max-w-[460px] font-body text-[18px] font-semibold leading-[1.5] text-white/90">
          {t("arcade.form.successMessage")}
        </p>

        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="mt-8 h-[62px] w-full rounded-[18px] bg-[linear-gradient(90deg,#F3B813,#FFE276)] font-body text-[16px] font-black uppercase text-black shadow-[0_0_35px_rgba(255,205,45,0.35)] transition hover:scale-[1.01]"
        >
          {t("arcade.form.reset")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[10px] bg-black/58 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-8"
    >
      <div className="space-y-8">
        <div>
          <label className="mb-3 block font-body text-[15px] font-extrabold uppercase text-white">
            {t("arcade.form.name")} <span className="text-[#FA3E22]">*</span>
          </label>

          <input
            type="text"
            required
            value={form.nome}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, nome: event.target.value }))
            }
            className="h-[64px] w-full rounded-[18px] border border-white/25 bg-black/20 px-5 font-body text-[17px] text-white outline-none transition focus:border-[#FA3E22]"
          />
        </div>

        <div>
          <label className="mb-3 block font-body text-[15px] font-extrabold uppercase text-white">
            {t("arcade.form.whatsapp")} <span className="text-[#FA3E22]">*</span>
          </label>

          <input
            type="tel"
            required
            inputMode="numeric"
            value={form.telefone}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                telefone: maskPhone(event.target.value),
              }))
            }
            className="h-[64px] w-full rounded-[18px] border border-white/25 bg-black/20 px-5 font-body text-[17px] text-white outline-none transition focus:border-[#FA3E22]"
          />
        </div>

        <div>
          <label className="mb-3 block font-body text-[15px] font-extrabold uppercase text-white">
            {t("arcade.form.city")} <span className="text-[#FA3E22]">*</span>
          </label>

          <input
            type="text"
            required
            value={form.cidade}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, cidade: event.target.value }))
            }
            className="h-[64px] w-full rounded-[18px] border border-white/25 bg-black/20 px-5 font-body text-[17px] text-white outline-none transition focus:border-[#FA3E22]"
          />
        </div>

        {errorMessage && (
          <p className="font-body text-[14px] font-semibold text-[#FA3E22]">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-[72px] w-full rounded-[18px] bg-[linear-gradient(90deg,#F3B813,#FFE276)] font-body text-[18px] font-black uppercase text-black shadow-[0_0_35px_rgba(255,205,45,0.35)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {t(isSubmitting ? "arcade.form.submitting" : "arcade.form.submit")}
        </button>
      </div>
    </form>
  );
}
