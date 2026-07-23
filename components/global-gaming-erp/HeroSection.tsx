import Image from "next/image";

import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.heroCopy}>
          <Reveal animation="zoomIn">
            <p className={styles.eyebrow}>Global Gaming ERP</p>
          </Reveal>

          <Reveal animation="zoomIn" delay={100}>
            <h1 className={styles.heroTitle}>
              La Plataforma Integral de iGaming de Global Tech{" "}
              <span>Internacional</span>
            </h1>
          </Reveal>

          <Reveal animation="zoomIn" delay={200}>
            <div className={styles.heroDescription}>
              <p>
                <strong>Global Gaming ERP</strong> es el producto más completo
                de <strong>Global Tech Internacional</strong>, una empresa con
                sede en Uruguay y especializada en soluciones tecnológicas
                avanzadas para el sector de apuestas deportivas y casinos
                online.
              </p>
              <p>
                Desarrollado con las mejores prácticas internacionales, el ERP
                está diseñado para operadores que buscan escalar con solidez,
                gestionar con eficiencia y operar con un estándar global.
              </p>
            </div>
          </Reveal>

          <CtaLink />
        </div>

        <div className={styles.heroImage}>
          <Image
            src={`${imageRoot}/Group-549-774x1024.png`}
            alt=""
            width={774}
            height={1024}
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className={styles.heroWave} aria-hidden="true">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M421.9,6.5c22.6-2.5,51.5.4,75.5,5.3 23.6,4.9,70.9,23.5,100.5,35.7 75.8,32.2,133.7,44.5,192.6,49.7 23.6,2.1,48.7,3.5,103.4-2.5 54.7-6,106.2-25.6,106.2-25.6V0H0v30.3s72,32.6,158.4,30.5c39.2-.7,92.8-6.7,134-22.4 21.2-8.1,52.2-18.2,79.7-24.2 27.2-6.3,39.5-6.7,49.8-7.7Z" />
        </svg>
      </div>
    </section>
  );
}
