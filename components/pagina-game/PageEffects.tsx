"use client";

import { useEffect } from "react";

const revealSelector = [
  ".feat-card",
  ".metric",
  ".testi-card",
  ".comp-item",
  ".comp-badge",
  ".flow-step",
  ".ops-tab",
].join(",");

export function PageEffects() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach((element) => {
      element.classList.add("scroll-fade");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
