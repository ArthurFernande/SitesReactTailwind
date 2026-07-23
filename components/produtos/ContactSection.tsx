import { ContactForm } from "./ContactForm";

const contactBenefits = [
  {
    number: "01",
    text: "Resposta em até 1 dia útil",
  },
  {
    number: "02",
    text: "Reunião de diagnóstico sem compromisso",
  },
  {
    number: "03",
    text: "Proposta sob medida em 5 dias",
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="
        relative
        scroll-mt-[110px]
        overflow-hidden
        bg-[#05090e]
        py-16

        sm:py-[72px]
        md:py-20
        lg:py-[clamp(72px,8vh,96px)]
      "
    >
      {/* Container com o mesmo alinhamento das outras seções */}
      <div
        className="
          relative
          mx-auto
          w-[calc(100%-32px)]
          max-w-[1320px]
          overflow-hidden
          rounded-[12px]
          border border-white/15
          bg-[linear-gradient(115deg,#0a101a_0%,#0d1521_52%,#0c2330_100%)]
          shadow-[0_30px_80px_rgba(0,0,0,0.28)]

          sm:w-[calc(100%-56px)]
          md:w-[calc(100%-80px)]
          lg:w-[calc(100%-144px)]
          xl:w-[calc(100%-176px)]
        "
      >
        {/* Iluminação superior direita */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-32
            top-0
            h-[560px]
            w-[700px]
            rounded-full
            bg-[#13455c]/25
            blur-[130px]
          "
        />

        {/* Iluminação inferior central */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-180px]
            left-[30%]
            h-[400px]
            w-[500px]
            rounded-full
            bg-[#152a4a]/20
            blur-[130px]
          "
        />

        {/* Pontos decorativos */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            hidden
            h-[330px]
            w-[630px]
            opacity-70

            lg:block
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(30, 175, 231, 0.38) 1.5px, transparent 1.6px)",
            backgroundSize: "35px 34px",
            maskImage:
              "linear-gradient(to right, black 0%, black 62%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 62%, transparent 100%)",
          }}
        />

        {/* Conteúdo */}
        <div
          className="
            relative
            z-10
            grid
            min-h-[680px]
            grid-cols-1
            items-center
            gap-12
            px-6
            py-12

            sm:px-8
            sm:py-14

            md:px-10

            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-12
            lg:px-12
            lg:py-16

            xl:grid-cols-[0.93fr_1.07fr]
            xl:gap-16
            xl:px-14

            2xl:gap-20
            2xl:px-16
          "
        >
          {/* Texto */}
          <div className="flex h-full flex-col justify-center">
            <div className="max-w-[590px]">
              <h2
                className="
                  text-[38px]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-white

                  sm:text-[44px]
                  md:text-[48px]
                  lg:text-[46px]
                  xl:text-[50px]
                  2xl:text-[52px]
                "
              >
                <span className="block">
                  Pronto para transformar
                </span>

                <span className="block">
                  o{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-[#28c7fb]
                      to-[#4b9eff]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    potencial
                  </span>{" "}
                  do
                </span>

                <span className="block">
                  seu negócio?
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[570px]
                  text-[17px]
                  leading-[1.45]
                  text-[#8098c2]

                  sm:text-[18px]
                  md:text-[19px]
                  lg:text-[18px]
                  xl:text-[19px]
                  2xl:text-[20px]
                "
              >
                Apresentamos a melhor solução para a sua operação, do
                diagnóstico ao go-live, com suporte contínuo.
              </p>

              {/* Benefícios */}
              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-4

                  sm:mt-12
                  lg:mt-14
                "
              >
                {contactBenefits.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        min-w-[26px]
                        text-[17px]
                        font-medium
                        leading-none
                        text-[#22bff4]

                        sm:text-[18px]
                      "
                    >
                      {benefit.number}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-5
                        w-px
                        shrink-0
                        bg-gradient-to-b
                        from-[#25c5fa]
                        to-[#315a7a]
                      "
                    />

                    <p
                      className="
                        text-[15px]
                        font-medium
                        leading-[1.4]
                        text-white

                        sm:text-[16px]
                        md:text-[17px]
                      "
                    >
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Linha inferior decorativa */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#6653a8]/70
          to-transparent
        "
      />
    </section>
  );
}

export default ContactSection;