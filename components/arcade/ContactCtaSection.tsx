"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/traducaoButtons";

export default function ContactCtaSection() {
  const { t } = useTranslation();
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s9.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#101117]/82" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,17,23,.94)_0%,rgba(16,17,23,.72)_45%,rgba(16,17,23,.94)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[430px] w-[min(1320px,92%)] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-title text-[38px] font-medium leading-tight text-white md:text-[56px] lg:text-[52px]">
            {t("arcade.contactCta.heading")}
          </h2>

          <p className="mx-auto mt-7 max-w-[1180px] font-body text-[22px] font-medium leading-[1.18] text-white md:text-[32px] lg:text-[28px]">
            {t("arcade.contactCta.description.beforeHighlight")}
            <span className="text-[#FA3E22]">
              {t("arcade.contactCta.description.highlight")}
            </span>
          </p>

          <div className="mt-20 md:mt-24">
            <h3 className="font-title text-[34px] font-medium leading-tight text-[#FA3E22] md:text-[52px] lg:text-[42px]">
              ARCADE
            </h3>

            <p className="mt-2 font-body text-[22px] font-medium leading-tight text-white md:text-[32px] lg:text-[28px]">
              {t("arcade.contactCta.closing")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
