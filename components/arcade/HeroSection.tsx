"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Handshake, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Target, label: "Tecnología validada" },
  { icon: Handshake, label: "Operación simple" },
  { icon: TrendingUp, label: "Escalabilidad real" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#090B14] text-white"
    >
      <Image
        src="/assets/imgs/arcade/background-s1.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,18,0.95)_0%,rgba(8,9,18,0.78)_38%,rgba(8,9,18,0.36)_62%,rgba(8,9,18,0.76)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen w-[min(1360px,92%)] items-center gap-8 pt-24 pb-14 lg:grid-cols-[0.72fr_1fr] lg:pt-24 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto flex max-w-[720px] flex-col items-center text-center lg:mx-0 lg:block lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mb-8 block w-full max-w-[430px] lg:hidden"
          >
            <Image
              src="/assets/imgs/arcade/controle.png"
              alt=""
              width={760}
              height={760}
              priority
              className="mx-auto w-full object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
            />
          </motion.div>

          <h1 className="font-title text-[46px] font-medium leading-[0.98] tracking-tight md:text-[68px] lg:text-[72px]">
            <span className="block text-white">GTech</span>
            <span className="block text-[#FA3E22]">ARCADE</span>
          </h1>

          <p className="mt-7 max-w-[680px] font-body text-[24px] font-medium leading-[1.08] text-white md:text-[32px] lg:text-[30px]">
            Solución de Entretenimiento Digital{" "}
            <span className="text-[#FA3E22]">para Ambientes Controlados</span>
          </p>

          <p className="mt-7 max-w-[660px] font-body text-[17px] font-semibold leading-[1.55] text-white md:text-[22px] lg:text-[21px]">
            Impulse su negocio con una plataforma de entretenimiento moderna,
            segura y lista para escalar.
          </p>

          <div className="mt-9 grid w-full max-w-[620px] grid-cols-3 gap-4 md:gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25 + index * 0.12,
                    duration: 0.55,
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex size-[76px] items-center justify-center rounded-full border border-[#FA3E22]/30 bg-[#FA3E22]/20 backdrop-blur-sm md:size-[96px]">
                    <Icon
                      size={44}
                      strokeWidth={2.2}
                      className="text-[#FA3E22] md:size-[50px]"
                    />
                  </div>

                  <strong className="mt-4 font-body text-[13px] font-bold leading-tight text-white md:text-[18px]">
                    {item.label}
                  </strong>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="relative hidden min-h-[560px] lg:block"
        >
          <Image
            src="/assets/imgs/arcade/controle.png"
            alt=""
            width={760}
            height={760}
            priority
            className="absolute right-[-30px] top-1/2 w-[720px] -translate-y-1/2 object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
