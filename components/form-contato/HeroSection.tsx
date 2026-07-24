"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import {
  ArrowRight,
  BarChart3,
  Cpu,
  Crown,
  Radio,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Trophy,
  UserRound,
} from "lucide-react";
import { ContactForm } from "./contactForm";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";



const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const desktopBackground = "/assets/imgs/form-contato/HeroSectionDesktop.jpeg";

const mobileBackground = "/assets/imgs/form-contato/HeroSectionMobile.png";

const primaryBenefits = [
  {
    icon: Rocket,
    lineKeys: ["contact.hero.primary.market.1", "contact.hero.primary.market.2", "contact.hero.primary.market.3", "contact.hero.primary.market.4"],
  },
  {
    icon: BarChart3,
    lineKeys: ["contact.hero.primary.profit.1", "contact.hero.primary.profit.2", "contact.hero.primary.profit.3", "contact.hero.primary.profit.4"],
  },
  {
    icon: ShieldCheck,
    lineKeys: [
      "contact.hero.primary.structure.1",
      "contact.hero.primary.structure.2",
      "contact.hero.primary.structure.3",
      "contact.hero.primary.structure.4",
    ],
  },
  {
    icon: Crown,
    lineKeys: ["contact.hero.primary.brand.1", "contact.hero.primary.brand.2", "contact.hero.primary.brand.3"],
  },
] as const satisfies ReadonlyArray<{ icon: typeof Radio; lineKeys: readonly TranslationKey[] }>;

const platformBenefits = [
  {
    icon: Radio,
    lineKeys: ["contact.hero.platform.live.1", "contact.hero.platform.live.2"],
  },
  {
    icon: RefreshCw,
    lineKeys: ["contact.hero.platform.updates.1", "contact.hero.platform.updates.2"],
  },
  {
    icon: UserRound,
    lineKeys: ["contact.hero.platform.casino.1", "contact.hero.platform.casino.2"],
  },
  {
    icon: Trophy,
    lineKeys: ["contact.hero.platform.ranking.1", "contact.hero.platform.ranking.2"],
  },
  {
    icon: Cpu,
    lineKeys: ["contact.hero.platform.api.1", "contact.hero.platform.api.2"],
  },
] as const satisfies ReadonlyArray<{ icon: typeof Radio; lineKeys: readonly TranslationKey[] }>;

