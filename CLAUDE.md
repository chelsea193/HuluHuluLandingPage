# CLAUDE.md — Project Standards (always follow)

These are **mandatory** conventions for this landing page. When building or editing any
section, follow them exactly — do not invent alternative structures.

- **Background image** standard → mirrors `src/components/FiveElementsWheel.tsx`
- **Quotation box** standard → the closing-statement block (documented below)

---

## 1. Background Image

A section background must **bleed edge-to-edge to the rounded border** and sit *behind*
the content. It is an absolutely-positioned image that ignores the section's padding;
only the content respects padding.

### Rules

1. The `<section>` is the positioning context: `relative` + `overflow-hidden` (clips the
   image to the rounded corners) and a **fallback background colour** (shown if the image
   fails to load).
2. The background `<img>` is `absolute inset-0 w-full h-full` at `z-0`. It is **never**
   wrapped in a padded `<div>` — a padded wrapper pushes the image inward and breaks the
   full bleed.
3. `object-fill` stretches the image to cover the whole section regardless of content
   height. Use `object-cover` only when you specifically want to crop rather than stretch
   (note: `cover` can crop important corners out on tall sections).
4. The image is decorative: `pointer-events-none select-none`, empty `alt=""`,
   `aria-hidden="true"`.
5. Every piece of real content gets `relative z-10` so it paints above the background.

### Canonical markup

```tsx
<section
  className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto rounded-3xl bg-[#FAF8F4] overflow-hidden shadow-sm my-16 border border-[#ECE7DE]"
  id="section-x"
>
  {/* Background image slot — full bleed, ignores section padding */}
  <img
    src="/your-background.jpg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-fill opacity-100 pointer-events-none select-none z-0"
    id="section-x-bg-image"
  />

  {/* All content sits above the background */}
  <div className="relative z-10 ...">
    ...
  </div>
</section>
```

### Stacking two backgrounds (top band + rest)

When a section needs one image across the **top** and another across the **rest**
(e.g. YinYang Section 6), keep the same principle — full-bleed `absolute inset-0` layers,
**padding only on the text**, never on the image:

```tsx
<section className="relative max-w-7xl mx-auto rounded-[40px] bg-[#FAF1EA] border border-[#9BA88B]/15 overflow-hidden my-16 shadow-sm">
  {/* Bottom/full background — fills the whole section */}
  <img src="/below.jpg" alt="" aria-hidden="true"
       className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0" />

  {/* Top band — covers the top portion edge-to-edge */}
  <div className="relative z-10">
    <img src="/above.jpg" alt="" aria-hidden="true"
         className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0" />
    {/* padding lives on the TEXT, not the image */}
    <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24">
      ...header...
    </div>
  </div>

  {/* Remaining content — over the bottom background */}
  <div className="relative z-10 px-6 md:px-12 pt-12 pb-24">
    ...
  </div>
</section>
```

### Don't

- ❌ Wrap the `<img>` in a padded `<div>` — it insets the background and leaves a gap to
  the border.
- ❌ Put padding on the `<section>` *and* on an inner wrapper around the image
  (double padding).
- ❌ Forget `overflow-hidden` on the rounded section (image corners poke past the radius).
- ❌ Forget `relative z-10` on content (it disappears behind the image).

---

## 2. Quotation / Closing Statement Box

The standard highlighted quote box. **Follow this exact UI and height** — same paddings,
same dashed border, same background image treatment, same `max-w-4xl` width.

### Rules

1. Outer wrapper: `mt-16`, `max-w-4xl mx-auto`, centered text.
2. Surface: `bg-[#FFFAE8]`, `rounded-3xl`, **dashed** sage border
   `border-2 border-dashed border-[#9BA88B]/40`.
3. **Height comes from the padding** `p-8 md:p-12` — never hard-code a height; keep these
   paddings identical so all quote boxes match.
4. Full-width background image: `absolute inset-0 w-full h-full object-fill` at the back,
   decorative (`pointer-events-none select-none`).
5. Every text element inside is `relative z-10` so it sits above the background image.
6. Reveal animation: `motion.div` fading + scaling from `0.98` → `1` on scroll into view.

### Canonical markup

```tsx
{/* Closing Statement */}
<motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative overflow-hidden mt-16 bg-[#FFFAE8] p-8 md:p-12 rounded-3xl border-2 border-dashed border-[#9BA88B]/40 max-w-4xl mx-auto text-center"
  id="section-3"
>
  {/* Full-width background image slot */}
  <img
    src="/LandingPage Full Sec3-BG.jpg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-fill opacity-100 pointer-events-none select-none"
    id="section-3-bg-image"
  />

  <div className="relative z-10 inline-block px-4 py-1.5 rounded-full bg-[#9BA88B]/10 text-[#69725F] text-xs font-semibold tracking-wider mb-6" id="closing-accent">
    DIETARY INSPIRATION
  </div>
  <p className="relative z-10 text-[#2F2F2F] text-xl md:text-2xl font-serif leading-loose mb-6 tracking-wide" id="closing-text">
    很多时候，问题不只是吃什么。<br />
    而是你吃进去的食物，是否真正适合你的身体状态。
  </p>
  <div className="relative z-10 w-12 h-0.5 bg-[#D89A63]/50 mx-auto mb-6" id="closing-divider"></div>
  <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-[#A4B799] tracking-wider font-sans" id="closing-headline">
    其实，好好吃饭就能解决。
  </h1>
</motion.div>
```

