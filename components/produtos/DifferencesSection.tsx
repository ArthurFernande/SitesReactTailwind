"use client";

import { Space_Grotesk } from "next/font/google";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pillars = [
  {
    number: "01",
    titleKey: "products.differences.validated.title",
    descriptionKey: "products.differences.validated.description",
    footerKey: "products.differences.validated.footer",
  },
  {
    number: "02",
    titleKey: "products.differences.scalable.title",
    descriptionKey: "products.differences.scalable.description",
    footerKey: "products.differences.scalable.footer",
  },
  {
    number: "03",
    titleKey: "products.differences.security.title",
    descriptionKey: "products.differences.security.description",
    footerKey: "products.differences.security.footer",
  },
  {
    number: "04",
    titleKey: "products.differences.b2b.title",
    descriptionKey: "products.differences.b2b.description",
    footerKey: "products.differences.b2b.footer",
  },
] satisfies ReadonlyArray<{
  number: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  footerKey: TranslationKey;
}>;

export function DifferencesSection() {
  const { t } = useTranslation();
  return (
    <section
      id="diferenciais"
      className={`
        ${spaceGrotesk.className}
        scroll-mt-[100px]
        overflow-hidden
        bg-[#060b11]
        text-white
      `}
    >
      <div
        className="
          mx-auto flex
          w-[calc(100%-32px)]
          max-w-[1320px]
          flex-col
          justify-center
          py-16

          sm:w-[calc(100%-56px)]
          sm:py-18

          md:w-[calc(100%-80px)]
          md:py-20

          lg:min-h-[100svh]
          lg:w-[calc(100%-144px)]
          lg:py-[clamp(48px,6vh,72px)]

          xl:w-[calc(100%-176px)]
        "
      >
        {/* Cabeçalho */}
        <div
          className="
            grid items-end gap-8

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14

            xl:gap-20
          "
        >
          <h2
            className="
              max-w-[610px]
              text-[38px]
              font-medium
              leading-[1]
              tracking-[-0.04em]

              sm:text-[44px]

              md:text-[50px]

              lg:text-[54px]

              xl:text-[58px]
            "
          >
            <span className="block">{t("products.differences.heading.line1")}</span>

            <span className="block">{t("products.differences.heading.line2")}</span>

            <span className="mt-2 block text-[#49c8f2]">
              {t("products.differences.heading.line3")}
            </span>

            <span className="block text-[#49c8f2]">
              {t("products.differences.heading.line4")}
            </span>
          </h2>

          <p
            className="
              max-w-[540px]
              text-[17px]
              leading-[1.55]
              text-[#7181a4]

              sm:text-[18px]

              md:text-[19px]

              lg:justify-self-end
              lg:pb-1
              lg:text-[20px]

              xl:text-[21px]
            "
          >
            {t("products.differences.description")}
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-11 grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:mt-[clamp(38px,5vh,54px)]
            lg:grid-cols-4
            lg:gap-4

            xl:gap-5
          "
        >
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="
                group flex
                min-h-[310px]
                flex-col
                rounded-[12px]
                border border-[#29323c]
                bg-[#090f16]
                px-6 py-6
                transition duration-300

                hover:-translate-y-1
                hover:border-[#49c8f2]/60
                hover:bg-[#0b121a]

                sm:min-h-[325px]
                sm:px-7

                lg:min-h-[340px]
                lg:px-6
                lg:py-6

                xl:min-h-[355px]
                xl:px-7
              "
            >
              {/* Número e marcador */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[27px]
                    font-normal
                    leading-none
                    tracking-[-0.04em]
                    text-[#49c8f2]

                    sm:text-[28px]

                    lg:text-[29px]
                  "
                >
                  {pillar.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-3 w-3
                    rounded-full
                    bg-[#49c8f2]
                    transition duration-300

                    group-hover:scale-125
                    group-hover:shadow-[0_0_18px_rgba(73,200,242,0.55)]
                  "
                />
              </div>

              {/* Conteúdo */}
              <div
                className="
                  flex flex-1
                  flex-col
                  pt-9

                  sm:pt-10

                  lg:pt-9

                  xl:pt-10
                "
              >
                <h3
                  className="
                    min-h-[52px]
                    text-[19px]
                    font-bold
                    leading-[1.3]
                    tracking-[-0.025em]
                    text-white

                    sm:text-[20px]

                    lg:text-[18px]

                    xl:text-[19px]
                  "
                >
                    {t(pillar.titleKey)}
                </h3>

                <p
                  className="
                    mt-4
                    text-[16px]
                    leading-[1.55]
                    text-[#7181a4]

                    sm:text-[17px]

                    lg:text-[15px]
                    lg:leading-[1.6]

                    xl:text-[16px]
                  "
                >
                    {t(pillar.descriptionKey)}
                </p>
              </div>

              {/* Rodapé do card */}
              <div
                className="
                  mt-6
                  border-t border-[#2a323c]
                  pt-5
                "
              >
                <span
                  className="
                    text-[12px]
                    font-medium
                    leading-none
                    tracking-[0.01em]
                    text-[#7181a4]

                    sm:text-[13px]
                  "
                >
                  {t(pillar.footerKey)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferencesSection;
