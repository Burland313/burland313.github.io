# Macrowave recipe links

The site at https://burland313.github.io, published from the `burland313.github.io` repo.
This folder is its source; copy it there to publish.

- `r/index.html` shows a shared recipe. The recipe is in the link's fragment (compressed,
  URL-safe base64 JSON), so the server never receives it.
- `.well-known/apple-app-site-association` makes `/r/*` links open Macrowave when it's
  installed. Apple's CDN caches it, so a change can take a day to reach phones.
- `.nojekyll` stops GitHub Pages from hiding `.well-known`.