### Anatomy (keep these fixed)

| Part            | Classes                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| Wrapper         | `mt-16 max-w-4xl mx-auto text-center`                                   |
| Surface         | `bg-[#FFFAE8] rounded-3xl border-2 border-dashed border-[#9BA88B]/40`   |
| Height (padding)| `p-8 md:p-12`                                                          |
| Background      | `absolute inset-0 w-full h-full object-fill` (decorative)              |
| Accent pill     | `px-4 py-1.5 rounded-full bg-[#9BA88B]/10 text-[#69725F] text-xs`       |
| Body copy       | `text-xl md:text-2xl font-serif leading-loose mb-6 tracking-wide`      |
| Divider         | `w-12 h-0.5 bg-[#D89A63]/50 mx-auto mb-6`                              |
| Headline        | `text-2xl md:text-4xl font-bold text-[#A4B799] tracking-wider font-sans`|

> Swap the text and the background image `src` per section, but keep the wrapper classes,
> paddings, dashed border, and `z-10` layering **identical** so every quotation box renders
> at the same height and style.

---

## Shared palette (for reference)

> **Brand accent is `#A4B799` (sage-green)**, matching the huluhulu-review
> design system (v2.1). It replaced the prior `#91A179` — a full-site swap,
> so every `text-[#91A179]`, `bg-[#91A179]`, `border-[#91A179]`, etc. should
> read `#A4B799` instead, with **hover state `#8E9F84`** (`hover:bg-[#8E9F84]`)
> on primary buttons/links, not the old `#7D8A68`. Re-check contrast against
> the page's cream surfaces (`#FFFFFF`, `#FAF8F4`, `#FFFAE8`, `#FAF1EA`,
> `#FFFBEB`) before relying on this color for small/thin text.
>
> The global page canvas is **`#FFFAE8`** ("Canvas Alabaster") — it replaced
> `#F7F3EC` everywhere, including the quote-box surface. `#FAF8F4` ("Surface
> Pearl") is unchanged and still used for card backgrounds, the sticky header,
> and modals — don't conflate the two.
>
> Terracotta and sage remain split: `#D89A63` / `#9BA88B` for *decoration*
> only (dividers, borders, blobs, where contrast rules don't apply), and their
> darker text siblings below for anything that has to be read. Also avoid
> `text-gray-400` (2.6:1) — use `text-gray-600`, and never fade body text with
> an opacity suffix such as `text-[#FFFAE8]/80`, which blends the colour and
> silently drops the ratio — even though huluhulu-review does this in its
> footer, keep footer text at full opacity here.
>
> Source of truth: `huluhulu-review/designsystem.md` (v2.1). Five Elements
> energy colors are unchanged from the original palette (Wood `#8CA080`,
> Fire `#D47D72`, Earth `#D5A76C`, Metal `#B7BCC3`, Water `#657EA5`) —
> designsystem.md's alternate five-element swatch table is aspirational and
> not what the actual review-repo code uses, so don't apply it.

| Token          | Hex                   | Use                                       |
| -------------- | ---------------------- | ------------------------------------------ |
| Brand accent   | `#A4B799`             | Brand / headlines / accents / fills       |
| Brand hover    | `#8E9F84`              | Hover/pressed state for primary buttons   |
| Terracotta     | `#D89A63`             | Dividers, borders, decoration **only**    |
| Terracotta ✎   | `#8F6641`             | Terracotta **text**                       |
| Sage           | `#9BA88B`             | Borders / decoration **only**             |
| Sage ✎         | `#69725F`             | Sage **text**                             |
| Sage hover     | `#859275`              | Hover state for sage/botanical buttons    |
| Ink            | `#2F2F2F`             | Body text                                 |
| Canvas         | `#FFFAE8`             | Global page / section background          |
| Surface Pearl  | `#FAF8F4` / `#FAF1EA` | Card background, sticky header, modals    |
| Stone border   | `#ECE7DE` / `#DCD5C9` | Hairline borders                          |

---

## Workflow preferences (always follow)

1. **Output/brand name** is "HuluHuluLandingPage" — use this naming for the project/output.
2. **Referrer** is "huluhulu" — use this value wherever a referrer/source identifier is needed.
3. **SEO** must always be taken care of (meta tags, semantic HTML, alt text, headings, etc.) when building or editing sections.
4. **Commits are done by the user** — do not run `git commit` (or push) unless explicitly asked to.
5. **Responsiveness** must always be taken care of (mobile/tablet/desktop breakpoints) for every section.
6. **Ask before starting** — if anything is unclear or a question arises, ask before beginning work, rather than assuming.
