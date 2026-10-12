export const RIDER_SVG = `
<g class="rider">
  <g class="far" data-bone="thigh-b">
    <path class="pants outline" d="M-13 0 Q0 -6 14 0 L19 67 Q10 76 -8 70 Z"/>
    <path class="accent outline" d="M8 21 L17 24 L16 31 L9 29 Z"/>
  </g>
  <g class="far" data-bone="shin-b">
    <path class="pants outline" d="M-10 0 Q1 -5 13 1 L12 64 Q4 72 -13 68 Z"/>
  </g>
  <g class="far" data-bone="foot-b">
    <path class="shoe outline" d="M-12 -2 Q5 -9 18 1 L25 21 Q39 23 47 31 L43 38 L-16 37 Q-23 29 -12 -2 Z"/>
    <path class="accent outline" d="M-10 23 Q9 29 34 28 L44 32 L43 38 L-16 37 Q-21 32 -10 23 Z"/>
    <circle class="wheel outline" cx="-9" cy="41" r="8"/>
    <circle class="wheel outline" cx="32" cy="41" r="8"/>
    <circle class="wheel-core" cx="-9" cy="41" r="2"/>
    <circle class="wheel-core" cx="32" cy="41" r="2"/>
  </g>
  <g class="far" data-bone="up-b">
    <path class="shirt outline" d="M-8 -8 Q8 -13 16 0 L12 47 Q2 56 -11 48 Z"/>
  </g>
  <g class="far" data-bone="fore-b">
    <path class="skin outline" d="M-7 0 Q4 -5 11 2 L14 42 Q9 55 -4 52 L-11 12 Z"/>
    <path class="glove outline" d="M-4 46 Q5 40 14 48 L16 59 Q8 67 -2 61 Z"/>
  </g>
  <g data-bone="hips">
    <path class="pants outline" d="M-24 -8 Q0 -18 25 -7 L22 15 Q0 25 -23 13 Z"/>
    <path class="accent" d="M-17 0 Q0 5 17 0 L16 5 Q0 11 -16 5 Z"/>
    <path class="ink-mark" d="M9 4 L12 1 L15 4 L12 8 Z"/>
  </g>
  <g data-bone="thigh-f">
    <path class="pants outline" d="M-14 0 Q0 -7 14 1 L11 68 Q2 77 -17 69 Z"/>
    <path class="accent outline" d="M-14 24 L-5 22 L-4 30 L-14 32 Z"/>
  </g>
  <g data-bone="shin-f">
    <path class="pants outline" d="M-12 0 Q2 -5 13 1 L7 66 Q-2 74 -18 67 Z"/>
  </g>
  <g data-bone="foot-f">
    <path class="shoe outline" d="M-13 -2 Q4 -9 18 1 L25 21 Q39 23 47 31 L43 38 L-16 37 Q-23 29 -13 -2 Z"/>
    <path class="accent outline" d="M-10 23 Q9 29 34 28 L44 32 L43 38 L-16 37 Q-21 32 -10 23 Z"/>
    <circle class="wheel outline" cx="-9" cy="41" r="8"/>
    <circle class="wheel outline" cx="32" cy="41" r="8"/>
    <circle class="wheel-core" cx="-9" cy="41" r="2"/>
    <circle class="wheel-core" cx="32" cy="41" r="2"/>
  </g>
  <g data-bone="spine">
    <path class="shirt outline" d="M-31 -10 Q-25 -28 -25 -76 Q-18 -94 0 -91 Q19 -92 27 -76 L31 -9 Q14 8 -12 5 Z"/>
    <path class="shirt-shade" d="M2 -84 Q18 -80 20 -66 L22 -27 Q11 -21 2 -26 Z"/>
    <path class="accent outline" d="M-20 -79 Q0 -91 18 -78 L13 -68 Q0 -60 -15 -67 Z"/>
    <path class="ink-mark" d="M-9 -47 L0 -57 L9 -47 L0 -37 Z"/>
    <path class="ink-mark" d="M-2 -47 L0 -49 L2 -47 L0 -45 Z"/>
    <path class="shirt-seam" d="M-19 -17 Q0 -10 18 -18"/>
  </g>
  <g data-bone="up-f">
    <path class="shirt outline" d="M-12 -8 Q5 -14 13 0 L10 49 Q1 57 -14 48 Z"/>
    <path class="accent outline" d="M-11 0 Q0 5 11 -1 L9 9 Q0 14 -12 9 Z"/>
  </g>
  <g data-bone="fore-f">
    <path class="skin outline" d="M-8 0 Q4 -5 11 2 L14 42 Q9 55 -4 52 L-11 12 Z"/>
    <path class="glove outline" d="M-4 46 Q5 40 14 48 L16 59 Q8 67 -2 61 Z"/>
  </g>
  <g data-bone="head">
    <path class="skin outline" d="M-18 -9 Q-14 -28 7 -29 Q27 -28 29 -6 L24 16 Q15 27 -3 21 Q-18 13 -18 -9 Z"/>
    <path class="skin-shade" d="M13 -19 Q25 -17 27 -5 L23 12 Q17 20 9 18 Z"/>
    <path class="helmet outline" d="M-21 -15 Q-17 -40 5 -42 Q27 -43 32 -21 L25 -15 L-15 -16 Z"/>
    <path class="helmet-shine" d="M-12 -25 Q-5 -37 9 -36 Q17 -35 20 -30 Q4 -32 -12 -25 Z"/>
    <path class="helmet outline" d="M22 -20 L34 -16 L29 -11 L18 -14 Z"/>
    <path class="helmet-strap" d="M-12 -13 Q-8 2 -2 8"/>
    <path class="ink-mark" d="M5 -25 L9 -30 L13 -25 L9 -20 Z"/>
  </g>
  <g class="feat">
    <g class="eye-n">
      <ellipse class="eye-white" cx="1.8" cy="8.6" rx="5.1" ry="6"/>
      <circle class="iris" data-eye="n" cx="3" cy="9.3" r="2.5"/>
    </g>
    <g class="far-eye">
      <g class="eye-f">
        <ellipse class="eye-white" cx="22.6" cy="9.2" rx="4.2" ry="5.3"/>
        <circle class="iris" data-eye="f" cx="23.6" cy="9.9" r="2.1"/>
      </g>
    </g>
    <path class="brow" d="M-3 1 Q2 -2 7 1 M19 2 Q23 0 27 3"/>
    <path class="smile" d="M13 13 Q18 17 22 13"/>
  </g>
</g>`;
