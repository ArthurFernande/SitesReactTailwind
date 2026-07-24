"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeDollarSign, BadgeX, Cable, Rocket } from "lucide-react";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const items = [
  {
    icon: BadgeDollarSign,
    textKey: "arcade.start.item1",
  },
  {
    icon: BadgeX,
    textKey: "arcade.start.item2",
  },
  {
    icon: Cable,
    textKey: "arcade.start.item3",
  },
  {
    icon: Rocket,
    textKey: "arcade.start.item4",
  },
] satisfies ReadonlyArray<{ icon: typeof BadgeDollarSign; textKey: TranslationKey }>;

export default function StartFastSection() {
  const { t } = useTranslation();
  return (
    <section
      id="inicio-rapido"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s6.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#101117]/78" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,17,23,0.88)_0%,rgba(16,17,23,0.66)_45%,rgba(16,17,23,0.9)_100%)]" />

      <div className="relative z-10 mx-auto w-[min(1180px,92%)] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="font-title text-[36px] font-medium leading-tight md:text-[52px] lg:text-[42px]"
        >
          <span className="block text-white">{t("arcade.start.heading.line1")}</span>
          <span className="block text-[#FA3E22]">{t("arcade.start.heading.line2")}</span>
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-[980px] grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:mt-20">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.textKey}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-[96px] items-center justify-center rounded-full bg-[#7B2E23] shadow-[0_0_30px_rgba(250,62,34,0.18)] md:size-[112px]">
                  <Icon size={54} strokeWidth={2} className="text-[#FA3E22]" />
                </div>

                <strong className="mt-5 max-w-[210px] font-body text-[16px] font-extrabold leading-[1.35] text-white md:text-[19px]">
                  {t(item.textKey)}
                </strong>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
