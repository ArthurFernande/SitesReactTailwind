"use client";

import { ArrowRight } from "lucide-react";
import { Oswald } from "next/font/google";
import { useTranslation } from "@/components/traducaoButtons";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export function UnlockBenefitsSection() {
  const { t } = useTranslation();
  function scrollToForm() {
    document.getElementById("hero-contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <section
      id="vantagens-exclusivas"
      className="
        relative
        overflow-hidden
        bg-black
        px-4
        py-12
        text-white

        sm:px-6
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      {/* Brilho decorativo de fundo */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[-180px]
          mx-auto
          h-[320px]
          w-[90%]
          max-w-[1200px]
          rounded-full
          bg-[radial-gradient(circle,rgba(244,187,0,0.10)_0%,transparent_70%)]
          blur-2xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1540px]
          overflow-hidden
          rounded-[22px]
          border-2
          border-[#f4bb00]
          bg-black/90
          px-5
          py-10
          shadow-[0_0_18px_rgba(244,187,0,0.28)]

          sm:px-8
          sm:py-12

          md:px-10
          md:py-14

          lg:px-14
          lg:py-12
        "
      >
        {/* Brilho interno */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(244,187,0,0.045),transparent_60%)]
          "
        />

        <div className="relative z-10 text-center">
          <h2
            className={`
              ${oswald.className}

              mx-auto
              max-w-[1100px]
              text-[34px]
              font-bold
              uppercase
              leading-[1.08]
              tracking-[0.035em]

              sm:text-[42px]

              md:text-[50px]

              lg:text-[56px]
              lg:leading-[1.05]

              xl:text-[60px]
            `}
          >
            {t("contact.unlock.heading.beforeUnlock")}
            <span
              className="
                bg-gradient-to-r
                from-[#ffe788]
                via-[#f4bb00]
                to-[#d89500]
                bg-clip-text
                text-transparent
              "
            >
              {t("contact.unlock.heading.unlock")}
            </span>
            <br />
            {t("contact.unlock.heading.beforeExclusive")}<span className="text-[#42f071]">{t("contact.unlock.heading.exclusive")}</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1150px]
              font-[Arial]
              text-[16px]
              leading-[1.5]
              text-white

              sm:text-[18px]

              md:mt-6
              md:text-[20px]

              lg:text-[22px]
            "
          >
            {t("contact.unlock.description")}
          </p>

          <button
            type="button"
            onClick={scrollToForm}
            className="
              group
              mx-auto
              mt-7
              flex
              h-[62px]
              w-full
              max-w-[610px]
              items-center
              justify-center
              gap-4
              rounded-xl
              bg-gradient-to-r
              from-[#ff5151]
              via-[#dc1719]
              to-[#a80004]
              px-5
              font-[Arial]
              text-[14px]
              font-bold
              uppercase
              shadow-[0_0_28px_rgba(221,20,25,0.4)]
              transition
              duration-300

              hover:scale-[1.01]
              hover:brightness-110

              active:scale-[0.99]

              sm:text-[16px]

              md:mt-8
              md:h-[66px]

              lg:max-w-[650px]
            "
          >
            {t("contact.hero.cta")}
            <ArrowRight
              aria-hidden
              size={22}
              strokeWidth={3}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}
