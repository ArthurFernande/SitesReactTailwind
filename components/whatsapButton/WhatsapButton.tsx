"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WhatsAppForm } from "./WhatsAppForm";
import { useTranslation } from "../traducaoButtons";

export function WhatsAppButton() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((previous) => !previous);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <WhatsAppForm isOpen={isModalOpen} onClose={closeModal} />

      <button
        type="button"
        onClick={toggleModal}
        aria-label={
          isModalOpen ? t("whatsapp.close") : t("whatsapp.open")
        }
        aria-expanded={isModalOpen}
        className="
          group
          fixed bottom-5 right-5 z-[110]
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-[#25d366]
          text-white
          shadow-[0_12px_40px_rgba(37,211,102,0.42)]
          transition-all duration-300

          hover:-translate-y-1
          hover:scale-105
          hover:bg-[#20bd5a]

          focus:outline-none
          focus-visible:ring-4
          focus-visible:ring-[#25d366]/30

          md:bottom-7
          md:right-7
          md:h-16
          md:w-16
        "
      >
        {!isModalOpen && (
          <span
            aria-hidden="true"
            className="
              absolute inset-0
              animate-ping
              rounded-full
              bg-[#25d366]/25
            "
          />
        )}

        {isModalOpen ? (
          <X
            className="
              relative z-10
              h-7 w-7
              transition-transform duration-300
              group-hover:rotate-90

              md:h-8
              md:w-8
            "
            strokeWidth={2.2}
          />
        ) : (
          <MessageCircle
            className="
              relative z-10
              h-7 w-7
              fill-current
              transition-transform duration-300
              group-hover:-rotate-6

              md:h-8
              md:w-8
            "
            strokeWidth={2}
          />
        )}
      </button>
    </>
  );
}
