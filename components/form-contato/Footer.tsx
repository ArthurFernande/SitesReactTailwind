import Image from "next/image";

const logoPath = "/assets/imgs/form-contato/logo-xsa.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#17181d]
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          w-[min(1100px,90%)]
          flex-col
          items-center
          justify-center
          gap-6
          py-7

          md:flex-row
          md:justify-between
          md:gap-12
          md:py-8

          lg:w-[min(1050px,88%)]
        "
      >
        {/* Logo */}
        <div
          className="
            relative
            h-[58px]
            w-[145px]
            shrink-0

            sm:h-[64px]
            sm:w-[160px]

            md:h-[62px]
            md:w-[155px]

            lg:h-[68px]
            lg:w-[170px]
          "
        >
          <Image
            src={logoPath}
            alt="XSA Sports"
            fill
            sizes="170px"
            className="
              object-contain
              object-center
            "
          />
        </div>

        {/* Direitos autorais */}
        <p
          className="
            max-w-[520px]
            text-center
            font-[Arial]
            text-[12px]
            leading-[1.5]
            text-white/55

            sm:text-[13px]

            md:text-right
            md:text-[13px]

            lg:text-[14px]
          "
        >
          © {currentYear} Global Tech International. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
