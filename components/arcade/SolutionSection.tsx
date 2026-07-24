"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  ClipboardList,
  MonitorSmartphone,
  ChartColumn,
} from "lucide-react";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const items = [
  {
    icon: Zap,
    labelKey: "arcade.solution.item1",
  },
  {
    icon: ClipboardList,
    labelKey: "arcade.solution.item2",
  },
  {
    icon: MonitorSmartphone,
    labelKey: "arcade.solution.item3",
  },
  {
    icon: ChartColumn,
    labelKey: "arcade.solution.item4",
  },
] satisfies ReadonlyArray<{ icon: typeof Zap; labelKey: TranslationKey }>;

export default function SolutionSection() {
  const { t } = useTranslation();
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s2.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#101117]/70" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,17,23,0.80)_0%,rgba(16,17,23,0.50)_46%,rgba(16,17,23,0.88)_100%)]" />

      <div className="relative z-10 mx-auto w-[min(1180px,92%)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="font-title text-[36px] font-medium leading-tight md:text-[52px] lg:text-[42px]">
            <span className="block text-white">{t("arcade.solution.heading.line1")}</span>
            <span className="block text-[#FA3E22]">
              {t("arcade.solution.heading.line2")}
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[1040px] font-body text-[22px] font-medium leading-[1.25] text-white md:text-[30px] lg:text-[26px]">
            {t("arcade.solution.description.beforeHighlight")}
            <span className="text-[#FA3E22]">
              {t("arcade.solution.description.highlight")}
            </span>
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 lg:mt-20">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.labelKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.35 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex size-[96px] items-center justify-center rounded-full border border-[#FA3E22]/35 bg-[#FA3E22]/25 backdrop-blur-sm md:size-[112px]">
                  <Icon size={54} strokeWidth={2} className="text-[#FA3E22]" />
                </div>

                <strong className="mt-5 max-w-[210px] font-body text-[16px] font-extrabold leading-[1.35] text-white md:text-[18px] lg:text-[17px]">
                  {t(item.labelKey)}
                </strong>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto mt-16 max-w-[800px] font-body text-[24px] font-medium leading-[1.35] text-white md:text-[32px] lg:text-[28px]"
        >
          <p>{t("arcade.solution.closing.line1")}</p>
          <p className="mt-4 text-[#FA3E22]">
            {t("arcade.solution.closing.line2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
