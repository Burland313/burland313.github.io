# midnightsignalsoftware.com

The site at https://midnightsignalsoftware.com (`CNAME`; DNS at Cloudflare, DNS only). This folder
is its source; the public `Burland313/burland313.github.io` repo is a copy of it, published from the
repo root with:

    git subtree push --prefix Site https://github.com/Burland313/burland313.github.io.git main

- `index.html` is Midnight Signal Software's home page, with Macrowave's marketing in the
  middle. That part (between the `Macrowave` and `end Macrowave` comments in the CSS, and
  `<main id="macrowave">` in the page) is kept in one piece so it can move to Macrowave's own
  domain later. It's also the App Store Support and Marketing URL, so keep the contact email on it.
- The top of `index.html` is the animated coming-soon teaser (`img/coming-soon.webp`, lossless)
  with the waitlist form. `waitlist.js` posts the form to Macrowave's server (`POST /waitlist`,
  see `Server/README.md`), which only takes posts from this site's origin.
- `app-store.js` holds Macrowave's App Store ID. Every "Get Macrowave" button on the site reads it;
  until it's set they say "Join the waitlist" and lead to the form. Once the app is live, set it
  (the form then hides itself), take the teaser down, and add the Smart App Banner meta it names
  to each page.
- `fonts/` and `img/` are built from the app's fonts and the App Store screenshots by
  `python3 Design/Site/make.py` (needs fonttools, brotli and Pillow). Fonts are served from here,
  not Google, so a visit doesn't touch anyone else's servers.
- `r/index.html` shows a shared recipe. The recipe is in the link's fragment (compressed,
  URL-safe base64 JSON), so the server never receives it. Below the recipe is an ad for the app:
  anyone who lands here doesn't have Macrowave, since the app opens these links itself.
- `.well-known/apple-app-site-association` makes `/r/*` links open Macrowave when it's
  installed. Apple's CDN caches it, so a change can take a day to reach phones.
- `.nojekyll` stops GitHub Pages from hiding `.well-known`.
