import { ArrowRight } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const statistics = [
  {
    value: "30 +",
    label: "ANOS DE MERCADO",
  },
  {
    value: "9",
    label: "PRODUTOS NO PORTFÓLIO",
  },
  {
    value: "6K +",
    label: "JOGOS INTEGRADOS",
  },
  {
    value: "99.9%",
    label: "UPTIME OPERACIONAL",
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className={`
        ${spaceGrotesk.className}
        relative overflow-hidden bg-[#060b11] text-white
        pt-[84px] lg:pt-[112px]
      `}
    >
      {/* Iluminação decorativa */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-[-220px] top-[-180px]
          h-[500px] w-[500px]
          rounded-full bg-[#4fc9f5]/5
          blur-[160px]
        "
      />

      <div
        className="
          relative mx-auto flex
          min-h-[calc(100svh-84px)]
          w-[calc(100%-32px)]
          max-w-[1320px]
          flex-col
          pb-7

          sm:w-[calc(100%-56px)]
          md:w-[calc(100%-80px)]

          lg:min-h-[calc(100svh-112px)]
          lg:w-[calc(100%-144px)]
          lg:pb-6

          xl:w-[calc(100%-176px)]
        "
      >
        {/* Conteúdo principal */}
        <div
          className="
            flex flex-1 items-center
            py-10
            sm:py-12
            lg:py-8
          "
        >
          <div className="w-full max-w-[860px]">
            <h1
              className="
                max-w-[820px]
                text-[42px]
                font-bold
                leading-[1.02]
                tracking-[-0.045em]

                sm:text-[50px]
                md:text-[56px]
                lg:text-[60px]
                xl:text-[64px]
                2xl:text-[68px]
              "
            >
              <span className="block">Tecnologia que</span>

              <span className="block text-[#91aaf5]">
                impulsiona
              </span>

              <span className="block">negócios digitais</span>
            </h1>

            <p
              className="
                mt-7 max-w-[820px]
                text-[16px]
                font-normal
                leading-[1.55]
                text-[#99a6c4]

                sm:text-[17px]
                md:text-[18px]

                lg:mt-7
                lg:text-[19px]

                xl:text-[20px]
              "
            >
              Desenvolvemos e operamos plataformas tecnológicas prontas para
              escalar, pensadas para empresas B2B que precisam crescer com
              estabilidade, controle e eficiência operacional.
            </p>

            <div
              className="
                mt-8 flex flex-col gap-4
                sm:flex-row
                sm:items-center
                sm:gap-5
              "
            >
              <a
                href="#contato"
                className="
                  group inline-flex min-h-[54px]
                  items-center justify-center gap-4
                  rounded-[20px]
                  bg-[#4ccaf3]
                  px-6
                  text-[16px]
                  font-medium
                  text-[#061019]
                  transition duration-300

                  hover:-translate-y-1
                  hover:bg-[#72d8f8]

                  sm:w-fit
                  sm:text-[17px]
                "
              >
                Fale com nosso time

                <ArrowRight
                  size={23}
                  strokeWidth={2.5}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              <a
                href="#portfolio"
                className="
                  inline-flex min-h-[54px]
                  items-center justify-center
                  rounded-[20px]
                  border border-[#202a33]
                  bg-[#0a1016]
                  px-6
                  text-[16px]
                  font-semibold
                  text-white
                  transition duration-300

                  hover:-translate-y-1
                  hover:border-[#4ccaf3]/70
                  hover:text-[#4ccaf3]

                  sm:w-fit
                  sm:text-[17px]
                "
              >
                Ver portfólio
              </a>
            </div>
          </div>
        </div>

        {/* Cards de estatísticas */}
        <div
          className="
            overflow-hidden
            rounded-[14px]
            border border-[#26303a]
            bg-[#26303a]
          "
        >
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((statistic) => (
              <article
                key={statistic.label}
                className="
                  flex min-h-[118px]
                  flex-col justify-between
                  bg-[#070c12]
                  px-6 py-5

                  sm:min-h-[125px]
                  sm:px-7
                  sm:py-6

                  lg:min-h-[132px]
                  lg:px-8
                  lg:py-6
                "
              >
                <strong
                  className="
                    text-[30px]
                    font-bold
                    leading-none
                    tracking-[-0.04em]
                    text-white

                    sm:text-[34px]
                    lg:text-[37px]
                  "
                >
                  {statistic.value}
                </strong>

                <span
                  className="
                    mt-5 max-w-[220px]
                    text-[13px]
                    font-semibold
                    leading-[1.4]
                    text-[#566381]

                    sm:text-[14px]
                    lg:text-[15px]
                  "
                >
                  {statistic.label}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;