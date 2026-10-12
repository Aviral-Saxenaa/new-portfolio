import type { ThemeColor } from "@/types/content";

export const colors: Record<ThemeColor, string> = {
  paper: "#F7F2E8",
  paper2: "#E9E1D3",
  ink: "#202833",
  muted: "#5F6871",
  pink: "#F27C67",
  acid: "#F4C95D",
  blue: "#3478A5",
  cyan: "#72C8C2",
  grip: "#292F36",
  white: "#FFFFFF",
};

export const riderColors = {
  shirt: "#D75C43",
  pants: "#355C7D",
  skin: "#C9875D",
  helmet: "#F4C95D",
  shoe: "#F7F2E8",
  accent: "#72C8C2",
  wheel: "#202833",
};

export const cardTints = { ai: "#F8D0C5", ops: "#CFE0EA", be: "#F7E6AB", frame: "#75BDB5" };

export const parkColors = {
  board: "#284B45",
  cream: "#F7F2E8",
  bulb: "#F4C95D",
  leaf: "#7C9D77",
  leafDark: "#536F57",
  concrete: "#D6D0C5",
  steel: "#65727D",
  ramp: "#E9E1D3",
  post: "#8B634A",
  wood: "#C9A27A",
};

export const heroSky = { tint: "#C5E8E2", cloud: colors.white, strength: 0.5 };
export const partyColors = [colors.pink, colors.acid, colors.blue, colors.white, colors.cyan];

export const layout = {
  railRight: 96,
  bottomRail: { inset: 26 },
  contentRight: { desktop: 150, mobile: 16 },
  deckRow: { peek: { min: 0.25, max: 0.65 }, zoom: { min: 0.8, max: 1.2 } },
  gutter: { desktop: 24, mobile: 16 },
  maxWidth: 1280,
  mobileBreakpoint: 700,
};

const kebab = (value: string) => value.replace(/[A-Z0-9]+/g, (part) => `-${part.toLowerCase()}`);

export function themeCss(): string {
  const palette = Object.entries(colors)
    .map(([key, value]) => `--${kebab(key)}:${value};`)
    .join("");
  const cards = Object.entries(cardTints)
    .map(([key, value]) => `--card-${key}:${value};`)
    .join("");
  const rider = Object.entries(riderColors)
    .map(([key, value]) => `--rider-${kebab(key)}:${value};`)
    .join("");
  const park = Object.entries(parkColors)
    .map(([key, value]) => `--park-${kebab(key)}:${value};`)
    .join("");
  const sky = Object.entries(heroSky)
    .map(([key, value]) => `--hero-sky-${kebab(key)}:${value};`)
    .join("");
  const desktop = [
    `--rail-right:${layout.railRight}px;`,
    `--content-right:${layout.contentRight.desktop}px;`,
    `--gutter:${layout.gutter.desktop}px;`,
    `--max-width:${layout.maxWidth}px;`,
    `--rail-bottom:${layout.bottomRail.inset}px;`,
  ].join("");
  const mobile = `--content-right:${layout.contentRight.mobile}px;--gutter:${layout.gutter.mobile}px;`;

  return `:root{color-scheme:light;${palette}${cards}${rider}${park}${sky}${desktop}}@media (max-width:${layout.mobileBreakpoint}px){:root{${mobile}}}`;
}
