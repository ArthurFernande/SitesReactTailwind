import Image from "next/image";

import { Reveal } from "./Reveal";
import styles from "./global-gaming-erp.module.css";

const imageRoot = "/assets/imgs/global-gaming-erp";

const partners = [
  ["Playson.png", 554, 120],
  ["mancala.png", 600, 139],
  ["smartsoft.png", 400, 200],
  ["Oracle_logo.svg_-1024x133.png", 960, 125],
  ["smartico-logo.webp", 515, 131],
  ["Pragmatic-Play-Logo-3.webp", 960, 443],
  ["GENIUS_SPORTS_VERTICAL_BLUE_RGB.webp", 800, 451],
  ["evolution_logo.svg", 960, 176],
  ["tomhorn.png", 494, 155],
] as const;

export function PartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersGrid}>
        {partners.map(([src, width, height], index) => (
          <Reveal key={src} animation="fadeIn" delay={index === 2 ? 600 : 0}>
            <Image
              src={`${imageRoot}/${src}`}
              alt=""
              width={width}
              height={height}
              sizes="(max-width: 767px) 40vw, 11vw"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
