"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/traducaoButtons";

export default function ArcadeSection() {
  const { t } = useTranslation();
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#070B1A] py-20 md:py-24"
    >
      <Image
        src="/assets/imgs/gtech/background-s4.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-45"
      />

      <div className="absolute inset-0 bg-[#070B1A]/65" />

      <div className="relative z-10 mx-auto grid w-[min(1320px,92%)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative order-1 mx-auto h-[260px] w-full max-w-[560px] overflow-hidden rounded-[10px] bg-black shadow-[0_22px_45px_rgba(0,0,0,0.45)] md:h-[380px] md:max-w-[760px] lg:order-2 lg:h-[360px] lg:max-w-[690px]"
        >
          <Image
            src="/assets/imgs/gtech/maquina.jpg"
            alt={t("home.arcade.imageAlt")}
            fill
            sizes="(max-width: 1024px) 92vw, 48vw"
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <h2 className="font-title text-[36px] font-medium leading-tight text-white md:text-[52px] lg:text-[42px]">
            {t("home.arcade.heading.beforeBrand")}<span className="text-[#FA3E22]">ARCADE</span>
          </h2>

          <p className="font-body mt-8 max-w-[620px] text-[21px] leading-[1.55] text-white md:text-[24px] lg:max-w-[650px]">
            {t("home.arcade.description1")}
          </p>

          <p className="font-body mt-8 max-w-[700px] text-[21px] leading-[1.55] text-white md:text-[24px]">
            {t("home.arcade.description2")}
          </p>

          <p className="font-body mt-8 max-w-[700px] text-[21px] leading-[1.55] text-[#FA3E22] md:text-[24px]">
            {t("home.arcade.description3")}
          </p>

          <motion.a
            href="https://gtech.uy/arcade/"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="font-title mx-auto mt-12 flex h-[72px] w-full max-w-[610px] items-center justify-center rounded-full border-[5px] border-[#8EA0FF] bg-[#17181D]/70 text-center text-[16px] font-bold text-white shadow-[0_0_28px_rgba(142,160,255,0.9)] transition hover:bg-[#252741] md:h-[78px] md:text-[21px] lg:mx-0"
          >
            {t("home.arcade.cta")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
