"use client";

import { Fragment } from "react";

import { useTranslation, type TranslationKey } from "@/components/traducaoButtons";
import styles from "./politica-de-privacidad.module.css";

type Entry = { type: "heading" | "paragraph"; key: TranslationKey };

const entries = [
  { type: "heading", key: "privacy.entry.00" },
  { type: "paragraph", key: "privacy.entry.01" },
  { type: "paragraph", key: "privacy.entry.02" },
  { type: "paragraph", key: "privacy.entry.03" },
  { type: "heading", key: "privacy.entry.04" },
  { type: "paragraph", key: "privacy.entry.05" },
  { type: "paragraph", key: "privacy.entry.06" },
  { type: "heading", key: "privacy.entry.07" },
  { type: "paragraph", key: "privacy.entry.08" },
  { type: "paragraph", key: "privacy.entry.09" },
  { type: "paragraph", key: "privacy.entry.10" },
  { type: "paragraph", key: "privacy.entry.11" },
  { type: "paragraph", key: "privacy.entry.12" },
  { type: "heading", key: "privacy.entry.13" },
  { type: "paragraph", key: "privacy.entry.14" },
  { type: "heading", key: "privacy.entry.15" },
  { type: "paragraph", key: "privacy.entry.16" },
  { type: "heading", key: "privacy.entry.17" },
  { type: "paragraph", key: "privacy.entry.18" },
  { type: "paragraph", key: "privacy.entry.19" },
  { type: "heading", key: "privacy.entry.20" },
  { type: "paragraph", key: "privacy.entry.21" },
  { type: "paragraph", key: "privacy.entry.22" },
  { type: "paragraph", key: "privacy.entry.23" },
  { type: "heading", key: "privacy.entry.24" },
  { type: "paragraph", key: "privacy.entry.25" },
  { type: "heading", key: "privacy.entry.26" },
  { type: "paragraph", key: "privacy.entry.27" },
  { type: "heading", key: "privacy.entry.28" },
  { type: "paragraph", key: "privacy.entry.29" },
  { type: "paragraph", key: "privacy.entry.30" },
  { type: "heading", key: "privacy.entry.31" },
  { type: "paragraph", key: "privacy.entry.32" },
  { type: "heading", key: "privacy.entry.33" },
  { type: "paragraph", key: "privacy.entry.34" },
  { type: "heading", key: "privacy.entry.35" },
  { type: "paragraph", key: "privacy.entry.36" },
  { type: "heading", key: "privacy.entry.37" },
  { type: "paragraph", key: "privacy.entry.38" },
  { type: "paragraph", key: "privacy.entry.39" },
  { type: "paragraph", key: "privacy.entry.40" },
  { type: "paragraph", key: "privacy.entry.41" },
] as const satisfies ReadonlyArray<Entry>;

function renderParagraph(text: string) {
  return text.split("\n").map((line, index) => {
    const isListItem = /^[a-h]\./.test(line);
    const content = line.startsWith("Texto sugerido:")
      ? <><strong>Texto sugerido: </strong>{line.slice("Texto sugerido: ".length)}</>
      : isListItem
        ? <><strong>{line.slice(0, 2)}</strong>{line.slice(2)}</>
        : line;

    return <Fragment key={`${line}-${index}`}>{index > 0 ? <br /> : null}{content}</Fragment>;
  });
}

export function PrivacyPolicyContent() {
  const { t } = useTranslation();

  return (
    <article className={styles.article}>
      {entries.map((entry) => {
        const text = t(entry.key);

        return (
          <Fragment key={entry.key}>
            {entry.type === "heading" ? <h2>{text}</h2> : <p>{renderParagraph(text)}</p>}
            {entry.key === "privacy.entry.28" ? <ol start={7}><li /></ol> : null}
          </Fragment>
        );
      })}
    </article>
  );
}
