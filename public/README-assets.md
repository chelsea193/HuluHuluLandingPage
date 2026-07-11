# Image assets

Drop the real Hulu Hulu image files into this `public/` folder using these exact
filenames. They are referenced by `<img>` placeholders in the landing page and are
served at the site root (e.g. `/LandingPage Full SEC1v2-01.jpg`).

| Section | Filename | Where it's used |
|---|---|---|
| S1 Hero | `LandingPage Full SEC1v2-01.jpg` | Hero right-column image |
| S3 Dietary Inspiration | `LandingPage Full Sec3-BG.jpg` | Quote block background |
| S4 Brand Positioning | `LandingPage Full Sec4-BG.jpg` | Right visual |
| S5 Food Is Energy | `LandingPage Full Sec5-BG.jpg` | Section background wash |
| S6 Yin & Yang | `LandingPage Full Sec6-BG.jpg` | Section background wash |

Once the files are present, the placeholders display the real images automatically —
no code changes needed.

## Optimization

The images in this folder are web-optimized (resized + recompressed): the set went
from ~71 MB to ~1.9 MB with no visible quality loss. The pristine originals are kept
in `public/originals/` (not served to users in a meaningful way, but you may want to
git-ignore them since they're large).

To re-optimize after replacing an original, drop the new full-res file into
`public/originals/` with the same name and run `node opt.mjs` from the project root
(requires the `sharp` dev dependency).
