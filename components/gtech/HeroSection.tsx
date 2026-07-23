"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, LockKeyhole, Target, TrendingUp } from "lucide-react";

const features = [
  { icon: Target, title: "Tecnología validada" },
  { icon: TrendingUp, title: "Infraestructura escalable" },
  { icon: Handshake, title: "Operación segura" },
  { icon: LockKeyhole, title: "Enfoque B2B" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[#070B1A]"
    >
      <Image
        src="/assets/imgs/gtech/background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-45"
      />

      <div className="absolute inset-0 bg-[#070B1A]/60" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] w-[min(1500px,92%)] flex-col items-center justify-center gap-8 py-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
          className="relative order-1 h-[240px] w-full max-w-[430px] md:h-[360px] md:max-w-[620px] lg:order-2 lg:min-h-[700px] lg:max-w-none"
        >
          <Image
            src="/assets/imgs/gtech/mundo.png"
            alt="Tecnologia Global Tech"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 50vw"
            className="object-contain object-center lg:object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="order-2 flex max-w-[680px] flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <h1 className="font-title text-[54px] font-semibold leading-none text-[#FA3E22] md:text-[72px] lg:text-[82px]">
            GTech
          </h1>

          <div className="font-body mt-2 text-[25px] font-normal leading-[1.12] text-white md:text-[32px]">
            <p>Tecnología que impulsa negocios digitales</p>
            <p className="text-[#FA3E22]">
              de forma segura, escalable y eficiente.
            </p>
          </div>

          <p className="font-body mt-4 max-w-[620px] text-[17px] font-normal leading-[1.55] text-white md:text-[21px]">
            Desarrollamos y operamos plataformas tecnológicas listas para
            escalar, pensadas para empresas que buscan crecer con estabilidad,
            control y eficiencia operativa.
          </p>

          <div className="mt-10 grid w-full max-w-[620px] grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.25 + index * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#5B2927] md:h-[108px] md:w-[108px]">
                    <Icon
                      size={58}
                      strokeWidth={2.4}
                      className="text-[#FA3E22] md:size-[68px]"
                    />
                  </div>

                  <h3 className="font-title mt-3 text-[14px] font-bold leading-tight text-white md:text-[16px]">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href="#solucoes"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.75, ease: "easeOut" }}
            className="font-title mt-11 flex h-[72px] w-full max-w-[610px] items-center justify-center rounded-full border-[5px] border-[#8EA0FF] bg-[#17181D]/70 text-center text-[16px] font-bold text-white shadow-[0_0_28px_rgba(142,160,255,0.9)] transition hover:bg-[#252741] md:h-[78px] md:text-[21px]"
          >
            Conozca Nuestras Soluciones
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
