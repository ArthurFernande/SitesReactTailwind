import styles from "./gaming-legacy-erp.module.css";

const copy = {
  title: "Plataforma Tradicional de iGaming \u2013 Simplicidad y Estabilidad",
  animatedTitle: "para tu Operaci\u00f3n",
  firstParagraph: "es una soluci\u00f3n s\u00f3lida, b\u00e1sica y eficiente, desarrollada para operadores que buscan gestionar su operaci\u00f3n de forma simple, segura y sin complicaciones.",
  secondParagraph: "Con a\u00f1os de funcionamiento continuo, esta tecnolog\u00eda ha demostrado ser confiable para operaciones de distintos tama\u00f1os, ofreciendo los elementos esenciales para una experiencia de iGaming estable y funcional.",
};

export function GamingLegacyHero() {
  return (
    <section className={styles.hero} aria-labelledby="gaming-legacy-title">
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>GAMING LEGACY ERP</p>
        <h1 id="gaming-legacy-title" className={styles.title}>
          <span>{copy.title}</span>
          <span className={styles.animatedTitle}>{copy.animatedTitle}</span>
        </h1>
        <div className={styles.description}>
          <p>
            Nuestra <strong>plataforma heredada</strong> {copy.firstParagraph}
          </p>
          <p>{copy.secondParagraph}</p>
        </div>
        <div className={styles.spacer} aria-hidden="true" />
      </div>
      <svg
        className={styles.wave}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" />
      </svg>
    </section>
  );
}
