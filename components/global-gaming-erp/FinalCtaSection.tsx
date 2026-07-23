import { CtaLink } from "./CtaLink";
import styles from "./global-gaming-erp.module.css";

export function FinalCtaSection() {
  return (
    <section className={styles.finalCtaSection} id="benefits">
      <div className={styles.finalCtaOverlay} />
      <div className={styles.finalCtaContent}>
        <h2>
          Global Gaming ERP: tecnología, performance y estrategia en una sola
          plataforma.
        </h2>
        <p>
          Contactá a <strong>Global Tech Internacional</strong> y llevá tu
          operación al próximo nivel.
        </p>
        <CtaLink href="#link" variant="light" />
      </div>
    </section>
  );
}
