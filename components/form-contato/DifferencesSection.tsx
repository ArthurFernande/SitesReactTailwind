"use client";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { ArrowRight, Crown, Rocket, Trophy, Zap } from "lucide-react";

import type { LucideIcon } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const backgroundImage = "/assets/imgs/form-contato/background03.png";

type DifferenceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const differences: DifferenceItem[] = [
  {
    icon: Zap,
    title: "Experiência em tempo real",
    description:
      "Interface dinâmica com atualização instantânea e interação contínua.",
  },
  {
    icon: Crown,
    title: "Sistema VIP",
    description:
      "Condições exclusivas para os membros mais ativos da comunidade.",
  },
  {
    icon: Rocket,
    title: "Plataforma premium",
    description: "Ambiente moderno, rápido e otimizado para uso mobile.",
  },
  {
    icon: Trophy,
    title: "Eventos especiais",
    description: "Ações e novidades liberadas diariamente para a comunidade.",
  },
];

export function DifferencesSection() {
  function scrollToForm() {
    document.getElementById("hero-contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <section
      id="diferenciais"
      className="
        relative
        isolate
        overflow-hidden
        bg-black
        py-14
        text-white

        md:py-16
        lg:py-20
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

      {/* Camada escura principal */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-20
          bg-black/65

          md:bg-black/60
          lg:bg-black/55
        "
      />

      {/* Gradiente para reforçar a leitura */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-black/55
          via-black/25
          to-black/75
        "
      />

      {/* Brilho discreto no centro */}
      <div
        aria-hidden
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          mx-auto
          h-[45%]
          max-w-[800px]
          bg-[radial-gradient(circle,rgba(232,185,0,0.12)_0%,transparent_70%)]
        "
      />

      <div className="mx-auto w-[min(1540px,92%)]">
        {/* Título */}
        <h2
          className={`
            ${oswald.className}

            text-center
            text-[38px]
            font-bold
            uppercase
            leading-[1]
            tracking-[0.03em]

            sm:text-[46px]
            md:text-[54px]
            lg:text-[60px]
          `}
        >
          Tudo o que faz a <span className="text-[#f4bb00]">diferença</span>
        </h2>

        {/* Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:mt-14
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {differences.map((item) => (
            <DifferenceCard key={item.title} item={item} />
          ))}
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={scrollToForm}
          className="
            group
            mx-auto
            mt-10
            flex
            h-[62px]
            w-full
            max-w-[650px]
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

            md:mt-12
            md:h-[66px]

            lg:max-w-[680px]
          "
        >
          Faça seu cadastro agora!
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
    </section>
  );
}

type DifferenceCardProps = {
  item: DifferenceItem;
};

function DifferenceCard({ item }: DifferenceCardProps) {
  const Icon = item.icon;

  return (
    <article
      className="
        flex
        min-h-[230px]
        flex-col
        rounded-xl
        border
        border-white/[0.04]
        bg-black/75
        px-6
        py-7
        backdrop-blur-[3px]
        transition
        duration-300

        hover:-translate-y-1
        hover:border-[#f4bb00]/40
        hover:bg-black/85
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)]

        sm:min-h-[245px]

        lg:min-h-[250px]
        lg:px-5

        xl:px-7
      "
    >
      <div className="flex items-center gap-4">
        <Icon
          aria-hidden
          strokeWidth={2}
          className="
            h-10
            w-10
            shrink-0
            text-[#f4bb00]

            xl:h-11
            xl:w-11
          "
        />

        <h3
          className={`
            ${oswald.className}

            text-[17px]
            font-semibold
            uppercase
            leading-[1.2]
            tracking-[0.025em]
            text-white

            xl:text-[19px]
          `}
        >
          {item.title}
        </h3>
      </div>

      <p
        className="
          mt-auto
          pt-10
          text-center
          font-[Arial]
          text-[14px]
          font-medium
          leading-[1.55]
          text-white

          sm:text-[15px]

          xl:text-[16px]
        "
      >
        {item.description}
      </p>
    </article>
  );
}
