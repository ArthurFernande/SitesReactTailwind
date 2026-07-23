"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RegulatedMarketsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070B1A] py-24 md:py-28">
      <Image
        src="/assets/imgs/gtech/background-s3.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center opacity-45"
      />

      <div className="absolute inset-0 bg-[#070B1A]/70" />

      <div className="relative z-10 mx-auto flex min-h-[520px] w-[min(1200px,92%)] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-[1080px] text-center"
        >
          <h2 className="font-title text-[36px] font-medium leading-tight text-white md:text-[52px] lg:text-[42px]">
            Tecnologia pensada para mercados regulados
            <br />
            <span className="text-[#FA3E22]">y ambientes controlados</span>
          </h2>

          <p className="font-body mx-auto mt-8 max-w-[1120px] text-[21px] font-semibold leading-[1.55] text-white md:text-[24px]">
            Nuestras soluciones están diseñadas para operar en entornos que
            exigen control, seguridad, cumplimiento y eficiencia, permitiendo a
            nuestros socios enfocarse en el crecimiento del negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
