import { useId, useMemo } from "react";
import type { DeckArt as Art } from "@/types/content";
import { full } from "@/features/ride/engine/poses";
import { riderMarkup } from "@/features/ride/engine/skaterRig";
import riderArt from "@/features/ride/riderArt.module.css";

/* Cover art for the deck fronts, one per project, drawn in the site palette with ink outlines. */

const ink = "var(--ink)";
const pink = "var(--pink)";
const acid = "var(--acid)";
const white = "var(--white)";
const paper = "var(--paper)";
/* greys mixed from the palette for screens, grooves and dimmed text */
const shade = (pct: number) => `color-mix(in srgb, ${ink} ${pct}%, ${paper})`;
const mono = { fontFamily: "var(--font-mono)", fontWeight: 600 };
const body = { fontFamily: "var(--font-body)", fontWeight: 600 };
const line = { stroke: ink, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;

/** UpStream: file chunks stacking up past an upload arrow, one marked as resuming */
function Upload() {
  return (
    <>
      <g {...line}>
        <rect x="30" y="150" width="70" height="26" fill={acid} />
        <rect x="30" y="118" width="70" height="26" fill={acid} />
        <rect x="30" y="86" width="70" height="26" fill={acid} />
        <rect x="30" y="54" width="70" height="26" fill={white} strokeDasharray="6 5" />
        <rect x="44" y="18" width="70" height="26" fill={acid} transform="rotate(8 79 31)" />
        <path d="M132 176 V40 M118 58 L132 40 L146 58" fill="none" strokeWidth="5" />
      </g>
      <g style={mono} fontSize="10" fill={ink}>
        <text x="38" y="167">
          0–1 MB
        </text>
        <text x="38" y="135">
          1–2 MB
        </text>
        <text x="38" y="103">
          2–3 MB
        </text>
        <text x="40" y="71">
          resume…
        </text>
      </g>
      <circle cx="132" cy="112" r="11" fill={white} {...line} />
      <path d="M127 112 h10 M132 107 v10" stroke={ink} strokeWidth="3" transform="rotate(45 132 112)" />
    </>
  );
}

/** Synth: a record with its tone arm, and an equaliser streaming out below */
function Stream() {
  // kept a few px below the "206 PARTIAL CONTENT" label
  const bars = [12, 22, 15, 29, 19, 32, 14, 24, 17, 10];
  return (
    <>
      <circle cx="84" cy="74" r="62" fill={ink} {...line} />
      <g fill="none" stroke={shade(80)} strokeWidth="2">
        <circle cx="84" cy="74" r="50" />
        <circle cx="84" cy="74" r="40" />
        <circle cx="84" cy="74" r="30" />
      </g>
      <circle cx="84" cy="74" r="18" fill={pink} {...line} />
      <circle cx="84" cy="74" r="4" fill={ink} />
      <path d="M150 14 L118 60" stroke={paper} strokeWidth="6" strokeLinecap="round" />
      <circle cx="150" cy="14" r="8" fill={paper} {...line} />
      <g {...line} fill={acid}>
        {bars.map((h, i) => (
          <rect key={i} x={16 + i * 14} y={190 - h} width="10" height={h} />
        ))}
      </g>
      <text x="84" y="150" textAnchor="middle" style={mono} fontSize="10" fill={white}>
        206 PARTIAL CONTENT
      </text>
    </>
  );
}

/** API Watch: a log monitor with a heartbeat line and live rows */
function Monitor() {
  return (
    <>
      <rect x="10" y="18" width="148" height="128" rx="8" fill={ink} {...line} />
      <path
        d="M18 70 H50 L60 48 L72 98 L84 36 L96 84 L104 70 H150"
        fill="none"
        stroke={pink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <g style={mono} fontSize="9">
        <text x="20" y="116" fill={acid}>
          GET /orders 200
        </text>
        <text x="20" y="130" fill={white}>
          POST /auth 201
        </text>
      </g>
      <circle cx="146" cy="32" r="5" fill={pink} />
      <text x="138" y="35" textAnchor="end" style={mono} fontSize="8" fill={white}>
        LIVE
      </text>
      <path d="M70 146 L62 172 H106 L98 146" fill={paper} {...line} />
      <rect x="46" y="172" width="76" height="12" rx="3" fill={paper} {...line} />
    </>
  );
}

/** Pop Lyrics: a music tab behind, and the always-on-top lyrics window floating over it */
function Lyrics() {
  return (
    <>
      <rect x="8" y="30" width="112" height="86" rx="6" fill={shade(90)} stroke={paper} strokeWidth="2" />
      <g fill={shade(70)}>
        <rect x="18" y="46" width="40" height="40" rx="3" />
        <rect x="66" y="50" width="44" height="6" rx="3" />
        <rect x="66" y="64" width="30" height="6" rx="3" />
      </g>
      <g transform="rotate(-6 100 120)">
        <rect x="46" y="74" width="114" height="104" rx="8" fill={paper} {...line} />
        <rect x="46" y="74" width="114" height="18" rx="8" fill={acid} {...line} />
        <circle cx="58" cy="83" r="3" fill={ink} />
        <circle cx="68" cy="83" r="3" fill={ink} />
        <g style={body} fontSize="11">
          <text x="56" y="112" fill={shade(40)}>
            and the night
          </text>
          <rect x="52" y="120" width="102" height="18" fill={pink} />
          <text x="56" y="133" fill={ink}>
            goes on and on
          </text>
          <text x="56" y="156" fill={shade(40)}>
            under city lights
          </text>
        </g>
      </g>
      <path d="M30 150 v-30 l18 -6 v30" fill="none" stroke={acid} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="25" cy="152" r="7" fill={acid} />
      <circle cx="43" cy="146" r="7" fill={acid} />
    </>
  );
}

/** A route connecting stops on a compact itinerary map. */
function Trip() {
  return (
    <>
      <rect x="12" y="24" width="144" height="148" rx="10" fill={paper} {...line} />
      <path
        d="M20 62 C42 46 53 84 77 66 S112 44 148 64 M20 126 C46 105 61 145 92 121 S124 106 148 126"
        fill="none"
        stroke={shade(12)}
        strokeWidth="2"
        strokeDasharray="4 5"
      />
      <path
        d="M38 112 C54 105 55 73 81 79 S102 123 131 91"
        fill="none"
        stroke={pink}
        strokeWidth="4"
        strokeDasharray="5 4"
        strokeLinecap="round"
      />
      <g {...line}>
        <path d="M38 103 C38 94 51 94 51 103 C51 109 44.5 117 44.5 117 S38 109 38 103Z" fill={acid} />
        <path d="M75 70 C75 61 88 61 88 70 C88 76 81.5 84 81.5 84 S75 76 75 70Z" fill={pink} />
        <path d="M124 82 C124 73 137 73 137 82 C137 88 130.5 96 130.5 96 S124 88 124 82Z" fill={acid} />
      </g>
      <circle cx="44.5" cy="102" r="2.5" fill={ink} />
      <circle cx="81.5" cy="69" r="2.5" fill={ink} />
      <circle cx="130.5" cy="81" r="2.5" fill={ink} />
      <rect x="25" y="137" width="118" height="24" rx="5" fill={ink} />
      <text x="84" y="147" textAnchor="middle" style={mono} fontSize="7" fill={acid}>
        AI TRAVEL CREW
      </text>
      <text x="84" y="156" textAnchor="middle" style={mono} fontSize="7" fill={white}>
        PLAN · BUDGET · EXPLORE
      </text>
    </>
  );
}

/** A live collaborative code editor with a saved snippet card. */
function Snip() {
  return (
    <>
      <rect x="10" y="28" width="148" height="120" rx="8" fill={ink} {...line} />
      <path d="M10 50 H158" stroke={paper} strokeWidth="2" />
      <circle cx="23" cy="39" r="3" fill={pink} />
      <circle cx="34" cy="39" r="3" fill={acid} />
      <circle cx="45" cy="39" r="3" fill={white} />
      <text x="57" y="42" style={mono} fontSize="7" fill={white}>
        snippet.js
      </text>
      <g style={mono} fontSize="9">
        <text x="22" y="68" fill={pink}>
          const
        </text>
        <text x="53" y="68" fill={acid}>
          greet
        </text>
        <text x="83" y="68" fill={white}>
          = () =&gt; {"{"}
        </text>
        <text x="30" y="86" fill={white}>
          return
        </text>
        <text x="62" y="86" fill={acid}>
          "hello"
        </text>
        <text x="30" y="104" fill={white}>
          console.log
        </text>
        <text x="84" y="104" fill={pink}>
          (greet)
        </text>
        <text x="22" y="122" fill={acid}>
          {"}"}
        </text>
      </g>
      <rect x="36" y="156" width="96" height="24" rx="12" fill={paper} {...line} />
      <circle cx="51" cy="168" r="5" fill={pink} />
      <circle cx="61" cy="168" r="5" fill={acid} />
      <text x="98" y="171" textAnchor="middle" style={mono} fontSize="8" fill={ink}>
        LIVE SYNC
      </text>
      <path d="M142 61 l7 7 -7 7" fill="none" stroke={acid} strokeWidth="2" />
    </>
  );
}

/** A ghost hovering above an inbox of unanswered interview follow-ups. */
function Ghost() {
  return (
    <>
      <rect x="17" y="62" width="134" height="101" rx="8" fill={paper} {...line} />
      <path d="M19 69 L84 117 L149 69" fill="none" stroke={ink} strokeWidth="3" />
      <path d="M20 151 L64 111 M148 151 L104 111" fill="none" stroke={ink} strokeWidth="3" />
      <path d="M48 90 H104 M48 101 H88" stroke={shade(45)} strokeWidth="3" strokeLinecap="round" />
      <rect x="82" y="126" width="61" height="22" rx="11" fill={pink} {...line} />
      <text x="112.5" y="140" textAnchor="middle" style={mono} fontSize="8" fill={ink}>
        NO REPLY
      </text>
      <path
        d="M52 66 C52 42 66 27 84 27 C102 27 116 42 116 66 V78 L105 70 L95 78 L84 70 L73 78 L63 70 L52 78Z"
        fill={white}
        {...line}
      />
      <ellipse cx="74" cy="52" rx="3" ry="5" fill={ink} />
      <ellipse cx="94" cy="52" rx="3" ry="5" fill={ink} />
      <path d="M77 63 Q84 69 91 63" fill="none" stroke={pink} strokeWidth="3" strokeLinecap="round" />
      <path d="M129 30 V40 M124 35 H134" stroke={acid} strokeWidth="2" strokeLinecap="round" />
      <path d="M37 40 V46 M34 43 H40" stroke={pink} strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

/** the cover's jump: front knee tucked, back leg trailing, arms spread (angles as in poses.ts) */
const JUMP = full({
  tL: 1.35,
  kL: -2.0,
  tR: 0.35,
  kR: -1.35,
  sL: 1.85,
  eL: 0.35,
  sR: -1.5,
  eR: 0.5,
  lean: 0.35,
  yaw: -0.1,
});
/** where the rider sits on the cover: the lowest wheel at (x, y), at `scale` cover units per rider unit */
const RIDER_AT = { x: 80, y: 140, scale: 0.42 };

/** aviralsaxena.me (this site): the page's own rider (the same art and rig), jumping the course rail under a cyan sky */
function Site() {
  const tag = useId().replace(/\W/g, "");
  const rider = useMemo(() => riderMarkup(JUMP, tag, 2.4 / RIDER_AT.scale, true), [tag]);
  return (
    <>
      <g fill={white}>
        <circle cx="18" cy="30" r="9" />
        <circle cx="30" cy="25" r="12" />
        <circle cx="42" cy="31" r="8" />
        <circle cx="140" cy="118" r="8" />
        <circle cx="151" cy="113" r="10" />
        <circle cx="161" cy="119" r="7" />
      </g>
      <g stroke={ink} strokeWidth="3" strokeLinecap="round">
        <path d="M22 80 H42 M14 92 H38 M24 104 H44" />
      </g>
      <g
        className={riderArt.art}
        transform={`translate(${RIDER_AT.x} ${RIDER_AT.y}) scale(${RIDER_AT.scale})`}
        dangerouslySetInnerHTML={{ __html: rider }}
      />
      {/* the rail: the same ink line and pink checkpoints as the page's scrollbar */}
      <g {...line}>
        <rect x="30" y="168" width="6" height="32" fill={shade(30)} />
        <rect x="128" y="168" width="6" height="32" fill={shade(30)} />
        <rect x="8" y="162" width="152" height="8" rx="4" fill={ink} />
      </g>
      <g fill={pink} stroke={paper} strokeWidth="1.5">
        <circle cx="26" cy="166" r="3.5" />
        <circle cx="66" cy="166" r="3.5" />
        <circle cx="104" cy="166" r="3.5" />
        <circle cx="142" cy="166" r="3.5" />
      </g>
    </>
  );
}

const arts: Record<Art, () => React.JSX.Element> = {
  upload: Upload,
  stream: Stream,
  monitor: Monitor,
  lyrics: Lyrics,
  site: Site,
  trip: Trip,
  ghost: Ghost,
  snip: Snip,
};

export default function DeckArt({ art, className }: { art: Art; className?: string }) {
  const Art = arts[art];
  return (
    <svg className={className} viewBox="0 0 168 204" aria-hidden="true" focusable="false">
      <Art />
    </svg>
  );
}
