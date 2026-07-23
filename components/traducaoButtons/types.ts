export type Language = "pt-BR" | "es";

export type TranslationKey =
  | "header.home" | "header.solutions" | "header.about" | "header.contact" | "header.differentials" | "header.portfolio" | "header.talkToTeam" | "header.openMenu" | "header.closeMenu"
  | "language.portuguese" | "language.spanish" | "language.selectPortuguese" | "language.selectSpanish"
  | "whatsapp.open" | "whatsapp.close" | "whatsapp.title" | "whatsapp.available" | "whatsapp.nameQuestion" | "whatsapp.emailQuestion" | "whatsapp.phoneQuestion" | "whatsapp.employeesQuestion" | "whatsapp.namePlaceholder" | "whatsapp.emailPlaceholder" | "whatsapp.phonePlaceholder" | "whatsapp.confirm" | "whatsapp.send" | "whatsapp.wait" | "whatsapp.back" | "whatsapp.secure" | "whatsapp.typing" | "whatsapp.finished" | "whatsapp.reset" | "whatsapp.invalidField" | "whatsapp.submitError" | "whatsapp.redirectMessage" | "whatsapp.employee1" | "whatsapp.employee2" | "whatsapp.employee3" | "whatsapp.employee4"
  | "form.name" | "form.whatsapp" | "form.city" | "form.submit" | "form.submitting" | "form.successTitle" | "form.successMessage" | "form.reset" | "form.submitError";

export type TranslationMap = Record<TranslationKey, string>;
