"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Headset, MonitorCog, Network, RefreshCcw } from "lucide-react";
import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";

const items = [
  {
    icon: Headset,
    textKey: "arcade.delivery.item1",
  },
  {
    icon: MonitorCog,
    textKey: "arcade.delivery.item2",
  },
  {
    icon: Network,
    textKey: "arcade.delivery.item3",
  },
  {
    icon: RefreshCcw,
    textKey: "arcade.delivery.item4",
  },
] satisfies ReadonlyArray<{ icon: typeof Headset; textKey: TranslationKey }>;

export default function GTechDeliverySection() {
  const { t } = useTranslation();
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s7.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#101117]/98" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,23,.995)_0%,rgba(16,17,23,.97)_35%,rgba(16,17,23,.90)_60%,rgba(16,17,23,.985)_100%)]" />{" "}
      <div className="relative z-10 mx-auto grid w-[min(1320px,92%)] items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <Image
            src="/assets/imgs/arcade/w-2.png"
            alt=""
            width={760}
            height={760}
            className="mx-auto w-full max-w-[620px] object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h2 className="font-title text-[38px] font-medium leading-tight md:text-[56px] lg:text-[46px]">
            <span className="block text-white">{t("arcade.delivery.heading.line1")}</span>
            <span className="block text-[#FA3E22]">{t("arcade.delivery.heading.line2")}</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[560px] font-body text-[20px] font-medium leading-[1.55] text-white md:text-[24px] lg:mx-0 lg:text-[22px]">
            {t("arcade.delivery.description.beforeHighlight")}
            <span className="text-[#FA3E22]">
              {t("arcade.delivery.description.highlight")}
            </span>
          </p>

          <div className="mt-10 space-y-8">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.textKey}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 text-left"
                >
                  <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full bg-[#7B2E23] shadow-[0_0_30px_rgba(250,62,34,0.18)] md:h-[96px] md:w-[96px]">
                    <Icon
                      size={44}
                      strokeWidth={2}
                      className="text-[#FA3E22]"
                    />
                  </div>

                  <p className="font-body text-[18px] font-bold leading-snug text-white md:text-[22px] lg:text-[19px]">
                    {t(item.textKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
