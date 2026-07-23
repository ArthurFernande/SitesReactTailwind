"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  Layers,
  RefreshCcw,
  ServerCog,
} from "lucide-react";

const items = [
  {
    icon: Layers,
    text: "Desarrollo y gestión de plataformas",
  },
  {
    icon: ChartNoAxesCombined,
    text: "Soporte técnico y operacional continuo",
  },
  {
    icon: RefreshCcw,
    text: "Actualizaciones, mejoras y evolución constante",
  },
  {
    icon: ServerCog,
    text: "Enfoque total en estabilidad y escalabilidad",
  },
];

export default function PartnerSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#070B1A] py-20 md:py-24">
      <Image
        src="/assets/imgs/gtech/background.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-45"
      />

      <div className="absolute inset-0 bg-[#070B1A]/65" />

      <div className="relative z-10 mx-auto grid w-[min(1320px,92%)] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative order-1 mx-auto h-[300px] w-full max-w-[480px] md:h-[430px] md:max-w-[640px] lg:order-2 lg:h-[560px] lg:max-w-[720px]"
        >
          <Image
            src="/assets/imgs/gtech/homem.png"
            alt="Operador tecnológico Global Tech"
            fill
            sizes="(max-width: 1024px) 92vw, 50vw"
            className="object-contain object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <h2 className="font-title text-[36px] font-medium leading-tight text-white md:text-[52px] lg:text-[42px]">
            Un Socio Tecnológico,
            <br />
            <span className="text-[#FA3E22]">No solo un proveedor</span>
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:mt-14 lg:flex lg:flex-col lg:gap-10">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="flex items-center gap-4 text-left md:flex-col md:text-center lg:flex-row lg:text-left"
                >
                  <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full bg-[#5B2927] md:h-[92px] md:w-[92px] lg:h-[100px] lg:w-[100px]">
                    <Icon
                      size={46}
                      strokeWidth={2.3}
                      className="text-[#FA3E22] md:size-[54px] lg:size-[60px]"
                    />
                  </div>

                  <p className="font-body text-[16px] font-bold leading-[1.35] text-white md:text-[18px] lg:max-w-[620px] lg:text-[24px] lg:leading-[1.45]">
                    {item.text}
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
