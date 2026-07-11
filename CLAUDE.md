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
2. Surface: `bg-[#F7F3EC]`, `rounded-3xl`, **dashed** sage border
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
  className="relative overflow-hidden mt-16 bg-[#F7F3EC] p-8 md:p-12 rounded-3xl border-2 border-dashed border-[#9BA88B]/40 max-w-4xl mx-auto text-center"
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

  <div className="relative z-10 inline-block px-4 py-1.5 rounded-full bg-[#9BA88B]/10 text-[#9BA88B] text-xs font-semibold tracking-wider mb-6" id="closing-accent">
    DIETARY INSPIRATION
  </div>
  <p className="relative z-10 text-[#2F2F2F] text-xl md:text-2xl font-serif leading-loose mb-6 tracking-wide" id="closing-text">
    很多时候，问题不只是吃什么。<br />
    而是你吃进去的食物，是否真正适合你的身体状态。
  </p>
  <div className="relative z-10 w-12 h-0.5 bg-[#D89A63]/50 mx-auto mb-6" id="closing-divider"></div>
  <h1 className="relative z-10 text-2xl md:text-4xl font-bold text-[#EB288B] tracking-wider font-sans" id="closing-headline">
    其实，好好吃饭就能解决。
  </h1>
</motion.div>
```

### Anatomy (keep these fixed)

| Part            | Classes                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| Wrapper         | `mt-16 max-w-4xl mx-auto text-center`                                   |
| Surface         | `bg-[#F7F3EC] rounded-3xl border-2 border-dashed border-[#9BA88B]/40`   |
| Height (padding)| `p-8 md:p-12`                                                          |
| Background      | `absolute inset-0 w-full h-full object-fill` (decorative)              |
| Accent pill     | `px-4 py-1.5 rounded-full bg-[#9BA88B]/10 text-[#9BA88B] text-xs`       |
| Body copy       | `text-xl md:text-2xl font-serif leading-loose mb-6 tracking-wide`      |
| Divider         | `w-12 h-0.5 bg-[#D89A63]/50 mx-auto mb-6`                              |
| Headline        | `text-2xl md:text-4xl font-bold text-[#EB288B] tracking-wider font-sans`|

> Swap the text and the background image `src` per section, but keep the wrapper classes,
> paddings, dashed border, and `z-10` layering **identical** so every quotation box renders
> at the same height and style.

---

## Shared palette (for reference)

| Token        | Hex                   | Use                                  |
| ------------ | --------------------- | ------------------------------------ |
| Magenta      | `#EB288B`             | Brand / headlines / accents          |
| Terracotta   | `#D89A63`             | Secondary accent / dividers          |
| Sage         | `#9BA88B`             | Borders / muted labels               |
| Ink          | `#2F2F2F`             | Body text                            |
| Cream panel  | `#F7F3EC`             | Quote-box surface                    |
| Cream bg     | `#FAF8F4` / `#FAF1EA` | Section background fallback          |
| Stone border | `#ECE7DE` / `#DCD5C9` | Hairline borders                     |
