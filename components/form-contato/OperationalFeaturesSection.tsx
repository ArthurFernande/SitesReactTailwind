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
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

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
  altKey: TranslationKey;
  titleKey: TranslationKey;
  highlightedTitleKey: TranslationKey;
  descriptionKey: TranslationKey;
  providers?: Provider[];
  footerImage?: string;
  footerImageAlt?: string;
};

type Feature = {
  icon: LucideIcon;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
};

const productCards: ProductCard[] = [
  {
    image: `${assetsPath}/cassino.png`,
    altKey: "contact.operational.casino.alt",
    titleKey: "contact.operational.casino.title",
    highlightedTitleKey: "contact.operational.casino.highlight",
    descriptionKey: "contact.operational.casino.description",
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
    altKey: "contact.operational.gateway.alt",
    titleKey: "contact.operational.gateway.title",
    highlightedTitleKey: "contact.operational.gateway.highlight",
    descriptionKey: "contact.operational.gateway.description",
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
    altKey: "contact.operational.sports.alt",
    titleKey: "contact.operational.sports.title",
    highlightedTitleKey: "contact.operational.sports.highlight",
    descriptionKey: "contact.operational.sports.description",
    footerImage: `${assetsPath}/genius.png`,
    footerImageAlt: "Genius Sports",
  },
  {
    image: `${assetsPath}/jogo-esportivo.png`,
    altKey: "contact.operational.live.alt",
    titleKey: "contact.operational.live.title",
    highlightedTitleKey: "contact.operational.live.highlight",
    descriptionKey: "contact.operational.live.description",
  },
  {
    image: `${assetsPath}/INFRAESTRUTURA.png`,
    altKey: "contact.operational.database.alt",
    titleKey: "contact.operational.database.title",
    highlightedTitleKey: "contact.operational.database.highlight",
    descriptionKey: "contact.operational.database.description",
  },
];

const primaryFeatures: Feature[] = [
  {
    icon: ShieldCheck,
    titleKey: "contact.operational.security.title",
    descriptionKey: "contact.operational.security.description",
  },
  {
    icon: LockKeyhole,
    titleKey: "contact.operational.twoFactor.title",
    descriptionKey: "contact.operational.twoFactor.description",
  },
  {
    icon: CloudCog,
    titleKey: "contact.operational.backup.title",
    descriptionKey: "contact.operational.backup.description",
  },
  {
    icon: WalletCards,
    titleKey: "contact.operational.uptime.title",
    descriptionKey: "contact.operational.uptime.description",
  },
  {
    icon: Smartphone,
    titleKey: "contact.operational.responsive.title",
    descriptionKey: "contact.operational.responsive.description",
  },
];

const secondaryFeatures: Feature[] = [
  {
    icon: Headphones,
    titleKey: "contact.operational.support.title",
    descriptionKey: "contact.operational.support.description",
  },
  {
    icon: BarChart3,
    titleKey: "contact.operational.reports.title",
    descriptionKey: "contact.operational.reports.description",
  },
  {
    icon: MonitorSmartphone,
    titleKey: "contact.operational.withdrawals.title",
    descriptionKey: "contact.operational.withdrawals.description",
  },
  {
    icon: Trophy,
    titleKey: "contact.operational.loyalty.title",
    descriptionKey: "contact.operational.loyalty.description",
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
              <SwiperSlide key={card.titleKey} className="!h-auto">
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
            <ProductCard key={card.titleKey} card={card} />
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
                key={feature.titleKey}
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
                key={feature.titleKey}
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
  const { t } = useTranslation();
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
          alt={t(card.altKey)}
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
          {t(card.titleKey)}

          <br />

          <span className="text-[#8d8fff]">{t(card.highlightedTitleKey)}</span>
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
        {t(card.descriptionKey)}
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
  const { t } = useTranslation();
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
          {t(feature.titleKey)}
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
        {t(feature.descriptionKey)}
      </p>
    </article>
  );
}
