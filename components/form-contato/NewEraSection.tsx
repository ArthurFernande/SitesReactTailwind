"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import {
  ArrowRight,
  Cpu,
  CreditCard,
  Headphones,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const vipImage = "/assets/imgs/form-contato/vip.jpeg";

type Feature = {
  icon: LucideIcon;
  titleKeys: readonly TranslationKey[];
  descriptionKey: TranslationKey;
};

const features: Feature[] = [
  {
    icon: Cpu,
    titleKeys: ["contact.newEra.feature.tech.1", "contact.newEra.feature.tech.2"],
    descriptionKey: "contact.newEra.feature.tech.description",
  },
  {
    icon: CreditCard,
    titleKeys: ["contact.newEra.feature.payments.1", "contact.newEra.feature.payments.2"],
    descriptionKey: "contact.newEra.feature.payments.description",
  },
  {
    icon: Headphones,
    titleKeys: ["contact.newEra.feature.support.1", "contact.newEra.feature.support.2"],
    descriptionKey: "contact.newEra.feature.support.description",
  },
  {
    icon: ShieldCheck,
    titleKeys: ["contact.newEra.feature.privacy.1", "contact.newEra.feature.privacy.2"],
    descriptionKey: "contact.newEra.feature.privacy.description",
  },
  {
    icon: LockKeyhole,
    titleKeys: ["contact.newEra.feature.security.1", "contact.newEra.feature.security.2"],
    descriptionKey: "contact.newEra.feature.security.description",
  },
];

export function NewEraSection() {
  const { t } = useTranslation();
  function scrollToForm() {
    document.getElementById("hero-contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <section
      id="nova-era"
      className="
    overflow-hidden
    bg-black
    pb-12
    pt-4
    text-white

    md:pb-14
    md:pt-6

    lg:pb-16
    lg:pt-8
  "
    >
      <div className="mx-auto w-[min(1540px,92%)]">
        {/* Área superior */}
        <div
          className="
            grid
            items-center
            gap-8

            md:grid-cols-[0.85fr_1.15fr]
            md:gap-10

            lg:grid-cols-[0.8fr_1fr_0.9fr]
            lg:gap-12
          "
        >
          {/* Imagem VIP */}
          <div
            className="
              relative
              mx-auto
              h-[240px]
              w-full
              max-w-[380px]

              sm:h-[290px]
              sm:max-w-[460px]

              md:mx-0
              md:h-[310px]

              lg:h-[330px]
              lg:max-w-[500px]
            "
          >
            <Image
              src={vipImage}
              alt={t("contact.newEra.vipAlt")}
              fill
              priority={false}
              sizes="
                (max-width: 767px) 92vw,
                (max-width: 1023px) 42vw,
                32vw
              "
              className="object-contain"
            />
          </div>

          {/* Conteúdo central */}
          <div className="text-center lg:text-left">
            <h2
              className={`
                ${oswald.className}

                text-[45px]
                font-bold
                uppercase
                leading-[0.9]
                tracking-[-0.02em]

                sm:text-[56px]

                md:text-[58px]

                lg:text-[62px]

                xl:text-[68px]
              `}
            >
              {t("contact.newEra.heading.beforeHighlight")}
              <br />
              <span className="text-[#f4bb00]">{t("contact.newEra.heading.highlight")}</span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[520px]
                font-[Arial]
                text-[17px]
                leading-[1.35]
                text-white

                sm:text-[19px]

                md:text-[18px]

                lg:mx-0
                lg:text-[20px]

                xl:text-[22px]
              "
            >
              {t("contact.newEra.description.line1")}
              <br className="hidden sm:block" />
              {t("contact.newEra.description.line2")}
            </p>
          </div>

          {/* CTA desktop */}
          <div className="hidden justify-end lg:flex">
            <button
              type="button"
              onClick={scrollToForm}
              className="
                group
                flex
                h-[64px]
                w-full
                max-w-[390px]
                items-center
                justify-center
                gap-4
                rounded-xl
                bg-gradient-to-r
                from-[#ff4d4d]
                via-[#dc1618]
                to-[#a90004]
                px-6
                font-[Arial]
                text-[15px]
                font-bold
                uppercase
                shadow-[0_0_24px_rgba(224,23,28,0.42)]
                transition
                duration-300

                hover:scale-[1.02]
                hover:brightness-110

                active:scale-[0.99]

                xl:h-[70px]
                xl:text-[17px]
              "
            >
              {t("contact.hero.cta")}
              <ArrowRight
                aria-hidden
                size={21}
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

        {/* CTA mobile e tablet */}
        <button
          type="button"
          onClick={scrollToForm}
          className="
            group
            mx-auto
            mt-9
            flex
            h-[64px]
            w-full
            max-w-[520px]
            items-center
            justify-center
            gap-4
            rounded-xl
            bg-gradient-to-r
            from-[#ff4d4d]
            via-[#dc1618]
            to-[#a90004]
            px-5
            font-[Arial]
            text-[14px]
            font-bold
            uppercase
            shadow-[0_0_24px_rgba(224,23,28,0.42)]
            transition
            duration-300

            hover:brightness-110
            active:scale-[0.99]

            sm:text-[16px]

            lg:hidden
          "
        >
          {t("contact.hero.cta")}
          <ArrowRight
            aria-hidden
            size={21}
            strokeWidth={3}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

        {/* Recursos */}
        <div
          className="
            mt-12
            overflow-hidden
            rounded-[12px]
            border
            border-[#f4bb00]
            bg-black

            md:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              grid
              grid-cols-1

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.titleKeys.join("-")}
                feature={feature}
                index={index}
                total={features.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  feature: Feature;
  index: number;
  total: number;
};

function FeatureCard({ feature, index, total }: FeatureCardProps) {
  const { t } = useTranslation();
  const Icon = feature.icon;

  return (
    <article
      className={`
        relative
        flex
        min-h-[180px]
        flex-col
        justify-center
        border-b
        border-white/25
        px-6
        py-7

        sm:min-h-[210px]

        ${index % 2 === 0 ? "sm:border-r sm:border-white/25" : ""}

        ${index >= total - 2 ? "sm:border-b-0" : ""}

        lg:min-h-[200px]
        lg:border-b-0
        lg:border-r
        lg:border-white/25

        ${index === total - 1 ? "lg:border-r-0" : ""}
      `}
    >
      <div className="flex items-center gap-5">
        <Icon
          aria-hidden
          strokeWidth={1.7}
          className="
            h-9
            w-9
            shrink-0
            text-[#f4bb00]

            xl:h-10
            xl:w-10
          "
        />

        <h3
          className="
            font-[Arial]
            text-[13px]
            font-bold
            uppercase
            leading-[1.55]
            text-white

            xl:text-[14px]
          "
        >
          {feature.titleKeys.map((lineKey) => (
            <span key={lineKey} className="block">
              {t(lineKey)}
            </span>
          ))}
        </h3>
      </div>

      <p
        className="
          mt-7
          font-[Arial]
          text-[13px]
          font-semibold
          leading-[1.55]
          text-white

          xl:text-[14px]
        "
      >
        {t(feature.descriptionKey)}
      </p>
    </article>
  );
}
