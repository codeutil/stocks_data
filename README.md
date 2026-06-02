# Multi-Index Dashboard

Static dashboard with annual returns, valuation charts, market breadth, drawdown tables, and metrics overview for three major equity indices: **S&P 500**, **CSI 300 (沪深300)**, and **Nasdaq 100**.

## Pages

- `index.html` — S&P 500 dashboard (entry page)
- `csi300.html` — CSI 300 (沪深300) dashboard
- `nasdaq100.html` — Nasdaq 100 dashboard

A cross-index switcher in the top navigation lets users hop between the three dashboards.

## Files

- `index.html` / `csi300.html` / `nasdaq100.html` — page shells per index
- `styles.css` — shared layout, visual design, and cross-index switcher
- `sp500-poster.js` — S&P 500 data, rendering logic, charts, language switcher, image export
- `csi300-poster.js` — CSI 300 data and rendering (same template as S&P 500)
- `nasdaq100-poster.js` — Nasdaq 100 data and rendering (same template as S&P 500)

Each `*-poster.js` file is self-contained per page, so loading one page only pulls the JS for that index.

## Publish With GitHub Pages

Create a GitHub repository, push this folder, then enable GitHub Pages:

1. Settings
2. Pages
3. Source: `Deploy from a branch`
4. Branch: `main`
5. Folder: `/root`

The page URL will be:

`https://<github-username>.github.io/<repo-name>/`
