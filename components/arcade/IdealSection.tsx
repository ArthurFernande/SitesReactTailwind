"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const cards = [
  {
    image: "/assets/imgs/arcade/a-1-scaled.jpg",
    titleKey: "arcade.ideal.card1",
  },
  {
    image: "/assets/imgs/arcade/a-2-scaled.jpg",
    titleKey: "arcade.ideal.card2",
  },
  {
    image: "/assets/imgs/arcade/a-3-scaled.jpg",
    titleKey: "arcade.ideal.card3",
  },
  {
    image: "/assets/imgs/arcade/a-4-scaled.jpg",
    titleKey: "arcade.ideal.card4",
    highlightKey: "arcade.ideal.card4Highlight",
  },
  {
    image: "/assets/imgs/arcade/a-5-scaled.jpg",
    titleKey: "arcade.ideal.card5",
    highlightKey: "arcade.ideal.card5Highlight",
  },
] satisfies ReadonlyArray<{ image: string; titleKey: TranslationKey; highlightKey?: TranslationKey }>;

function Card({
  card,
  index,
}: {
  card: (typeof cards)[number];
  index: number;
}) {
  const { t } = useTranslation();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.25 }}
      className="w-full"
    >
      <div className="group relative h-[210px] overflow-hidden rounded-md bg-black md:h-[230px]">
        <Image
          src={card.image}
          alt={t(card.titleKey)}
          fill
          sizes="(max-width:768px) 92vw, (max-width:1024px) 45vw, 380px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-5 text-center font-title text-[18px] font-medium leading-[1.25] text-white md:text-[22px]">
        <span className="block">{t(card.titleKey)}</span>

        {card.highlightKey && (
          <span className="mt-1 block text-[#FA3E22]">{t(card.highlightKey)}</span>
        )}
      </h3>
    </motion.article>
  );
}

export default function IdealSection() {
  const { t } = useTranslation();
  return (
    <section
      id="ideal"
      className="relative overflow-hidden bg-[#121319] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s4.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#121319]/82" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,25,0.92)_0%,rgba(18,19,25,0.72)_45%,rgba(18,19,25,0.92)_100%)]" />

      <div className="relative z-10 mx-auto w-[min(1220px,92%)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <h2 className="font-title text-[36px] font-medium leading-tight md:text-[52px] lg:text-[42px]">
            <span className="block text-white">{t("arcade.ideal.heading.line1")}</span>
            <span className="block text-[#FA3E22]">{t("arcade.ideal.heading.line2")}</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-6">
          {cards.map((card, index) => (
            <div
              key={card.titleKey}
              className={[
                "w-full",
                "lg:col-span-2",
                index === 3 ? "lg:col-start-2" : "",
                index === 4 ? "lg:col-start-4" : "",
                index === 2
                  ? "md:col-span-2 md:mx-auto md:max-w-[420px] lg:col-span-2 lg:max-w-none"
                  : "",
              ].join(" ")}
            >
              <Card card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
