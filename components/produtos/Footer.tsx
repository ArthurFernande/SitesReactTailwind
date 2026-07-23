const companyLinks = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Diferenciais",
    href: "#diferenciais",
  },
  {
    label: "Portfólio",
    href: "#portfolio",
  },
  {
    label: "Contato",
    href: "#contato",
  },
];

const productLinks = [
  {
    label: "ARCADE",
    href: "https://gtech.uy/arcade/",
    external: true,
  },
  {
    label: "Global Gaming ERP",
    href: "https://gtech.uy/global-gaming-erp/",
    external: true,
  },
  {
    label: "Gaming Legacy ERP",
    href: "https://gtech.uy/gaming-legacy-erp/",
    external: true,
  },
  {
    label: "VAPT",
    href: "https://vapt.site/",
    external: true,
  },
];

const legalLinks = [
  {
    label: "Política de Privacidade",
    href: "https://gtech.uy/politica-de-privacidad/",
    external: true,
  },
  {
    label: "Suporte (Discord)",
    href: "https://discord.com/invite/6PcHjT59PP",
    external: true,
  },
];

export function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-[#050a11]
        text-white
      "
    >
      {/* Mesmo alinhamento horizontal das demais seções */}
      <div
        className="
          mx-auto
          w-[calc(100%-32px)]
          max-w-[1320px]

          sm:w-[calc(100%-56px)]
          md:w-[calc(100%-80px)]
          lg:w-[calc(100%-144px)]
          xl:w-[calc(100%-176px)]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-14

            sm:grid-cols-2
            sm:py-[72px]

            md:py-20

            lg:grid-cols-[1.25fr_0.85fr_1fr_0.9fr]
            lg:gap-10
            lg:py-[clamp(72px,8vh,96px)]

            xl:gap-14
          "
        >
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#inicio"
              aria-label="Ir para o início"
              className="
                inline-block
                transition-opacity
                duration-300
                hover:opacity-85
              "
            >
              <img
                src="/assets/imgs/layout/logo.png"
                alt="Global Tech International"
                className="
                  h-auto
                  w-[245px]
                  max-w-full
                  object-contain
                  object-left

                  sm:w-[270px]
                  lg:w-[290px]
                "
              />
            </a>

            <p
              className="
                mt-7
                max-w-[310px]
                text-[16px]
                leading-[1.65]
                text-[#7f94bc]

                sm:text-[17px]
                lg:text-[18px]
              "
            >
              Tecnologia validada, infraestrutura escalável e operação segura
              para negócios digitais B2B.
            </p>
          </div>

          {/* Empresa */}
          <FooterColumn
            title="Empresa"
            links={companyLinks}
          />

          {/* Produtos */}
          <FooterColumn
            title="Produtos"
            links={productLinks}
          />

          {/* Legal */}
          <FooterColumn
            title="Legal"
            links={legalLinks}
          />
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3
        className="
          mb-6
          text-[13px]
          font-semibold
          uppercase
          tracking-[0.04em]
          text-[#7185ac]

          sm:mb-7
          sm:text-[14px]
        "
      >
        {title}
      </h3>

      <nav aria-label={title}>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={
                  link.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  inline-block
                  text-[16px]
                  leading-[1.45]
                  text-[#7f94bc]
                  transition
                  duration-300

                  hover:translate-x-1
                  hover:text-white

                  sm:text-[17px]
                  lg:text-[18px]
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Footer;