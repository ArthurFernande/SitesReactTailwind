"use client";

import Image from "next/image";

import {
  BarChart3,
  CloudCog,
  Headphones,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Trophy,
  WalletCards,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const assetsPath = "/assets/imgs/form-contato";

type Provider = {
  image: string;
  alt: string;
  className?: string;
};

type ProductCard = {
  image: string;
  alt: string;
  title: string;
  highlightedTitle: string;
  description: string;
  providers?: Provider[];
  footerImage?: string;
  footerImageAlt?: string;
};

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const productCards: ProductCard[] = [
  {
    image: `${assetsPath}/cassino.png`,
    alt: "Jogos de cassino disponíveis na plataforma",
    title: "Mais de 3.000 jogos",
    highlightedTitle: "de cassino",
    description:
      "Os melhores provedores do mercado com slots, cassino ao vivo, crash, roleta, blackjack.",
    providers: [
      {
        image: `${assetsPath}/pragmatic-play-icon.png`,
        alt: "Pragmatic Play",
        className: "h-[32px] w-auto",
      },
      {
        image: `${assetsPath}/Evolution.png`,
        alt: "Evolution",
        className: "h-[24px] w-auto",
      },
      {
        image: `${assetsPath}/PG.png`,
        alt: "PG Soft",
        className: "h-[31px] w-auto",
      },
    ],
  },
  {
    image: `${assetsPath}/GATEWAY.png`,
    alt: "Gateway de pagamentos com criptomoedas",
    title: "Gateway de pagamento",
    highlightedTitle: "com cripto integrado",
    description:
      "Pagamentos rápidos, seguros e descentralizados com as melhores criptomoedas do mercado.",
    providers: [
      {
        image: `${assetsPath}/icon01.png`,
        alt: "USDT TRC20",
        className: "h-[38px] w-auto",
      },
      {
        image: `${assetsPath}/icon02.png`,
        alt: "Bitcoin",
        className: "h-[38px] w-auto",
      },
      {
        image: `${assetsPath}/icon03.png`,
        alt: "Ethereum",
        className: "h-[38px] w-auto",
      },
      {
        image: `${assetsPath}/icon04.png`,
        alt: "BNB",
        className: "h-[38px] w-auto",
      },
      {
        image: `${assetsPath}/icon05.png`,
        alt: "USDC",
        className: "h-[38px] w-auto",
      },
    ],
  },
  {
    image: `${assetsPath}/esportivo.png`,
    alt: "API de esportes Genius Sports",
    title: "API de esportes da",
    highlightedTitle: "Genius Sports",
    description:
      "A API mais segura e completa do mundo com os melhores mercados e odds competitivas.",
    footerImage: `${assetsPath}/genius.png`,
    footerImageAlt: "Genius Sports",
  },
  {
    image: `${assetsPath}/jogo-esportivo.png`,
    alt: "Sistema de acompanhamento de futebol ao vivo",
    title: "Jogos de futebol",
    highlightedTitle: "ao vivo com campinho",
    description:
      "Acompanhe cada lance com gráficos ao vivo e estatísticas em tempo real para uma experiência imersiva.",
  },
  {
    image: `${assetsPath}/INFRAESTRUTURA.png`,
    alt: "Infraestrutura de banco de dados segura",
    title: "Banco de dados de",
    highlightedTitle: "alta performance",
    description:
      "Infraestrutura robusta que suporta milhares de jogadores simultaneamente com máxima estabilidade e velocidade.",
  },
];

const primaryFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Estrutura de segurança avançada",
    description: "Proteção completa contra ataques e invasões.",
  },
  {
    icon: LockKeyhole,
    title: "Acesso de duas etapas",
    description: "Mais segurança para sua conta e seus dados.",
  },
  {
    icon: CloudCog,
    title: "Backup diário automático",
    description: "Seus dados sempre protegidos e recuperáveis.",
  },
  {
    icon: WalletCards,
    title: "Uptime de 99,9%",
    description: "Plataforma sempre disponível para seus usuários.",
  },
  {
    icon: Smartphone,
    title: "Plataforma 100% responsiva",
    description: "Experiência perfeita em desktop, tablet e mobile.",
  },
];

const secondaryFeatures: Feature[] = [
  {
    icon: Headphones,
    title: "Suporte 24/7 especializado",
    description: "Atendimento rápido e humanizado todos os dias.",
  },
  {
    icon: BarChart3,
    title: "Relatórios avançados",
    description: "Métricas detalhadas para maximizar seus resultados.",
  },
  {
    icon: MonitorSmartphone,
    title: "Saques rápidos e automáticos",
    description: "Processos ágeis para mais satisfação dos jogadores.",
  },
  {
    icon: Trophy,
    title: "Programa de fidelidade",
    description: "Ferramentas para reter jogadores e aumentar lucratividade.",
  },
];

