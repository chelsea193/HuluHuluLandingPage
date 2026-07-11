# Hulu Hulu — Typography Documentation

This document catalogs every font family and font size used across the landing page, and
which piece of on-screen wording each one applies to. Source of truth: `src/index.css`
(font loading + tailwind theme) and the component files under `src/components/` (the
version served at `/`) and `src/v2/components/` (served at `/version2`, same type system).

---

## 1. Font families

All fonts are loaded from Google Fonts in `src/index.css:1` and registered as Tailwind
theme tokens / utility classes in the same file.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400&family=Noto+Sans+SC:wght@100..900&family=Noto+Serif+SC:wght@200..900&display=swap');
```

| Family | CSS access | Tailwind class | Used for |
| --- | --- | --- | --- |
| **Inter** | `--font-sans` | `font-sans` (also the default body font) | Latin/English UI labels, nav links, buttons, tags, food-tag chips |
| **Noto Sans SC** | class only | `font-noto-sans-sc` | The primary Chinese body/UI font — headlines, paragraphs, card titles, buttons, most Chinese copy site-wide |
| **Noto Serif SC** | `--font-serif` (default) + class | `font-serif` and `font-noto-serif-sc` | Chinese serif accents — quote/closing-statement headlines, small labels, editorial emphasis |
| **JetBrains Mono** | `--font-mono` | `font-mono` | All-caps tracked micro-labels/eyebrows (e.g. "COMMON CONCERNS", "FOOD IS ENERGY"), numeric/code-style tags |
| **Ma Shan Zheng** (calligraphy) | class only | `.calligraphy-text` | Defined in CSS but **not currently used** in any component |
| Fallbacks | — | — | `font-sans` → `ui-sans-serif, system-ui, sans-serif`; `font-serif` → `"Playfair Display", Georgia, serif`; `font-mono` → `ui-monospace, SFMono-Regular, monospace` |

Body default (`src/index.css:31-38`): `font-family: var(--font-sans)` → Inter, on `<body>`.

> Note: `font-serif` (Tailwind's `--font-serif` token) resolves to **Noto Serif SC** first,
> so plain `font-serif` and explicit `font-noto-serif-sc` render identically for Chinese
> text; a few components (e.g. headline in BrandPositioning, food name in YinYangBalance
> detail card) use bare `font-serif` instead of the SC class — same rendered font.

---

## 2. Font-size scale

Tailwind's default `rem`-based scale is used throughout, plus a handful of arbitrary
pixel sizes for micro-copy. 1rem = 16px (browser default).

| Tailwind class | Size | Line-height | Typical use on this site |
| --- | --- | --- | --- |
| `text-[9px]` | 9px | — | Five Elements node English label (e.g. "WOOD") |
| `text-[10px]` | 10px | — | Eyebrow tags ("RECOMMENDED BASIS", QR caption, energy-tag badges, footer copyright) |
| `text-[11px]` | 11px | — | Yin/Yang "极阴/极阳现象" callouts, QR footer captions |
| `text-xs` | 12px | 16px | The most common micro-copy size: eyebrow labels, nav links, badges, footnotes, card meta |
| `text-[15px]` | 15px | — | Brand-positioning bullet list body copy (mobile) |
| `text-sm` | 14px | 20px | Secondary body copy, card descriptions, subtext |
| `text-base` | 16px | 24px | Yin/Yang food-button names, default paragraph size |
| `text-lg` | 18px | 28px | Section intros, feature titles, some subtitles |
| `text-xl` | 20px | 28px | Card headings, hero sub-line, active-food name |
| `text-2xl` | 24px | 32px | Section card headings (h3), central wheel display (base) |
| `text-3xl` | 30px | 36px | Section h2 headlines (mobile) |
| `text-4xl` | 36px | 40px | Section h2 headlines (desktop `md:`), closing-statement headline |
| `text-5xl` | 48px | 1 | Hero h1 (desktop `md:`), gallery/CTA headline (desktop) |
| `text-6xl` | 60px | 1 | Hero h1 (large desktop `md:`) |

Arbitrary pixel sizes above (`text-[9px]`, `text-[10px]`, `text-[11px]`, `text-[15px]`) are
hand-picked exceptions to the default scale, used only where the standard steps didn't fit
(mostly compact badges and captions).

The `.calligraphy-text` utility (`src/index.css:25-29`) sets a fixed `font-size: 28px;
line-height: 1.6` — defined for future use, not currently applied anywhere.

---

## 3. Wording → font/size map, by section

Each row cites the component file so you can jump straight to the source.

### Global header / nav — `src/App.tsx`
| Text | Font | Size |
| --- | --- | --- |
| "Hulu Hulu" (logo) | `font-serif` (Noto Serif SC) black | `text-xl` (20px) |
| "FOOD IS ENERGY" (logo subtag) | `font-mono` bold | `text-[8px]` |
| Nav links ("能量启航", "警惕失衡", "五行食能", "阴阳调和", "原型食愈", "食愈世界") | `font-sans` semibold | `text-xs` (12px) |
| "WhatsApp 咨询门径" (header CTA button) | `font-sans` semibold (default, no SC class) | `text-xs` (12px) |
| Mobile nav links | `font-sans` bold | `text-sm` (14px) |

### Section 1 — Hero (`src/components/HeroSection.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "FOOD IS ENERGY · 食物即能量" (pill) | `font-mono` black | `text-xs` (12px) |
| "你多久没有好好吃饭了？" (h1) | `font-noto-sans-sc` black | `text-4xl` → `text-5xl` (sm) → `text-6xl` (md) — 36/48/60px |
| "食物不只是卡路里" | `font-noto-serif-sc` medium | `text-2xl` (24px) |
| "它会影响你的身体能量、情绪状态与生活品质。" | `font-noto-serif-sc` light | `text-sm` → `text-base` (sm) — 14/16px |
| "【了解食物能量】" (primary CTA button) | `font-noto-sans-sc` semibold | `text-sm` (14px) |
| "— BY HULU HULU WELLNESS" | `font-mono` | `text-xs` (12px) |

