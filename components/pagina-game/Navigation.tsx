"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  ["#quem-somos", "Quem Somos"],
  ["#plataforma", "Plataforma"],
  ["#operacao", "Operação"],
  ["#compliance", "Compliance"],
  ["#faq", "FAQ"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav" aria-label="Navegação principal">
        <div className="nav-left">
          <a href="#top" className="logo" aria-label="Global Tech International">
            <span className="logo-mark" />
            <span className="logo-text">global tech<span className="d">INTERNATIONAL</span></span>
          </a>
          <div className="nav-links">
            {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-status"><span className="d" />LEI 14.790/23 · COMPLIANT</div>
          <a href="#contato" className="nav-cta">Falar com comercial</a>
          <button className="nav-burger" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <MenuIcon width="24" height="24" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " on" : ""}`} aria-hidden={!open}>
        <button className="mobile-close" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}>
          <CloseIcon width="26" height="26" />
        </button>
        {links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contato" onClick={() => setOpen(false)} style={{ color: "var(--cyan)" }}>Falar com comercial →</a>
      </div>
    </>
  );
}
