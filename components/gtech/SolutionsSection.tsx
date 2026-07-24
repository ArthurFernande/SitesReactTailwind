"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const cards = [
  {
    titleKey: "home.solutions.digital.title",
    descriptionKey: "home.solutions.digital.description",
    image: "/assets/imgs/gtech/image01-s2.jpg",
  },
  {
    titleKey: "home.solutions.infrastructure.title",
    descriptionKey: "home.solutions.infrastructure.description",
    image: "/assets/imgs/gtech/image02-s2.jpg",
  },
  {
    titleKey: "home.solutions.whiteLabel.title",
    descriptionKey: "home.solutions.whiteLabel.description",
    image: "/assets/imgs/gtech/image03-s2.jpg",
  },
] satisfies ReadonlyArray<{ titleKey: TranslationKey; descriptionKey: TranslationKey; image: string }>;

export default function SolutionsSection() {
  const { t } = useTranslation();
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-[#17181D] py-20 md:py-24"
    >
      <Image
        src="/assets/imgs/gtech/background-s2.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-35"
      />

      <div className="absolute inset-0 bg-[#17181D]/80" />

      <div className="relative z-10 mx-auto w-[min(1320px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-[1180px] text-center"
        >
          <h2 className="font-title text-[36px] font-medium leading-tight text-white md:text-[52px] lg:text-[42px]">
            {t("home.solutions.heading.line1")}{" "}
            <span className="text-[#FA3E22]">{t("home.solutions.heading.line2")}</span>
          </h2>

          <p className="font-body mx-auto mt-8 max-w-[1120px] text-[21px] leading-[1.55] text-white md:text-[24px]">
            {t("home.solutions.description.line1")}{" "}
            <span className="text-[#FA3E22]">
              {t("home.solutions.description.line2")}
            </span>
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.titleKey}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.25 }}
              className="overflow-hidden rounded-[4px] bg-black shadow-[0_22px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-[230px] w-full">
                <Image
                  src={card.image}
                  alt={t(card.titleKey)}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              </div>

              <div className="flex flex-col px-6 pb-7 pt-0">
                <h3 className="font-title relative z-10 -mt-16 min-h-[88px] text-[25px] font-bold leading-[1.35] text-[#FA3E22] md:min-h-[78px] md:text-[24px]">
                  {t(card.titleKey)}
                </h3>

                <p className="font-body mt-4 text-[21px] leading-[1.45] text-white md:text-[18px]">
                  {t(card.descriptionKey)}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
