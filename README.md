# REInvest OS — CDN

Public-hosted assets for the REInvest OS Customizer. Served from GitHub
Pages and loaded by GHL Agency Custom JS.

This repo holds **only the built artifacts**. Source lives in the private
`mcclivetim/wholesaling-crm` repo (`customizer/src/`).

## Files

| File | URL | Purpose |
|---|---|---|
| `customizer.js` | https://mcclivetim.github.io/reinvest-os-cdn/customizer.js | The Customizer bundle injected into every GHL page |

## How it gets here

The Customizer is built in the private repo via `npm run build`, then the
resulting `dist/customizer.js` is copied + committed to this repo. Future
versions automated via GitHub Action; for now manual.

## Loader script (paste into GHL Custom JS once)

```javascript
(function () {
  var s = document.createElement('script');
  s.src = 'https://mcclivetim.github.io/reinvest-os-cdn/customizer.js?cb=' + Date.now();
  s.async = false;
  document.head.appendChild(s);
})();
```

The `?cb=` cache-buster query param ensures browsers always fetch fresh.
GitHub Pages serves the latest commit within ~30-60s of a push.

## Versioning

`customizer.js` is always the latest. Specific historical versions are
recoverable from git history of this repo or the private source repo.
