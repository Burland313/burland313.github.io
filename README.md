# Macrowave recipe links

The site at https://midnightsignalsoftware.com (`CNAME`; DNS at Cloudflare, DNS only). This folder
is its source; the public `Burland313/burland313.github.io` repo is a copy of it, published from the
repo root with:

    git subtree push --prefix Site https://github.com/Burland313/burland313.github.io.git main

- `index.html` is the coming-soon page until launch. It's the App Store support URL, so it keeps the
  contact email and the privacy policy link. Its artwork is `img/coming-soon.webp` (lossless).
- `r/index.html` shows a shared recipe. The recipe is in the link's fragment (compressed,
  URL-safe base64 JSON), so the server never receives it.
- `.well-known/apple-app-site-association` makes `/r/*` links open Macrowave when it's
  installed. Apple's CDN caches it, so a change can take a day to reach phones.
- `.nojekyll` stops GitHub Pages from hiding `.well-known`.
