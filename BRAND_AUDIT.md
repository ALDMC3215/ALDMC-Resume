# BRAND AUDIT — ALDMC PERSIMMON V6
**Date**: October 2026  
**Auditor**: Creative Developer & Design Systems Engineer  
**Source Asset**: `references/ALDMC_Complete_Brand_Kit_v6_Persimmon.zip`  
**Status**: Verified & Approved  

---

## 1. Executive Summary

The official brand identity for **Ali Forghani / ALDMC** is defined by **ALDMC Complete Brand Kit v6 (Persimmon)**. The visual language combines an editorial studio aesthetic with precise product design principles: warm tactile paper foundations, deep rich charcoal ink, a vibrant persimmon orange accent, and geometric structural motifs.

No typography or logo geometry is left to assumption. All logos are available in exact vector SVG format without font dependencies.

---

## 2. Color Palette & Token System

### Core Brand Swatches
| Token Name | Hex Code | Role | Usage |
| :--- | :--- | :--- | :--- |
| **Persimmon (خرمالویی)** | `#E76338` | Primary Accent / Signature | CTAs, active states, key highlight marks, dark mode logo |
| **Charcoal (ذغالی)** | `#27211D` | Primary Ink / Dark Foundation | Light mode text, dark mode canvas, high-contrast borders |
| **Paper (کاغذی)** | `#F6F0E7` | Light Canvas / Warm Surface | Light mode background, dark mode typography |
| **Peach (هلویی همراه)** | `#F6B393` | Companion Accent / Subtle Tint | Secondary badges, soft hover states, persimmon theme surface |

### Semantic Tokens by Theme

#### Light Mode (Default)
- **Background (`--bg`)**: `#F6F0E7` (Paper)
- **Foreground (`--fg`)**: `#27211D` (Charcoal)
- **Surface (`--surface`)**: `#EEE7DC` (Soft tactile card surface)
- **Muted Text (`--muted`)**: `#74675F` (Warm muted charcoal)
- **Border (`--border`)**: `#DFD5C8` (Subtle boundary)
- **Logo Color (`--logo`)**: `#27211D` (Charcoal, with Persimmon mark accents)
- **Accent (`--brand-orange`)**: `#E76338`
- **Accent Hover**: `#F17B54`
- **On Accent (`--on-accent`)**: `#27211D` or `#FFFFFF` (for high contrast)

#### Dark Mode
- **Background (`--bg`)**: `#27211D` (Charcoal)
- **Foreground (`--fg`)**: `#F6F0E7` (Paper)
- **Surface (`--surface`)**: `#352D27` (Deep elevated charcoal)
- **Muted Text (`--muted`)**: `#C9BFB6` (Light warm gray)
- **Border (`--border`)**: `#594B40` (Refined dark boundary)
- **Logo Color (`--logo`)**: `#E76338` (Persimmon)
- **Accent (`--brand-orange`)**: `#E76338`
- **Accent Hover**: `#F17B54`
- **On Accent**: `#27211D`

#### Persimmon High-Energy Accent State
- **Background**: `#E76338`
- **Foreground**: `#27211D`
- **Surface**: `#F6B393`
- **Border**: `#BA4726`

---

## 3. Typography Hierarchy

The brand kit provides official variable font packages under SIL Open Font License:
1. **Persian Body & Display**: `Vazirmatn` (`11_Fonts/Vazirmatn-Variable.ttf`)
   - Weight spectrum: 100 to 900
   - Line height: `1.8` for comfortable Persian reading rhythm
   - Letter spacing: `0` (Persian glyphs must never be tracked or separated)
   - Layout: Native RTL (`dir="rtl"`, `lang="fa"`)
2. **Latin & Numerical / Technical**: `Manrope` (`11_Fonts/Manrope-Variable.ttf`)
   - Weight spectrum: 200 to 800
   - Line height: `1.6`
   - Used for code, English project tags, numbers, and Latin branding
   - Layout: Explicit LTR isolation (`dir="ltr"`) for embedded phrases