### Section 2 — Pain Points (`src/components/PainPoints.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "COMMON CONCERNS" | `font-mono` semibold | `text-xs` (12px) |
| "为什么同样吃得健康，却还是觉得不舒服？" (h2) | `font-noto-sans-sc` | `text-3xl` → `text-4xl` (md) |
| "你是否经常出现以下情况？" | `font-noto-sans-sc` light | `text-lg` (18px) |
| Card titles (e.g. per pain point) | `font-noto-sans-sc` semibold | `text-xl` (20px) |
| Card descriptions | `font-noto-sans-sc` light | `text-sm` (14px) |
| "0X // ENERGY BLOCK" card index tag | `font-mono` bold | `text-xs` (12px) |
| **Closing quote box** — "DIETARY INSPIRATION" pill | `font-mono` semibold | `text-xs` (12px) |
| Closing quote body ("很多时候，问题不只是吃什么…") | `font-noto-sans-sc` | `text-xl` → `text-2xl` (md) |
| Closing quote headline ("其实，好好吃饭就能解决。") | `font-noto-serif-sc` bold | `text-2xl` → `text-4xl` (md) |

### Section 3 — Five Elements Wheel (`src/components/FiveElementsWheel.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "FOOD IS ENERGY & VITALITY" | `font-mono` bold | `text-xs` (12px) |
| "重新认识你每天吃的食物" (h2) | `font-noto-sans-sc` | `text-3xl` → `text-4xl` (md) |
| Intro paragraph ("食物不只是卡路里…") | `font-noto-serif-sc` italic | `text-lg` → `text-xl` (md) |
| "ACTIVE ENERGY" (wheel center label) | `font-noto-serif-sc` | `text-xs` (12px) |
| Center active element name (e.g. "土") | `font-serif` black | `text-4xl` → `text-5xl` (sm) |
| Center element English name | `font-serif` | `text-xs` (12px) |
| Wheel node Chinese label (e.g. "木") | `font-serif` bold | `text-lg` → `text-xl` (md) |
| Wheel node English label | inherits `font-serif` from button | `text-[9px]` |
| "* 点击五行粒子…" hint | `font-mono` | `text-xs` (12px) |
| Panel title ("土形能量 · Earth Energy") | `font-noto-sans-sc` bold | `text-2xl` (24px) |
| Panel subtitle ("对应腑脏：…") | `font-noto-sans-sc` | `text-sm` (14px) |
| "能量本征：…" pill | `font-noto-sans-sc` medium | `text-sm` (14px) |
| Element description paragraph | `font-noto-sans-sc` light | `text-sm` (14px) |
| "代表性能量食物 (Representative Foods)" | `font-noto-serif-sc` semibold | `text-xs` (12px) |
| Food tag chips | `font-sans` medium | `text-xs` (12px) |
| Closing wisdom paragraph | `font-noto-sans-sc` light | `text-sm` (14px) |

