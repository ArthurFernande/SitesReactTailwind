const ptBR = {
  "legacy.hero.title": "Plataforma Tradicional de iGaming – Simplicidade e Estabilidade",
  "legacy.hero.animatedTitle": "para sua Operação",
  "legacy.hero.intro.beforeHighlight": "Nossa ",
  "legacy.hero.intro.highlight": "plataforma legada",
  "legacy.hero.intro.afterHighlight": " é uma solução sólida, básica e eficiente, desenvolvida para operadores que buscam gerenciar sua operação de forma simples, segura e sem complicações.",
  "legacy.hero.paragraph2": "Com anos de funcionamento contínuo, essa tecnologia demonstrou ser confiável para operações de diferentes portes, oferecendo os elementos essenciais para uma experiência de iGaming estável e funcional.",
  "legacy.modal.close": "Fechar",
  "legacy.modal.name": "Como você se chama?",
  "legacy.modal.email": "Em qual endereço de e-mail corporativo você gostaria de receber a proposta?",
  "legacy.modal.phone": "Você poderia me dar seu número de telefone?",
  "legacy.modal.teamSize": "Por fim, quantos funcionários sua empresa possui?",
  "legacy.modal.team1": "1 a 10",
  "legacy.modal.team2": "11 a 50",
  "legacy.modal.team3": "51 a 100",
  "legacy.modal.team4": "Mais de 100",
  "legacy.modal.submit": "Enviar",
} as const;

type Key = keyof typeof ptBR;
const es = {
  "legacy.hero.title": "Plataforma Tradicional de iGaming – Simplicidad y Estabilidad",
  "legacy.hero.animatedTitle": "para tu Operación",
  "legacy.hero.intro.beforeHighlight": "Nuestra ",
  "legacy.hero.intro.highlight": "plataforma heredada",
  "legacy.hero.intro.afterHighlight": " es una solución sólida, básica y eficiente, desarrollada para operadores que buscan gestionar su operación de forma simple, segura y sin complicaciones.",
  "legacy.hero.paragraph2": "Con años de funcionamiento continuo, esta tecnología ha demostrado ser confiable para operaciones de distintos tamaños, ofreciendo los elementos esenciales para una experiencia de iGaming estable y funcional.",
  "legacy.modal.close": "Cerrar",
  "legacy.modal.name": "¿Cómo se llama?",
  "legacy.modal.email": "¿En qué dirección de correo electrónico corporativo le gustaría recibir la propuesta?",
  "legacy.modal.phone": "¿Podría darme su número de teléfono?",
  "legacy.modal.teamSize": "Por último, ¿cuántos empleados tiene su empresa?",
  "legacy.modal.team1": "1 a 10",
  "legacy.modal.team2": "11 a 50",
  "legacy.modal.team3": "51 a 100",
  "legacy.modal.team4": "Más de 100",
  "legacy.modal.submit": "Enviar",
} as const satisfies Record<Key, string>;

export const gamingLegacyErpTranslations = { "pt-BR": ptBR, es } as const;
