import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type ProductCardProps = {
  title: string;
  category: string;
  description: string;
  href?: string;

  imageSrc?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoScale?: number;

  placeholderColors?: [string, string];
};

export function ProductCard({
  title,
  category,
  description,
  href = "#",
  imageSrc,
  logoSrc,
  logoAlt,
  logoScale = 1,
  placeholderColors = ["#0d1f2b", "#121827"],
}: ProductCardProps) {
  const isExternalLink =
    href.startsWith("http://") || href.startsWith("https://");

  const normalizedLogoScale = Math.min(
    Math.max(logoScale, 0.5),
    3,
  );

  return (
    <article
      className="
        group/card flex h-full flex-col overflow-hidden
        rounded-[12px]
        border border-[#29323c]
        bg-[#080e15]
        transition duration-300

        hover:-translate-y-1
        hover:border-[#49c8f2]/60
        hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]
      "
    >
      {/* Imagem do produto */}
      <div
        className="
          relative mx-[10px] mt-[10px]
          aspect-[1.95/1]
          overflow-hidden
          rounded-[9px]
          border border-[#29323c]
        "
      >
        {/* Placeholder */}
        {!imageSrc && (
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  circle at 50% 45%,
                  ${placeholderColors[0]} 0%,
                  ${placeholderColors[1]} 58%,
                  #070c12 100%
                )
              `,
            }}
          />
        )}

        {/* Decoração do placeholder */}
        {!imageSrc && (
          <>
            <div
              aria-hidden="true"
              className="
                absolute inset-0 opacity-35
                [background-image:radial-gradient(circle,rgba(127,141,255,0.65)_1.5px,transparent_1.5px)]
                [background-size:34px_34px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute left-1/2 top-1/2
                h-[52%] w-[52%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border border-[#49c8f2]/20
                shadow-[0_0_70px_rgba(73,200,242,0.18)]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute bottom-[18%] right-[12%]
                h-[10px] w-[35%]
                rounded-full
                bg-[#49c8f2]/30
              "
            />
          </>
        )}

        {/* Imagem real do produto */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`Interface da plataforma ${title}`}
            fill
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 50vw,
              33vw
            "
            className="
              object-cover object-center
              transition-transform duration-500
              group-hover/card:scale-[1.035]
            "
          />
        )}

        {/* Camada de contraste */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#05090e]/55
            via-transparent
            to-[#05090e]/10
          "
        />

        {/* Logo */}
        {logoSrc && (
          <div
            className="
              pointer-events-none
              absolute left-5 top-4 z-10
              flex h-[58px] w-[210px]
              items-center
            "
          >
            <div
              className="relative h-full w-full"
              style={{
                transform: `scale(${normalizedLogoScale})`,
                transformOrigin: "left center",
              }}
            >
              <Image
                src={logoSrc}
                alt={logoAlt ?? `Logo ${title}`}
                fill
                sizes="210px"
                className="
                  object-contain
                  object-left
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]
                "
              />
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6">
        <div className="flex items-start justify-between gap-5">
          <h3
            className="
              text-[19px]
              font-bold
              leading-[1.25]
              tracking-[-0.025em]
              text-white
              transition-colors duration-300

              group-hover/card:text-[#49c8f2]

              lg:text-[20px]
            "
          >
            {title}
          </h3>

          <span
            className="
              max-w-[48%]
              pt-1
              text-right
              text-[11px]
              font-medium uppercase
              leading-[1.35]
              text-[#6e7990]

              sm:text-[12px]
            "
          >
            {category}
          </span>
        </div>

        <p
          className="
            mt-5 flex-1
            text-[15px]
            leading-[1.55]
            text-[#7c879e]

            sm:text-[16px]
          "
        >
          {description}
        </p>

        {/* Rodapé */}
        <div
          className="
            mt-5 flex
            items-center
            justify-between
            border-t border-[#596270]
            pt-5
          "
        >
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="
                h-[10px] w-[10px]
                shrink-0
                rounded-full
                bg-[#49c8f2]
                shadow-[0_0_16px_rgba(73,200,242,0.45)]
              "
            />

            <span className="text-[13px] font-medium text-[#778299]">
              Em operação
            </span>
          </div>

          {/* Somente este elemento redireciona */}
          <a
            href={href}
            aria-label={`Conhecer ${title}`}
            target={isExternalLink ? "_blank" : undefined}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="
              group/link inline-flex items-center gap-2
              rounded-md
              text-[13px]
              font-semibold
              text-white
              transition-colors duration-300

              hover:text-[#49c8f2]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#49c8f2]
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[#080e15]
            "
          >
            Conhecer

            <ArrowRight
              size={15}
              strokeWidth={2.4}
              className="
                transition-transform duration-300
                group-hover/link:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;