### Section 4 — Yin/Yang Balance (`src/components/YinYangBalance.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "YIN & YANG POLARITY" | `font-mono` bold | `text-xs` (12px) |
| "食物能量学：阴与阳的平衡" (h2, on image band) | `font-noto-sans-sc` | `text-3xl` → `text-4xl` (md) |
| "阴" / "阳" badge letter | `font-noto-serif-sc` bold | default (inherits, ~base) |
| "阴性食物（Yin Expansion）" / "阳性食物（Yang Contraction）" (h3) | `font-noto-sans-sc` bold | `text-2xl` (24px) |
| "特性：冷却 / 扩张 / 沉静 / 稀薄 / 离心" etc. | `font-noto-serif-sc` medium | `text-xs` (12px) |
| Food button name (e.g. "牛奶") | `font-noto-sans-sc` semibold | `text-base` (16px) |
| Food button description | `font-noto-sans-sc` light | `text-xs` (12px) |
| "Level N Yin/Yang" chip | `font-noto-serif-sc` | `text-[10px]` |
| "💡 极阴/极阳现象：" | `font-noto-serif-sc` | `text-[11px]` |
| Extreme-case explanation text | `font-noto-sans-sc` light | `text-[11px]` |
| "EXPLORING POLARITY DETAILS" | `font-mono` bold | `text-xs` (12px) |
| Active food name in detail card | `font-serif` semibold | `text-xl` (20px) |
| "阴性 (Cooling)" / "阳性 (Warming)" pill | `font-noto-serif-sc` semibold | `text-xs` (12px) |
| "Energy Rating: N / 3 Polar Intensity" | `font-mono` | `text-xs` (12px) |
| Food detail description | `font-noto-sans-sc` light | `text-sm` (14px) |
| "微言：…" warning block | `font-noto-serif-sc` | `text-xs` (12px) |
| "阴 (YIN)" / "(YANG) 阳" slider labels | `font-noto-serif-sc` black | `text-xs` (12px) |
| "Balance Dashboard" | `font-noto-serif-sc` semibold | `text-xs` (12px) |
| "此能量偏移：…" result badge | `font-noto-serif-sc` bold | `text-xs` (12px) |
| Slider helper caption | `font-noto-sans-sc` light | `text-xs` (12px) |
| **Closing quote box** accent pill ("YIN & YANG BALANCE") | `font-mono` semibold | `text-xs` (12px) |
| Closing quote text ("偏阴不行，偏阳也不行…") | `font-noto-sans-sc` | `text-xl` → `text-2xl` (md) |
| Attribution ("—— Hulu Hulu 饮食") | `font-noto-serif-sc` semibold | `text-xs` (12px) |

### Section 6 — Whole Food vs. Supplement (`src/components/CompareSection.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "WHOLE FOOD VS SUPPLEMENT" | `font-mono` extrabold | `text-xs` (12px) |
| "为什么只靠保健品并不足够？" (h2) | `font-noto-sans-sc` | `text-3xl` → `text-4xl` (md) |
| "保健品是补充，食物才是基础" | `font-noto-sans-sc` semibold | `text-lg` → `text-xl` (md) |
| "保健品" / "天然食物" (card h3) | `font-noto-sans-sc` black | `text-2xl` (24px) |
| "EXTRACTED pill" / "WHOLE FOOD MATRIX" tag | `font-mono` | `text-xs` (12px) |
| Card summary (italic) | `font-noto-sans-sc` light italic | `text-sm` (14px) |
| List item strong labels (e.g. "单一营养提取…") | `font-noto-sans-sc` | `text-sm` (14px) |
| List item detail text | `font-noto-sans-sc` light | `text-xs` (12px) |
| Disclaimer / proclaim footer note | `font-noto-serif-sc` light | `text-xs` (12px) |
| "RECOMMENDED BASIS" ribbon | `font-mono` bold | `text-[10px]` |

