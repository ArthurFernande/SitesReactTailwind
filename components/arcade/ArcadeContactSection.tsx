"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ArcadeLeadForm from "./ArcadeForm";
import { useTranslation } from "@/components/traducaoButtons";

export default function ArcadeContactSection() {
  const { t } = useTranslation();
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s8.jpeg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#101117]/88" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,23,.96)_0%,rgba(16,17,23,.88)_42%,rgba(16,17,23,.72)_100%)]" />

      <div className="relative z-10 mx-auto grid w-[min(1320px,92%)] items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="font-title text-[38px] font-medium leading-[0.98] md:text-[56px] lg:text-[52px]">
            <span className="block text-white">{t("arcade.contact.heading.line1")}</span>
            <span className="block text-white">{t("arcade.contact.heading.line2")}</span>
            <span className="block text-[#FA3E22]">{t("arcade.contact.heading.line3")}</span>
            <span className="block text-[#FA3E22]">{t("arcade.contact.heading.line4")}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-[640px] lg:mx-0 lg:ml-auto"
        >
          <ArcadeLeadForm />
        </motion.div>
      </div>
    </section>
  );
}
