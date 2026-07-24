"use client";

import Image from "next/image";
import { useState } from "react";
import { TraducaoButtons, useTranslation } from "../traducaoButtons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const translatedNavigation = [
    { label: t("header.differentials"), href: "#diferenciais" },
    { label: t("header.portfolio"), href: "#portfolio" },
    { label: t("header.contact"), href: "#contato" },
  ];

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050a10]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[92px] w-[min(1540px,92%)] items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="relative flex shrink-0 items-center"
          aria-label={t("products.header.homeAria")}
        >
          <span className="absolute left-5 top-1/2 h-20 w-44 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-2xl" />

          <Image
            src="/assets/imgs/layout/logo.png"
            alt="Global Tech International"
            width={285}
            height={76}
            priority
            className="relative z-10 h-auto w-[205px] object-contain sm:w-[235px] xl:w-[270px]"
          />
        </a>

        {/* Navegação desktop */}
        <nav
          className="hidden items-center gap-14 lg:flex xl:gap-20"
          aria-label={t("products.header.primaryNavAria")}
        >
          {translatedNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-3 text-[17px] font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-white xl:text-[18px]"
            >
              {item.label}

              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Área direita desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          <TraducaoButtons />

          {/* CTA */}
          <a
            href="#contato"
            className="group flex min-h-[58px] items-center justify-center gap-4 rounded-[24px] bg-[#55cff5] px-7 text-[17px] font-semibold text-[#041019] shadow-[0_12px_35px_rgba(85,207,245,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#75daf8] hover:shadow-[0_16px_40px_rgba(85,207,245,0.28)] xl:px-8 xl:text-[18px]"
          >
            {t("header.talkToTeam")}

            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={t(isMenuOpen ? "header.closeMenu" : "header.openMenu")}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#050a10]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-[92%] flex-col py-6">
          <nav className="flex flex-col" aria-label={t("products.header.mobileNavAria")}>
          {translatedNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-[17px] font-medium text-slate-300 transition-colors hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <TraducaoButtons mobile />
          </div>

          <a
            href="#contato"
            onClick={closeMenu}
            className="mt-5 flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-[#55cff5] px-6 text-base font-semibold text-[#041019]"
          >
            {t("header.talkToTeam")}

            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
