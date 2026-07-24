"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "@/components/traducaoButtons";

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  leftItems?: NavItem[];
  rightItems?: NavItem[];
  logoSrc?: string;
  logoAlt?: string;
};

export default function Header({
  leftItems,
  rightItems,
  logoSrc = "/assets/imgs/layout/logo.png",
  logoAlt = "Global Tech",
}: HeaderProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const resolvedLeftItems = useMemo(
    () => leftItems ?? [
      { label: t("header.home"), href: "#home" },
      { label: t("header.solutions"), href: "#solucoes" },
    ],
    [leftItems, t],
  );
  const resolvedRightItems = useMemo(
    () => rightItems ?? [
      { label: t("header.about"), href: "#sobre" },
      { label: t("header.contact"), href: "#contato" },
    ],
    [rightItems, t],
  );
  const navItems = useMemo(
    () => [...resolvedLeftItems, ...resolvedRightItems],
    [resolvedLeftItems, resolvedRightItems],
  );

  useEffect(() => {
    function updateActiveSection() {
      if (isManualScrolling.current) return;

      const scrollPosition = window.scrollY + 160;
      let currentSection = "#home";

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [navItems]);

  function handleNavClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();

    const section = document.querySelector(href);
    if (!section) return;

    isManualScrolling.current = true;
    setActiveSection(href);
    setIsOpen(false);

    const headerOffset = 96;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - headerOffset,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
      setActiveSection(href);
    }, 900);
  }

  function navClass(href: string) {
    const isActive = activeSection === href;

    return [
      "font-title text-[22px] transition duration-300",
      isActive ? "text-[#FA3E22]" : "text-white hover:text-[#FA3E22]",
    ].join(" ");
  }

  function mobileNavClass(href: string) {
    const isActive = activeSection === href;

    return [
      "rounded-md border px-4 py-3 font-title text-lg transition",
      isActive
        ? "border-[#FA3E22] bg-[#FA3E22]/10 text-[#FA3E22]"
        : "border-[#5950B8] text-white hover:border-[#FA3E22] hover:bg-[#FA3E22]/10 hover:text-[#FA3E22]",
    ].join(" ");
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-2 border-[#5950B8] bg-[#17181D]">
        <div className="relative mx-auto flex h-24 w-full max-w-[1800px] items-center justify-between px-6 md:px-10 lg:px-16">
          <nav className="hidden flex-1 items-center justify-center gap-14 lg:flex">
            {resolvedLeftItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={navClass(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "#home")}
            className="relative mx-8 flex h-16 w-[220px] shrink-0 items-center justify-center xl:w-[330px]"
          >
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              priority
              sizes="(max-width:1024px) 260px, 330px"
              className="object-contain"
            />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-14 lg:flex">
            {resolvedRightItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={navClass(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>


          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-auto flex h-12 w-12 items-center justify-center rounded-md border border-[#5950B8] text-white transition hover:border-[#FA3E22] hover:bg-[#FA3E22]/10 hover:text-[#FA3E22] lg:hidden"
            aria-label={t(isOpen ? "header.closeMenu" : "header.openMenu")}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="border-t-2 border-[#5950B8] bg-[#17181D] lg:hidden"
            >
              <nav className="flex flex-col gap-2 p-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={mobileNavClass(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-24" />
    </>
  );
}