### Section 7 — Food Gallery (`src/components/FoodGallery.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "HULU HULU WORLD" | `font-mono` black | `text-xs` (12px) |
| "健康 · 好吃 · 能量" | `font-noto-sans-sc` semibold | `text-sm` → `text-base` (md) |
| "让食物不仅好吃，还吃出身体的能量" (h2) | `font-noto-sans-sc` | `text-3xl` → `text-5xl` (md) |
| Category filter tabs (e.g. "全部食物 (All)") | `font-sans` medium | `text-xs` (12px) |
| Card category tag (e.g. "午餐/简餐") | `font-mono` bold | `text-[10px]` |
| Card Chinese title | `font-serif` bold | `text-xl` (20px) |
| Card English title | `font-mono` | `text-xs` (12px) |
| Card description | default sans, light | `text-xs` (12px) |
| "点击了解能量特性" | `font-noto-sans-sc` medium | `text-[11px]` |
| Energy badge overlay (e.g. "稍微偏阴 (Cooling Yin)") | `font-noto-serif-sc` semibold | `text-[10px]` |
| **Lightbox modal:** category badge | `font-mono` bold | `text-xs` (12px) |
| Lightbox Chinese title | `font-serif` black | `text-2xl` (24px) |
| Lightbox English title | `font-mono` | `text-sm` (14px) |
| "食物能量特性：" label | `font-noto-sans-sc` medium | `text-xs` (12px) |
| Lightbox narrative description | default, light | `text-sm` (14px) |
| "✓ 能量滋补效益 (Energy Benefits)" | default bold | `text-xs` (12px) |
| Benefit list items | default light | `text-xs` → `text-sm` (md) |
| "返回世界页 Back" button | default semibold | `text-xs` (12px) |

### Section 8 — Final CTA & Footer (`src/components/FooterAndCTA.tsx`)
| Text | Font | Size |
| --- | --- | --- |
| "EMBARK ON YOUR HEALTH JOURNEY" | `font-mono` extrabold | `text-[10px]` |
| "开启你的食物能量旅程" (h2) | `font-noto-sans-sc` | `text-3xl` → `text-5xl` (md) |
| CTA description ("加入 Hulu Hulu 社群…") | `font-noto-sans-sc` light | `text-sm` → `text-base` (md) |
| "进入 Hulu Hulu 食物能量世界" (button) | default semibold | `text-sm` (14px) |
| "WhatsApp 咨询" (button) | default medium | `text-xs` → `text-sm` (sm) |
| Success banner message | default medium | `text-xs` (12px) |
| Trust line ("超过 1,850+ 位会员…") | `font-noto-sans-sc` | `text-xs` (12px) |
| "扫码了解更多" | `font-noto-serif-sc` bold | `text-[10px]` |
| "[ QR Code Center ]" | `font-noto-serif-sc` semibold | `text-[11px]` |
| QR caption ("微信/小红书扫描二维码…") | `font-noto-serif-sc` light | `text-[10px]` |
| "Hulu Hulu" (footer brand) | `font-noto-serif-sc` black | `text-2xl` (24px) |
| "Food Is Energy" tag | `font-mono` bold | `text-[10px]` |
| Footer brand blurb | `font-noto-sans-sc` light | `text-xs` → `text-sm` (md) |
| "联络我们 CONTACTS" / "关注我们 FOLLOW US" | `font-noto-serif-sc` extrabold | `text-xs` (12px) |
| Contact rows (WhatsApp/Email/Address) | `font-noto-sans-sc`, semibold label + light value | `text-xs` (12px) |
| Social links (Facebook/Instagram/WhatsApp) | `font-noto-sans-sc` light | `text-xs` (12px) |
| Copyright line + legal links | `font-mono` | `text-[10px]` |

### Unused components (not rendered by either `App.tsx`; present in repo but commented out)
- `src/components/BrandPositioning.tsx` — headings in `font-serif` black `text-3xl`/`text-4xl` and `text-xl`/`text-2xl`; body bullets in `font-sans` `text-[15px]`/`text-base`; closing quote in `font-serif` `text-lg`/`text-2xl`.
- `src/components/MacrobioticWisdom.tsx` — heading `font-serif` bold `text-3xl`/`text-4xl`; feature titles `font-serif` semibold `text-lg`; body copy default light `text-lg`/`text-xs`/`text-sm`; overlay quote `font-serif` semibold italic `text-base`/`text-lg`.

---

## 4. `/version2` (`src/v2/`)

`src/v2/App.tsx` is byte-identical to `src/App.tsx`. All v2 components use the exact same
font families and font-size classes as their v1 counterparts (`font-noto-sans-sc`,
`font-noto-serif-sc`, `font-mono`, `font-sans`, `font-serif`), with only a few responsive
breakpoint tweaks — e.g. `YinYangBalance.tsx` shrinks some `text-xs` labels to
`text-[10px] sm:text-xs` on narrow screens, and the active-food name goes from a fixed
`text-xl` to `text-lg sm:text-xl`. No new font family or base size is introduced in v2.