export function HeroSection() {
  const { t } = useTranslation();
  function scrollToForm() {
    document.getElementById("hero-contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#07090d]
        text-white
      "
    >
      {/* Imagem de fundo desktop e tablet */}
      <Image
        src={desktopBackground}
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 1px"
        className="
          hidden
          object-cover
          object-center
          md:block
        "
      />

      {/* Imagem de fundo mobile */}
      <Image
        src={mobileBackground}
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className="
          object-cover
          object-top
          md:hidden
        "
      />

      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-black/35 md:bg-black/30" />

      {/* Gradiente para melhorar a leitura */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/15
          via-black/15
          to-[#07090d]/95

          md:bg-gradient-to-r
          md:from-black/70
          md:via-black/20
          md:to-black/40
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          px-5
          py-10

          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16
        "
      >
        {/* Conteúdo principal */}
        <div
          className="
            grid
            flex-1
            items-center
            gap-10
            pt-16

            md:pt-12

            lg:grid-cols-[minmax(0,1.5fr)_minmax(380px,0.85fr)]
            lg:gap-8
            lg:pt-6

            xl:grid-cols-[minmax(0,1.55fr)_minmax(430px,0.85fr)]
            xl:gap-12
          "
        >
          {/* Conteúdo esquerdo */}
          <div className="mx-auto w-full max-w-[850px] lg:mx-0">
            {/* Texto superior */}
            <div
              className="
                mb-5
                text-center
                font-[Arial]
                text-[18px]
                font-normal
                uppercase
                leading-[1.45]

                sm:text-[20px]

                md:max-w-[630px]
                md:text-left
                md:text-[17px]
                md:leading-[1.35]

                lg:mb-4
                lg:text-[16px]

                xl:text-[17px]
              "
            >
              <p>{t("contact.hero.kicker.line1")}</p>

              <p>
                <span className="text-[#ffc400]">{t("contact.hero.kicker.line2")}</span>

                <span className="rounded-sm bg-[#eeb900] px-1 text-white">
                  {t("contact.hero.kicker.highlight")}
                </span>
              </p>

              <p>{t("contact.hero.kicker.line3")}</p>
            </div>

            {/* Linha decorativa */}
            <div
              className="
                mx-auto
                mb-4
                h-px
                w-[82%]
                max-w-[360px]
                bg-[#e7b400]

                md:mx-0
                md:w-[340px]
              "
            />

            {/* Título */}
            <h1
              className={`
                ${oswald.className}

                mx-auto
                max-w-[740px]
                text-center
                text-[42px]
                font-bold
                uppercase
                leading-[0.98]
                tracking-[-0.025em]
                drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]

                sm:text-[52px]

                md:mx-0
                md:max-w-[730px]
                md:text-left
                md:text-[58px]

                lg:text-[54px]

                xl:max-w-[800px]
                xl:text-[66px]

                2xl:text-[72px]
              `}
            >
              {t("contact.hero.title.line1")}
              <br />
              <span className="text-[#ffc400]">{t("contact.hero.title.line2")}</span>
              <br />
              {t("contact.hero.title.line3")}
              <br />
              <span className="text-[#ffc400]">{t("contact.hero.title.line4")}</span>
            </h1>

            {/* Texto de apoio */}
            <p
              className="
                mx-auto
                mt-2
                max-w-[480px]
                text-center
                font-[Arial]
                text-[16px]
                leading-[1.25]
                text-white

                md:mx-0
                md:max-w-[400px]
                md:text-left
                md:text-[15px]

                lg:text-[14px]

                xl:text-[16px]
              "
            >
              {t("contact.hero.support.line1")}
              <br className="hidden sm:block" />
              {t("contact.hero.support.line2")}
              <br className="md:hidden" />
              <span className="text-[#ffc400]">
                {t("contact.hero.support.highlight")}
              </span>
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={scrollToForm}
              className="
                group
                mt-6
                flex
                h-[74px]
                w-full
                items-center
                justify-center
                gap-4
                rounded-xl
                bg-gradient-to-r
                from-[#ff5454]
                via-[#e41d20]
                to-[#a60005]
                px-6
                font-[Arial]
                text-[16px]
                font-bold
                uppercase
                shadow-[0_0_24px_rgba(224,23,28,0.38)]
                transition
                duration-300

                hover:brightness-110
                active:scale-[0.99]

                md:mt-5
                md:h-[58px]
                md:max-w-[830px]
                md:rounded-lg
                md:text-[13px]

                xl:h-[64px]
                xl:text-[15px]
              "
            >
              {t("contact.hero.cta")}
              <ArrowRight
                size={21}
                strokeWidth={3}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* Benefícios principais */}
            <div
              className="
                mt-5
                grid
                grid-cols-2

                md:grid-cols-4

                lg:max-w-[850px]
              "
            >
              {primaryBenefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.lineKeys.join("-")}
                    className={`
                      relative
                      flex
                      min-h-[175px]
                      flex-col
                      items-center
                      justify-start
                      px-3
                      py-5
                      text-center

                      md:min-h-[100px]
                      md:flex-row
                      md:items-center
                      md:justify-center
                      md:gap-3
                      md:px-4
                      md:py-2
                      md:text-left

                      ${
                        index % 2 === 0
                          ? "border-r border-white/30 md:border-r"
                          : ""
                      }

                      ${
                        index < 2
                          ? "border-b border-white/30 md:border-b-0"
                          : ""
                      }

                      ${
                        index !== primaryBenefits.length - 1
                          ? "md:border-r md:border-white/30"
                          : "md:border-r-0"
                      }
                    `}
                  >
                    <Icon
                      className="
                        mb-3
                        h-10
                        w-10
                        shrink-0
                        text-[#ffc400]

                        md:mb-0
                        md:h-8
                        md:w-8

                        xl:h-9
                        xl:w-9
                      "
                      strokeWidth={1.8}
                    />

                    <div
                      className="
                        font-[Arial]
                        text-[11px]
                        font-bold
                        uppercase
                        leading-[1.75]

                        md:text-[9px]
                        md:leading-[1.6]

                        xl:text-[10px]
                      "
                    >
                      {benefit.lineKeys.map((lineKey) => (
                        <p key={lineKey}>{t(lineKey)}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mensagem inferior */}
            <div
              className="
                mt-5
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-[#e7b400]
                bg-black/75
                px-5
                py-5
                backdrop-blur-[2px]

                md:mt-4
                md:max-w-[835px]
                md:rounded-lg
                md:px-5
                md:py-4

                lg:mt-3
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-[#ffc400]
                  text-[#ffc400]
                "
              >
                <div
                  className="
                    h-3
                    w-3
                    rounded-full
                    border-[3px]
                    border-[#ffc400]
                  "
                />
              </div>

              <p
                className="
                  font-[Arial]
                  text-[15px]
                  font-bold
                  uppercase
                  leading-[1.55]

                  md:text-[14px]

                  xl:text-[16px]
                "
              >
                {t("contact.hero.closing.beforeNow")}<span className="text-[#ffc400]">{t("contact.hero.closing.now")}</span>
                <span className="hidden sm:inline">{t("contact.hero.closing.place")}</span>
                <span className="text-[#ffc400]">{t("contact.hero.closing.igaming")}</span>
                <br />{t("contact.hero.closing.success")}<span className="text-[#ffc400]">{t("contact.hero.closing.yours")}</span>
              </p>
            </div>
          </div>

          {/* Formulário separado */}
          <ContactForm />
        </div>

        {/* Benefícios inferiores */}
        <div
          className="
            mt-10
            grid
            grid-cols-2
            rounded-xl
            border
            border-[#e7b400]
            bg-black/75
            px-2
            py-3
            backdrop-blur-[2px]

            sm:grid-cols-3

            md:mt-6
            md:grid-cols-5
            md:rounded-lg
            md:px-0
            md:py-3

            lg:mt-4
          "
        >
          {platformBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.lineKeys.join("-")}
                className={`
                  flex
                  min-h-[85px]
                  items-center
                  justify-center
                  gap-3
                  px-3
                  py-3

                  md:min-h-[55px]
                  md:px-4
                  md:py-1

                  ${
                    index !== platformBenefits.length - 1
                      ? "md:border-r md:border-white/30"
                      : ""
                  }
                `}
              >
                <Icon
                  className="
                    h-7
                    w-7
                    shrink-0
                    text-[#ffc400]

                    lg:h-6
                    lg:w-6

                    xl:h-7
                    xl:w-7
                  "
                  strokeWidth={1.8}
                />

                <div
                  className="
                    font-[Arial]
                    text-[9px]
                    font-bold
                    uppercase
                    leading-[1.45]

                    sm:text-[10px]

                    md:text-[8px]

                    lg:text-[9px]

                    xl:text-[10px]
                  "
                >
                  {benefit.lineKeys.map((lineKey) => (
                    <p key={lineKey}>{t(lineKey)}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