export function OperationalFeaturesSection() {
  return (
    <section
      id="recursos"
      className="overflow-hidden bg-black py-14 text-white md:py-16 lg:py-20"
    >
      <div className="mx-auto w-[min(1540px,92%)]">
        {/* SWIPER — SOMENTE MOBILE */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.08}
            spaceBetween={14}
            centeredSlides={false}
            grabCursor
            speed={750}
            loop
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="
              operational-cards-swiper
              !overflow-visible
              !pb-12
            "
          >
            {productCards.map((card) => (
              <SwiperSlide key={card.title} className="!h-auto">
                <ProductCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* GRID — TABLET E DESKTOP */}
        <div
          className="
            hidden

            md:grid
            md:grid-cols-2
            md:gap-5

            lg:grid-cols-3

            xl:grid-cols-5
          "
        >
          {productCards.map((card) => (
            <ProductCard key={card.title} card={card} />
          ))}
        </div>

        {/* PRIMEIRA FAIXA */}
        <div
          className="
            mt-8
            overflow-hidden
            rounded-[12px]
            border
            border-[#7d81ed]
            bg-[#6668c8]

            md:mt-7
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
            {primaryFeatures.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                feature={feature}
                showDesktopDivider={index !== primaryFeatures.length - 1}
              />
            ))}
          </div>
        </div>

        {/* SEGUNDA FAIXA */}
        <div
          className="
            mt-5
            overflow-hidden
            rounded-[12px]
            border
            border-[#7d81ed]
            bg-[#6668c8]
          "
        >
          <div
            className="
              grid
              grid-cols-1

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {secondaryFeatures.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                feature={feature}
                showDesktopDivider={index !== secondaryFeatures.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ProductCardProps = {
  card: ProductCard;
};

function ProductCard({ card }: ProductCardProps) {
  return (
    <article
      className="
        flex
        h-full
        min-h-[590px]
        flex-col
        overflow-hidden
        rounded-[14px]
        border
        border-[#666bdc]
        bg-[#17181d]
        p-[10px]

        sm:min-h-[610px]

        md:min-h-[500px]

        xl:min-h-[465px]
      "
    >
      <div
        className="
          relative
          aspect-[0.95]
          w-full
          overflow-hidden
          rounded-[7px]
          bg-[#090a0e]

          md:aspect-[1/1.04]
        "
      >
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="
            (max-width: 767px) 86vw,
            (max-width: 1023px) 46vw,
            (max-width: 1279px) 30vw,
            18vw
          "
          className="object-cover"
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[50%]
            bg-gradient-to-t
            from-[#111217]
            via-[#111217]/80
            to-transparent
          "
        />

        <h3
          className="
            absolute
            bottom-5
            left-5
            right-4
            font-mono
            text-[17px]
            font-black
            uppercase
            leading-[1.15]
            tracking-[-0.025em]
            text-white

            md:bottom-4
            md:left-4
            md:text-[15px]

            xl:text-[14px]

            2xl:text-[16px]
          "
        >
          {card.title}

          <br />

          <span className="text-[#8d8fff]">{card.highlightedTitle}</span>
        </h3>
      </div>

      <p
        className="
          mt-4
          font-[Arial]
          text-[17px]
          font-semibold
          leading-[1.75]
          text-white

          md:mt-3
          md:text-[14px]
          md:leading-[1.7]

          xl:text-[13px]

          2xl:text-[14px]
        "
      >
        {card.description}
      </p>

      {card.providers && (
        <div
          className="
            mt-auto
            flex
            min-h-[70px]
            items-center
            justify-around
            gap-3
            pt-5

            md:min-h-[55px]
            md:gap-2
            md:pt-4
          "
        >
          {card.providers.map((provider) => (
            <div
              key={provider.alt}
              className="
                relative
                flex
                min-w-0
                flex-1
                items-center
                justify-center
              "
            >
              <Image
                src={provider.image}
                alt={provider.alt}
                width={95}
                height={50}
                className={`
                  max-w-full
                  object-contain
                  ${provider.className ?? ""}
                `}
              />
            </div>
          ))}
        </div>
      )}

      {card.footerImage && (
        <div
          className="
            relative
            mt-auto
            min-h-[70px]
            w-full
            pt-4
          "
        >
          <Image
            src={card.footerImage}
            alt={card.footerImageAlt ?? ""}
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
      )}
    </article>
  );
}

type FeatureItemProps = {
  feature: Feature;
  showDesktopDivider: boolean;
};

function FeatureItem({ feature, showDesktopDivider }: FeatureItemProps) {
  const Icon = feature.icon;

  return (
    <article
      className={`
        relative
        flex
        min-h-[128px]
        flex-col
        justify-center
        border-b
        border-[#9698df]
        px-5
        py-5

        last:border-b-0

        sm:[&:nth-child(odd)]:border-r

        lg:border-b-0
        lg:[&:nth-child(odd)]:border-r-0

        ${
          showDesktopDivider
            ? "lg:border-r lg:border-[#9698df]"
            : "lg:border-r-0"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Icon
          aria-hidden
          strokeWidth={1.8}
          className="
            h-8
            w-8
            shrink-0
            text-[#ffd400]
          "
        />

        <h3
          className="
            font-[Arial]
            text-[12px]
            font-bold
            uppercase
            leading-[1.25]
            text-white

            xl:text-[11px]

            2xl:text-[12px]
          "
        >
          {feature.title}
        </h3>
      </div>

      <p
        className="
          mt-5
          font-[Arial]
          text-[12px]
          font-medium
          leading-[1.5]
          text-white

          xl:text-[11px]

          2xl:text-[12px]
        "
      >
        {feature.description}
      </p>
    </article>
  );
}