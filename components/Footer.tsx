"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#17181D]">
      <div className="mx-auto flex w-[min(1320px,92%)] flex-col items-center justify-between gap-5 py-6 text-center lg:flex-row lg:text-left">
        {/* Logo textual */}
        <div className="flex items-end gap-2">
          <span className="font-title text-[30px] font-bold italic leading-none text-[#FA3E22]">
            ARCADE
          </span>

          <span className="font-body mb-[3px] text-[16px] text-white/55 md:text-[18px]">
            by Global Tech International
          </span>
        </div>

        {/* Copyright */}
        <p className="font-body text-[15px] text-[#8E8FA8] md:text-[18px]">
          © 2026 Global Tech International. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
