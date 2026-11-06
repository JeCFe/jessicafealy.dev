# Jessica Fealy Portfolio

Requires Node.js 20.9 or newer and npm.

## Run locally

```sh
npm ci
npm run dev
```

Open the local URL printed by the server, usually http://localhost:3000.

## Preview the production build

```sh
npm run build
npm start
```

This builds the static site into `out/` and serves it locally.

## Edit blog images

In Pages CMS, open **Blog Posts**, select an article and expand an **Image** block
under **Article Content**. Set **Image Size** to Small (384px), Medium (576px),
Large (768px) or Full article width, and **Image Alignment** to Left, Centre or
Right. Alignment moves the image and its caption together without wrapping the
article text around them. Captions are optional. These controls apply to article
image blocks; hero images keep their existing layout.

Images shrink to fit smaller screens. Existing blocks without these settings use
the full article width and left alignment. In JSON, the optional fields are `size`
(`small`, `medium`, `large`, `full`) and `alignment` (`left`, `center`, `right`).
