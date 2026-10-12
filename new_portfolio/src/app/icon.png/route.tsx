import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";
import { colors } from "@/config/theme";

export const dynamic = "force-static";
const size = { width: 64, height: 64 };

export async function GET() {
  const localPath = join(process.cwd(), "src/assets/fonts/BowlbyOne-Regular.ttf");
  const nestedPath = join(process.cwd(), "new_portfolio/src/assets/fonts/BowlbyOne-Regular.ttf");
  const fontFile = existsSync(localPath) ? localPath : nestedPath;
  const bowlby = await readFile(fontFile);
  const initials = site.name.first[0] + site.name.last[0];
  return new ImageResponse(
    <div
      style={{
        width: 64,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <span
        style={{
          fontFamily: "Bowlby One",
          fontSize: 35,
          lineHeight: 1,
          letterSpacing: -2,
          color: colors.white,
          WebkitTextStroke: `3px ${colors.ink}`,
          textShadow: `3px 3px 0 ${colors.pink}`,
          marginTop: 4,
        }}
      >
        {initials}
      </span>
    </div>,
    { ...size, fonts: [{ name: "Bowlby One", data: bowlby, weight: 400, style: "normal" }] },
  );
}
