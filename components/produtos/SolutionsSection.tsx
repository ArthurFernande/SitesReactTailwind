"use client";

import { Space_Grotesk } from "next/font/google";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

import {
  ProductCard,
  type ProductCardProps,
} from "./ProductCard";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type ProductDefinition = Omit<ProductCardProps, "category" | "description"> & {
  categoryKey: TranslationKey;
  descriptionKey: TranslationKey;
};

const products: ProductDefinition[] = [
  {
    title: "ARCADE",
    categoryKey: "products.solutions.arcade.category",
    descriptionKey: "products.solutions.arcade.description",

    imageSrc: "/assets/imgs/produtos/arcade-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-arcade.png",
    logoAlt: "Logo Arcade",
    logoScale: 0.7,

    href: "https://gtech.uy/arcade/",
  },
  {
    title: "Global Gaming ERP",
    categoryKey: "products.solutions.globalGaming.category",
    descriptionKey: "products.solutions.globalGaming.description",

    imageSrc: "/assets/imgs/produtos/globalgaming-area.jpeg",

    href: "https://gtech.uy/global-gaming-erp/",
  },
  {
    title: "Gaming Legacy ERP",
    categoryKey: "products.solutions.legacy.category",
    descriptionKey: "products.solutions.legacy.description",

    imageSrc: "/assets/imgs/produtos/gaminglegacy-area.jpeg",

    href: "https://gtech.uy/gaming-legacy-erp/",
  },
  {
    title: "VAPT",
    categoryKey: "products.solutions.vapt.category",
    descriptionKey: "products.solutions.vapt.description",

    imageSrc: "/assets/imgs/produtos/vapt-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-vapt.webp",
    logoAlt: "Logo VAPT",
    logoScale: 2.4,

    href: "https://vapt.site/",
  },
  {
    title: "XAMA IN BOX",
    categoryKey: "products.solutions.xama.category",
    descriptionKey: "products.solutions.xama.description",

    imageSrc: "/assets/imgs/produtos/xama-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-xama.webp",
    logoAlt: "Logo Xama Inbox",
    logoScale: 2.2,

    href: "https://xama.pro/xama-in-box/blog/",
  },
  {
    title: "FligPix",
    categoryKey: "products.solutions.fligpix.category",
    descriptionKey: "products.solutions.fligpix.description",

    imageSrc: "/assets/imgs/produtos/fligpix-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-fligpix.png",
    logoAlt: "Logo FligPix",
    logoScale: 0.7,

    href: "https://fligpix.com.br/",
  },
  {
    title: "Elevex",
    categoryKey: "products.solutions.elevex.category",
    descriptionKey: "products.solutions.elevex.description",

    imageSrc: "/assets/imgs/produtos/elevex-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-elevex.webp",
    logoAlt: "Logo Elevex",
    logoScale: 2.5,

    href: "https://elevex.pro/",
  },
  {
    title: "Solarmaker",
    categoryKey: "products.solutions.solarmaker.category",
    descriptionKey: "products.solutions.solarmaker.description",

    imageSrc: "/assets/imgs/produtos/solarMaker-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-solarmaker.webp",
    logoAlt: "Logo Solarmaker",
    logoScale: 1.8,

    href: "https://solarmaker.com.br/",
  },
  {
    title: "Startin",
    categoryKey: "products.solutions.startin.category",
    descriptionKey: "products.solutions.startin.description",

    imageSrc: "/assets/imgs/produtos/startin-area.jpeg",
    logoSrc: "/assets/imgs/produtos/logo-startin.webp",
    logoAlt: "Logo Startin",
    logoScale: 1.8,

    href: "https://startin.pro/",
  },
];

export function SolutionsSection() {
  const { t } = useTranslation();
  return (
    <section
      id="portfolio"
      className={`
        ${spaceGrotesk.className}
        scroll-mt-[110px]
        overflow-hidden
        bg-[#060b11]
        text-white
      `}
    >
      <div
        className="
          mx-auto
          w-[calc(100%-32px)]
          max-w-[1320px]
          py-16

          sm:w-[calc(100%-56px)]
          sm:py-[72px]

          md:w-[calc(100%-80px)]
          md:py-20

          lg:w-[calc(100%-144px)]
          lg:py-[clamp(72px,8vh,96px)]

          xl:w-[calc(100%-176px)]
        "
      >
        {/* Cabeçalho */}
        <div
          className="
            grid items-end gap-7

            md:gap-9

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-14

            xl:gap-20
          "
        >
          <h2
            className="
              max-w-[570px]
              text-[38px]
              font-medium
              leading-[1]
              tracking-[-0.045em]

              sm:text-[44px]
              md:text-[50px]
              lg:text-[54px]
              xl:text-[58px]
            "
          >
            <span>{t("products.solutions.heading.beforeHighlight")}</span>

            <span className="text-[#49c8f2]">
              {t("products.solutions.heading.highlight")}
            </span>
          </h2>

          <p
            className="
              max-w-[570px]
              text-[16px]
              leading-[1.6]
              text-[#7181a4]

              sm:text-[17px]
              md:text-[18px]

              lg:justify-self-end
              lg:pb-1
              lg:text-[19px]

              xl:text-[20px]
            "
          >
            {t("products.solutions.description")}
          </p>
        </div>

        {/* Cards dos produtos */}
        <div
          className="
            mt-11
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:mt-14
            lg:grid-cols-3
            lg:gap-4

            xl:mt-16
            xl:gap-5
          "
        >
          {products.map(({ categoryKey, descriptionKey, ...product }) => (
            <ProductCard
              key={product.title}
              {...product}
              category={t(categoryKey)}
              description={t(descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