### Official Type Scale (from `tokens.json`)
`12px`, `14px`, `16px`, `20px`, `24px`, `32px`, `48px`, `64px`, `88px`

---

## 4. Spacing, Radii & Motion

### Spacing Scale
`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px` (8pt base grid)

### Radii Scale
- **`--radius-sm`**: `8px` (inputs, badges, small chips)
- **`--radius-md`**: `16px` (interactive buttons, standard cards)
- **`--radius-lg`**: `24px` (feature containers, modals, hero frames)
- **`--radius-pill`**: `999px` (status pills, toggle switches)

### Motion Specifications
- **Fast**: `150ms` (hover states, micro-interactions)
- **Normal**: `250ms` (card transitions, dropdowns, navigation open)
- **Slow**: `450ms` (layout changes, modal reveals, accordion expands)
- **Timing Curve**: `cubic-bezier(0.22, 1, 0.36, 1)` (snappy editorial ease-out)
- **Reduced Motion**: Full fallback via `@media (prefers-reduced-motion: reduce)`

---

## 5. Verified Logo & Visual Assets

### Official Logotypes (Vector SVGs)
1. **ALDMC Main Wordmark**: Outlined custom vectors with geometric precision.
   - `01_Logos_SVG/aldmc-currentcolor.svg` (adaptive)
   - `01_Logos_SVG/aldmc-persimmon.svg`
   - `01_Logos_SVG/aldmc-charcoal.svg`
   - `01_Logos_SVG/aldmc-paper.svg`
2. **ALDMC Monogram ('A')**: Iconic slanted vector apex.
   - `01_Logos_SVG/monogram-currentcolor.svg`
   - `01_Logos_SVG/monogram-persimmon.svg`
   - `01_Logos_SVG/monogram-charcoal.svg`
3. **Sub-Brands**:
   - `AL-MUSIC` (Music & AI audio production)
   - `ALDMC Studio` (Design & engineering work)
   - `ALDMC Origin` (Foundational design research)
4. **Symbols Sprite**:
   - `09_Design_System/logo-symbols.svg` with IDs `#aldmc`, `#al-music`, `#aldmc-origin`, `#aldmc-studio`, `#monogram`.

### Official Iconography
18 custom stroke icons (24px viewBox, 1.8 stroke width, round caps/joins):
- Navigation & Action: `arrow-right`, `arrow-up-right`, `search`, `download`, `check`
- Theme & Controls: `sun`, `moon`, `play`, `pause`
- Disciplines & Categories: `design`, `code`, `ai`, `music`, `image`, `user`, `folder`, `grid`, `heart`

### Visual Elements & Mockups
- Patterns: `07_Patterns_Backgrounds/` (diagonal, grid, monogram watermark)
- Real Editorial Mockups:
  - `08_Mockups/01-creative-ai-workspace.png` (Creative AI workspace)
  - `08_Mockups/02-music-release.png` (Music release artwork)
  - `08_Mockups/03-origin-social-profiles.png` (Origin branding & social)
  - `08_Mockups/04-stationery-brand-system.png` (Stationery & physical craft)
- Avatars & Favicons:
  - `04_Profiles_Avatars/compact-*.svg`
  - `04_Profiles_Avatars/favicon-light.svg`, `favicon-dark.svg`, `favicon-*.ico`
  - `04_Profiles_Avatars/aldmc-profile-*.png`

---

## 6. Implementation Directives for ALDMC-Resume

1. **Zero Guesswork**: Every hex code, border radius, and font size must map directly to the tokens above.
2. **Never Redraw Logos**: Use the exact SVGs from `01_Logos_SVG/` or symbols from `09_Design_System/logo-symbols.svg`.
3. **No Slop**: Avoid purple/cyan gradients, bouncy animations, generic card repeats, or template AI styling.
4. **Theme Persistence**: Support seamless toggle between Paper (Light) and Charcoal (Dark), defaulting to Light with persistent local storage.
5. **Persian Typography Perfection**: Use local `Vazirmatn-Variable.ttf` bundled into the application for zero external CDN latency and bulletproof rendering.
