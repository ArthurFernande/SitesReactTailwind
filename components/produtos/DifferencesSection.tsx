import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pillars = [
  {
    number: "01",
    title: "Tecnologia validada",
    description:
      "Plataformas em produção há anos, com arquitetura moderna, modular e pronta para escalar. Nada é experimento.",
    footer: "VALIDADO EM PRODUÇÃO",
  },
  {
    number: "02",
    title: "Infraestrutura escalável",
    description:
      "Estabilidade, segurança e performance para operações críticas. Cresce com seu negócio sem sobressaltos.",
    footer: "PRONTO PARA VOLUME",
  },
  {
    number: "03",
    title: "Segurança em primeiro lugar",
    description:
      "Tecnologias avançadas que protegem dados, transações e usuários em ambientes regulados e exigentes.",
    footer: "FOCO EM COMPLIANCE",
  },
  {
    number: "04",
    title: "Foco total em B2B",
    description:
      "Modelos white label adaptáveis à sua marca, mercado e estratégia. Você opera; nós sustentamos a tecnologia.",
    footer: "WHITE LABEL REAL",
  },
];

export function DifferencesSection() {
  return (
    <section
      id="diferenciais"
      className={`
        ${spaceGrotesk.className}
        scroll-mt-[100px]
        overflow-hidden
        bg-[#060b11]
        text-white
      `}
    >
      <div
        className="
          mx-auto flex
          w-[calc(100%-32px)]
          max-w-[1320px]
          flex-col
          justify-center
          py-16

          sm:w-[calc(100%-56px)]
          sm:py-18

          md:w-[calc(100%-80px)]
          md:py-20

          lg:min-h-[100svh]
          lg:w-[calc(100%-144px)]
          lg:py-[clamp(48px,6vh,72px)]

          xl:w-[calc(100%-176px)]
        "
      >
        {/* Cabeçalho */}
        <div
          className="
            grid items-end gap-8

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14

            xl:gap-20
          "
        >
          <h2
            className="
              max-w-[610px]
              text-[38px]
              font-medium
              leading-[1]
              tracking-[-0.04em]

              sm:text-[44px]

              md:text-[50px]

              lg:text-[54px]

              xl:text-[58px]
            "
          >
            <span className="block">Não somos só um</span>

            <span className="block">fornecedor.</span>

            <span className="mt-2 block text-[#49c8f2]">
              Somos um
            </span>

            <span className="block text-[#49c8f2]">
              parceiro tecnológico.
            </span>
          </h2>

          <p
            className="
              max-w-[540px]
              text-[17px]
              leading-[1.55]
              text-[#7181a4]

              sm:text-[18px]

              md:text-[19px]

              lg:justify-self-end
              lg:pb-1
              lg:text-[20px]

              xl:text-[21px]
            "
          >
            Quatro pilares que sustentam cada uma das nossas plataformas em
            produção.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-11 grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:mt-[clamp(38px,5vh,54px)]
            lg:grid-cols-4
            lg:gap-4

            xl:gap-5
          "
        >
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="
                group flex
                min-h-[310px]
                flex-col
                rounded-[12px]
                border border-[#29323c]
                bg-[#090f16]
                px-6 py-6
                transition duration-300

                hover:-translate-y-1
                hover:border-[#49c8f2]/60
                hover:bg-[#0b121a]

                sm:min-h-[325px]
                sm:px-7

                lg:min-h-[340px]
                lg:px-6
                lg:py-6

                xl:min-h-[355px]
                xl:px-7
              "
            >
              {/* Número e marcador */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[27px]
                    font-normal
                    leading-none
                    tracking-[-0.04em]
                    text-[#49c8f2]

                    sm:text-[28px]

                    lg:text-[29px]
                  "
                >
                  {pillar.number}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-3 w-3
                    rounded-full
                    bg-[#49c8f2]
                    transition duration-300

                    group-hover:scale-125
                    group-hover:shadow-[0_0_18px_rgba(73,200,242,0.55)]
                  "
                />
              </div>

              {/* Conteúdo */}
              <div
                className="
                  flex flex-1
                  flex-col
                  pt-9

                  sm:pt-10

                  lg:pt-9

                  xl:pt-10
                "
              >
                <h3
                  className="
                    min-h-[52px]
                    text-[19px]
                    font-bold
                    leading-[1.3]
                    tracking-[-0.025em]
                    text-white

                    sm:text-[20px]

                    lg:text-[18px]

                    xl:text-[19px]
                  "
                >
                  {pillar.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[16px]
                    leading-[1.55]
                    text-[#7181a4]

                    sm:text-[17px]

                    lg:text-[15px]
                    lg:leading-[1.6]

                    xl:text-[16px]
                  "
                >
                  {pillar.description}
                </p>
              </div>

              {/* Rodapé do card */}
              <div
                className="
                  mt-6
                  border-t border-[#2a323c]
                  pt-5
                "
              >
                <span
                  className="
                    text-[12px]
                    font-medium
                    leading-none
                    tracking-[0.01em]
                    text-[#7181a4]

                    sm:text-[13px]
                  "
                >
                  {pillar.footer}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DifferencesSection;