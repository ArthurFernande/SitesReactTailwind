import Image from "next/image";

import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

const features = [
  {
    title: "Sportsbook Profesional",
    description: (
      <>
        Cobertura global de eventos, cuotas en tiempo real y datos oficiales
        gracias a la integración con <strong>Genius Sports</strong>.
      </>
    ),
    image: "sport-ball.png",
    width: 500,
    height: 333,
    tone: "navy",
  },
  {
    title: (
      <>
        Casino y <br />
        Casino en Vivo
      </>
    ),
    description: (
      <>
        Más de 10.000 juegos con los principales proveedores del mercado:{" "}
        <strong>
          Pragmatic Play, Evolution, Spribe, Hacksaw, Evoplay, Tom Horn
        </strong>
        , entre otros.
      </>
    ),
    image: "casino-game.png",
    width: 500,
    height: 500,
    tone: "purple",
  },
  {
    title: "Panel Administrativo Completo",
    description:
      "Dashboard intuitivo para gestionar usuarios, apuestas, transacciones, afiliados, campañas, límites de riesgo y reportes personalizados.",
    image: "dashboard.png",
    width: 500,
    height: 500,
    tone: "purple",
  },
  {
    title: "Infraestructura de Alta Escalabilidad",
    description: (
      <>
        Basado en tecnología <strong>Oracle</strong>, con máxima seguridad,
        rendimiento y capacidad de expansión.
      </>
    ),
    image: "network-infrastructure.png",
    width: 500,
    height: 500,
    tone: "navy",
  },
  {
    title: "CRM y Marketing Automatizado",
    description: (
      <>
        Con <strong>Smartico</strong>, crea campañas inteligentes, misiones,
        puntos de fidelidad, bonificaciones automáticas y experiencias
        gamificadas.
      </>
    ),
    image: "marketing-team.png",
    width: 500,
    height: 500,
    tone: "navy",
  },
  {
    title: "Gestión de Afiliados Avanzada",
    description:
      "Herramientas completas para seguimiento de rendimiento, comisiones, generación de enlaces y reportes detallados.",
    image: "affiliate-marketing.png",
    width: 500,
    height: 500,
    tone: "purple",
  },
  {
    title: "Sistema Financiero Integrado",
    description:
      "Gestión eficiente de depósitos, retiros, billeteras y métodos de pago.",
    image: "financial-report.png",
    width: 500,
    height: 500,
    tone: "purple",
  },
  {
    title: "Expansión Internacional",
    description:
      "Soporte multilingüe, multimoneda, y configuraciones personalizadas para cada mercado.",
    image: "language-translator.png",
    width: 500,
    height: 500,
    tone: "navy",
  },
] as const;

export function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionInner}>
        <Reveal animation="slideInLeft">
          <h2 className={styles.sectionTitle}>
            Funcionalidades que transforman tu operación
          </h2>
        </Reveal>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <Reveal
              key={typeof feature.title === "string" ? feature.title : index}
              animation={index % 2 === 0 ? "slideInRight" : "slideInLeft"}
              className={`${styles.featureCard} ${
                feature.tone === "purple"
                  ? styles.featurePurple
                  : styles.featureNavy
              }`}
            >
              <div className={styles.featureText}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className={styles.featureImage}>
                <Image
                  src={`${imageRoot}/${feature.image}`}
                  alt=""
                  width={feature.width}
                  height={feature.height}
                  sizes="(max-width: 767px) 80vw, 30vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
