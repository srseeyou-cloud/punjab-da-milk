#!/usr/bin/env bash
# Builds preview/index.html: a single self-contained page for sharing a preview link.
# Run from the project root after `npm install`.
set -euo pipefail
npx esbuild preview/entry.tsx --bundle --minify --format=iife --jsx=automatic \
  --define:process.env.NODE_ENV='"production"' --log-level=error --outfile=preview/.bundle.js
npx tailwindcss -i app/globals.css --content './components/**/*.tsx,./lib/**/*.ts' --minify -o preview/.bundle.css 2>/dev/null
node -e '
const fs=require("fs");
const css=fs.readFileSync("preview/.bundle.css","utf8");
const js=fs.readFileSync("preview/.bundle.js","utf8").replace(/<\/script/g,"<\\/script");
const html=`<title>Punjab Da Milk</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap">
<style>:root{color-scheme:light;--font-display:"Fraunces";--font-sans:"Plus Jakarta Sans"}${css}</style>
<div id="root"></div>
<script>${js}</script>`;
fs.writeFileSync("preview/index.html",html);
'
rm -f preview/.bundle.js preview/.bundle.css
echo "Wrote preview/index.html"
