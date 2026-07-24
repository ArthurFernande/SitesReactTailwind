"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { useTranslation } from "@/components/traducaoButtons";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const backgroundImage = "/assets/imgs/form-contato/background04.jpeg";

export function CommunityQuoteSection() {
  const { t } = useTranslation();
  return (
    <section
      id="comunidade"
      className="
        relative
        isolate
        flex
        min-h-[310px]
        items-center
        overflow-hidden
        bg-black
        px-5
        py-16
        text-white

        sm:min-h-[340px]
        sm:px-8

        md:min-h-[370px]
        md:px-10

        lg:min-h-[350px]
        lg:px-12
        lg:py-14
      "
    >
      {/* Imagem de fundo */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        sizes="100vw"
        className="
          -z-30
          object-cover
          object-center
        "
      />

      {/* Camada escura responsável pela opacidade */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-20
          bg-black/70

          md:bg-black/68
          lg:bg-black/65
        "
      />

      {/* Gradiente adicional */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-black/55
          via-black/15
          to-black/55
        "
      />

      {/* Sombra superior e inferior */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-black/45
          via-transparent
          to-black/50
        "
      />

      <div className="mx-auto w-full max-w-[1500px]">
        <blockquote
          className={`
            ${oswald.className}

            mx-auto
            max-w-[1350px]
            text-center
            text-[31px]
            font-bold
            uppercase
            leading-[1.25]
            tracking-[0.025em]
            drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]

            sm:text-[39px]
            sm:leading-[1.22]

            md:text-[47px]

            lg:text-[50px]
            lg:leading-[1.35]

            xl:text-[56px]

            2xl:text-[62px]
          `}
        >
          <span aria-hidden>&quot;</span>
          {t("contact.quote.beforeMembers")}
          <span
            className="
              bg-gradient-to-r
              from-[#ffe07a]
              via-[#f5ba00]
              to-[#d99600]
              bg-clip-text
              text-transparent
            "
          >
            {t("contact.quote.members")}
          </span>
          {t("contact.quote.beforeEnjoying")}<span className="text-[#43f06c]">{t("contact.quote.enjoying")}</span>
          <span aria-hidden>.&quot;</span>
        </blockquote>
      </div>
    </section>
  );
}
