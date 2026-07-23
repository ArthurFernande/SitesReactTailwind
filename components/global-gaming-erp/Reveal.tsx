"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import styles from "./global-gaming-erp.module.css";

type RevealProps = {
  animation?: "fadeIn" | "slideInLeft" | "slideInRight" | "zoomIn";
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({
  animation = "fadeIn",
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[animation]} ${
        isVisible ? styles.isVisible : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
