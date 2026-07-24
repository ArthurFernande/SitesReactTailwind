"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const cards = [
  {
    image: "/assets/imgs/arcade/p-1-scaled.jpg",
    titleKey: "arcade.value.card1.title",
    highlightKey: "arcade.value.card1.highlight",
  },
  {
    image: "/assets/imgs/arcade/p-2-scaled.jpg",
    titleKey: "arcade.value.card2.title",
    highlightKey: "arcade.value.card2.highlight",
  },
  {
    image: "/assets/imgs/arcade/p-3-scaled.jpg",
    titleKey: "arcade.value.card3.title",
    highlightKey: "arcade.value.card3.highlight",
  },
  {
    image: "/assets/imgs/arcade/p-4-scaled.jpg",
    titleKey: "arcade.value.card4.title",
    highlightKey: "arcade.value.card4.highlight",
  },
] satisfies ReadonlyArray<{ image: string; titleKey: TranslationKey; highlightKey: TranslationKey }>;

export default function ValueSection() {
  const { t } = useTranslation();
  return (
    <section
      id="valor"
      className="relative overflow-hidden bg-[#121319] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s3.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#121319]/82" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,25,0.92)_0%,rgba(18,19,25,0.72)_48%,rgba(18,19,25,0.94)_100%)]" />

      <div className="relative z-10 mx-auto w-[min(1180px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <h2 className="font-title text-[36px] font-medium leading-tight md:text-[52px] lg:text-[42px]">
            <span className="text-white">{t("arcade.value.heading.line1")}</span>
            <span className="text-[#FA3E22]">{t("arcade.value.heading.line2")}</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[1080px] font-body text-[20px] font-medium leading-[1.25] text-white md:text-[28px] lg:text-[23px]">
            {t("arcade.value.description.beforeHighlight")}
            <span className="text-[#FA3E22]">
              {t("arcade.value.description.highlight")}
            </span>
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16 lg:gap-9">
          {cards.map((card, index) => (
            <motion.article
              key={card.highlightKey}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.25 }}
              className="group relative h-[230px] overflow-hidden rounded-[4px] bg-black md:h-[250px] lg:h-[245px]"
            >
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0.88)_100%)]" />

              <div className="absolute bottom-6 left-5 right-5">
                <h3 className="font-title text-[20px] font-medium leading-[1.08] text-white md:text-[22px]">
                  <span className="block">{t(card.titleKey)}</span>
                  <span className="block text-[#FA3E22]">{t(card.highlightKey)}</span>
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
