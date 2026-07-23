import Image from "next/image";

import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

const rows = [
  ["Sportsbook con datos oficiales", "star-gtech.svg", "star-gtech-2.svg"],
  ["Casino con proveedores líderes", "star-gtech.svg", "star-gtech.svg"],
  ["CRM y Gamificación", "star-gtech.svg", "star-gtech-1.svg"],
  ["Infraestructura", "star-gtech.svg", "star-gtech-2.svg"],
  ["Escalabilidad Multimercado", "star-gtech-4.svg", "star-gtech-2.svg"],
  [
    "Gestión Avanzada de Afiliados",
    "star-gtech-4.svg",
    "star-gtech-2.svg",
  ],
  [
    "Panel Administrativo Personalizable",
    "star-gtech-4.svg",
    "star-gtech-3.svg",
  ],
] as const;

export function ComparisonSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.comparisonOverlay} />
      <Reveal animation="slideInLeft" className={styles.comparisonContent}>
        <h2 className={styles.sectionTitle}>Comparativo de Ventajas</h2>
        <p className={styles.comparisonIntro}>
          A continuación, una comparación entre <strong>Global Gaming ERP</strong>{" "}
          y plataformas comunes del mercado:
        </p>

        <div className={styles.tableScroller}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Funciononalidad</th>
                <th>Global Gaming ERP</th>
                <th>Plataformas Comunes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, erpRating, commonRating]) => (
                <tr key={label}>
                  <td>
                    <a
                      href="https://royal-elementor-addons.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {label}
                    </a>
                  </td>
                  <td>
                    <Image
                      src={`${imageRoot}/${erpRating}`}
                      alt=""
                      width={100}
                      height={19}
                    />
                  </td>
                  <td>
                    <Image
                      src={`${imageRoot}/${commonRating}`}
                      alt=""
                      width={100}
                      height={19}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.centeredCta}>
          <CtaLink />
        </div>
      </Reveal>
    </section>
  );
}
