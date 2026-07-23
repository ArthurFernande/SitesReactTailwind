import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MenuIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function ArrowRightIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M5 12h14m-6-7 7 7-7 7" /></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="m5 12 4 4 10-10" /></svg>;
}

export function PlusIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M12 5v14M5 12h14" /></svg>;
}

export function PlayIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M8 5v14l11-7z" /></svg>;
}

export function FootballIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 3-2 3 2-1 4h-4L9 9Zm1 4-3 2m7-2 3 2M8.5 6.5 7 4.8m8.5 1.7L17 4.8M8.5 17.5 8 20m7.5-2.5.5 2.5" />
    </svg>
  );
}

export function BasketballIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12s1.2 6.5 3.5 9M3 12h18M5.5 6.5l13 11" /></svg>;
}

export function TennisIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><circle cx="12" cy="12" r="9" /><path d="M5.7 5.7c4.2 4.2 8.4 8.4 12.6 12.6M18.3 5.7c-2.4 2.4-4 4.5-4.7 6.3M5.7 18.3c2.4-2.4 4-4.5 4.7-6.3" /></svg>;
}

export function GamepadIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M8 8h8c3.5 0 5.5 8.5 3 10-1.7 1.7-4-2-5.5-2h-3C9 16 6.7 19.7 5 18 2.5 15.5 4.5 8 8 8Z" /><path d="M8 11v4m-2-2h4m6-1h.01m2 2h.01" /></svg>;
}

export function DiceIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="8" cy="8" r=".8" fill="currentColor" /><circle cx="16" cy="8" r=".8" fill="currentColor" /><circle cx="12" cy="12" r=".8" fill="currentColor" /><circle cx="8" cy="16" r=".8" fill="currentColor" /><circle cx="16" cy="16" r=".8" fill="currentColor" /></svg>;
}

export function RadioIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><circle cx="12" cy="12" r="2" /><path d="M8.5 8.5a5 5 0 0 0 0 7m7-7a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13m13-13a9 9 0 0 1 0 13" /></svg>;
}

export function RefreshIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M20 7v5h-5M4 17v-5h5" /><path d="M6.1 8a7 7 0 0 1 11.5-1L20 12M4 12l2.4 5a7 7 0 0 0 11.5-1" /></svg>;
}

export function ShieldIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="m12 2 9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4Z" /><path d="m9 12 2 2 4-4" /></svg>;
}

export function TrainIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><rect x="6" y="3" width="12" height="14" rx="3" /><path d="M8 7h8M8 12h.01M16 12h.01M8 17l-2 4m10-4 2 4M8 21h8" /></svg>;
}

export function ArcadeIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M5 5h14l2 14H3L5 5Z" /><path d="M8 10h4m-2-2v4m6-3h.01m2 2h.01M8 15h8" /></svg>;
}

export function RocketIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M14 4c3-2 5-2 6-2 0 1 0 3-2 6l-5 5-4-4 5-5Z" /><circle cx="15.5" cy="6.5" r="1.5" /><path d="M9 9 5 8l-3 3 5 1m6 1 1 5-3 3-1-5M6 18l-2 2" /></svg>;
}

export function FruitIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M12 8c-5-3-9 0-9 5a8 8 0 0 0 16 0c0-5-4-8-7-5Z" /><path d="M12 8c0-3 2-5 5-5M12 6C9 6 8 4 8 3c3 0 5 1 5 3" /></svg>;
}

export function MailIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 7 9-7" /></svg>;
}

export function MessageIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="m3 21 2-7a9 9 0 1 1 3.5 3.5L3 21Z" /></svg>;
}

export function StoreIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M3 20.5v-17c0-.6.4-1 1-1L17.4 11c.5.3.5 1.1 0 1.4L4 21.5c-.6 0-1-.4-1-1Z" /></svg>;
}

export function DeviceIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>;
}
