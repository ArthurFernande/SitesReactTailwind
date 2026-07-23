"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gamepad2,
  BadgeCheck,
  PlayCircle,
  Globe,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    text: "Integración activa con proveedores de juegos",
  },
  {
    icon: BadgeCheck,
    text: "Modelo White Label completo",
  },
  {
    icon: PlayCircle,
    text: "Listo para operación inmediata",
  },
  {
    icon: Globe,
    text: "Escalabilidad regional e internacional",
  },
  {
    icon: ShieldCheck,
    text: "Tecnología validada y homologada",
  },
];

export default function WhyArcadeSection() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-24 lg:py-28"
    >
      <Image
        src="/assets/imgs/arcade/background-s5.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#101117]/78" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,23,.92)_0%,rgba(16,17,23,.72)_42%,rgba(16,17,23,.42)_64%,rgba(16,17,23,.90)_100%)]" />

      <div className="relative z-10 mx-auto grid w-[min(1320px,92%)] items-center gap-14 lg:grid-cols-[0.9fr_1fr]">
        {/* IMAGEM */}

        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <Image
            src="/assets/imgs/arcade/j-6.png"
            alt="Arcade"
            width={760}
            height={760}
            className="mx-auto w-full max-w-[620px] object-contain"
          />
        </motion.div>

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <h2 className="font-title text-center text-[38px] font-medium leading-tight md:text-[56px] lg:text-left lg:text-[46px]">
            <span className="block text-white">Por qué</span>

            <span className="block text-[#FA3E22]">Elegir Arcade?</span>
          </h2>

          <div className="mt-14 space-y-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.55,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-7"
                >
                  {/* CÍRCULO */}

                  <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-full bg-[#7B2E23] shadow-[0_0_30px_rgba(250,62,34,0.18)]">
                    {/* CÍRCULO INTERNO */}

                    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#FA3E22]/35">
                      <Icon
                        size={40}
                        strokeWidth={2}
                        className="text-[#FA3E22]"
                      />
                    </div>
                  </div>

                  <p className="font-body text-[20px] font-bold leading-snug text-white md:text-[24px] lg:text-[19px]">
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
