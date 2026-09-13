# Project instructions

These instructions apply throughout this repository. Follow the user's current
request, and use the checked-in configuration and implementation to verify details
that may have changed since this file was written.

## Working with Jessica

- Read the relevant files before editing. Make routine changes within the agreed
  task using established conventions. If the intent or requirements are unclear,
  ask focused questions before editing rather than assuming what Jessica wants.
- Limit changes to what was requested. If completing the work would increase the
  scope, explain why and ask before proceeding with the additional work.
- Ask before major design, architecture, dependency or personal-copy changes unless
  Jessica has already explicitly agreed to those changes. Flag unrelated issues
  separately rather than fixing them as part of the task.
- Use British English in new or revised copy, documentation and communication.
  Preserve proper names, package names and existing code identifiers.
- Preserve Jessica's voice in portfolio copy. Never invent employment details,
  qualifications, responsibilities, achievements or metrics. Ask for missing facts.
- Check `git status` before working and preserve existing local edits and untracked
  files. Do not include unrelated work in your changes.
- Never commit on Jessica's behalf.
- Finish with a concise description of what changed, what was checked and any
  unresolved issues. Distinguish checks that passed from checks you could not run.

## Project and commands

Jessica Fealy's personal portfolio uses Next.js App Router, React, strict
TypeScript and Tailwind CSS. It is a static export hosted on GitHub Pages.
Pages CMS edits JSON content through `.pages.yml`.

- Use npm and `package-lock.json`. CI uses Node.js 22; `package.json` declares the
  supported minimum version.
- `npm ci`: install the locked dependencies when a fresh install is needed.
- `npm run dev`: run the development server.
- `npm run lint`: run ESLint.
- `npm run build`: build and export the site to `out/`.
- `npm start`: serve the existing `out/` directory; build it first.
- There is no configured test script or checked-in test suite. Jest is installed,
  but do not assume `npm test` works.

## Where changes belong

- `app/layout.tsx`: global metadata, font loading and footer.
- `app/(portfolio)/layout.tsx`: shared portfolio layout and introduction.
- `app/(portfolio)/page.tsx`: homepage composition, section headings and project
  data passed into shared cards and the carousel.
- `app/(portfolio)/projects/[slug]/page.tsx`: static write-up routes and metadata.
- `components/`: section components and reusable UI, with directory-level exports
  and the shared `components/index.ts` barrel.
- `components/ui/`: Embla carousel and Radix dialog-based mobile sheet.
- `data/`: site settings, biography, proficiencies, experience and personal projects.
  `data/index.ts` exports JSON data and assembles navigation entries.
- `data/professional-projects/`: one JSON file per professional project, plus
  `types.ts` for project and content-block types.
- `content/index.ts`: filesystem loading, validation, ordering and publication
  filtering for professional projects.
- `.pages.yml`: CMS fields, collections and media configuration.
- `assets/`: SVGs imported as React components through the asset barrels.
- `public/`: files served by public URL, including uploaded images and videos.
- `app/globals.css` and `tailwind.config.ts`: global styling and theme extensions.
- `.github/workflows/deploy.yml`: lint, build and GitHub Pages deployment.

## Code conventions

- Use typed function components and function expressions, usually arrow functions.
  ESLint enforces function expressions.
- Import shared modules through root barrels such as `@/assets`, `@/components`,
  `@/content`, `@/data` and `@/lib`. Nested aliases such as
  `@/components/typography` are prohibited by ESLint.
- Inside `components/`, import shared components from the relative barrel `..`,
  not `@/components`. Follow local relative imports for same-directory code and
  UI primitives. Export new reusable components through the appropriate barrels.
- Use `import type` for type-only dependencies, especially project types from
  `@/content`. Its runtime exports use Node.js filesystem APIs and must stay out
  of client components.
- Keep server rendering as the default. Add `"use client"` where interactive code
  needs hooks or browser APIs, following the navigation and carousel boundaries.
- Prefer composing or extending existing components over duplicating UI. Reuse
  `Section`, `Typography`, `MarkdownContent`, `ExternalLink`, `PillList`,
  `ContentCard`, `ContentCarousel` and `ContentImage` where appropriate. Keep
  project-specific data mapping outside generic layout components. Use the existing `cn` helper from `@/lib`
  and `class-variance-authority` patterns when they suit the change. Refactor / create new components when it makes sense, but only if it makes sense.
- Follow `.prettierrc`, including import organisation and Tailwind class ordering.
  Format touched files without reformatting unrelated files.
- Keep `package-lock.json` consistent when changing dependencies. Prefer existing
  libraries before introducing another dependency for the same purpose.

## Content and CMS

- Use Pages CMS as the content-editing workflow. Keep editable portfolio content
  in the JSON files configured by `.pages.yml`, rather than duplicating it in JSX.
  When adding editable fields, update `.pages.yml`, relevant types, validation
  and rendering together. Update README editing guidance when the workflow changes.
- New professional projects should start as drafts unless publication is requested.
  A project filename must be `<slug>.json`, with a matching slug made of lowercase
  words separated by hyphens.
- `title`, `slug` and `carouselSummary` are required. Only published projects are
  eligible for the site: `showInCarousel` controls homepage inclusion and
  `hasWriteUp` controls write-up routes. Higher `order` values appear first.
- The loader validates all project JSON files, including drafts, before filtering.
  Keep drafts valid too. Use `content/index.ts` as the source for validation rules.
- A project image requires `imageAlt`; `linkLabel` requires `linkHref`. Write-up
  blocks use `type: "markdown"`, `"image"` or `"video"`: Markdown needs `content`,
  images need `image`, `alt` and `caption`, and videos need `video` and `caption`
  with an optional `poster`.
- Reference uploaded media as `/images/...` or `/videos/...`, backed by files in
  `public/images/` or `public/videos/`. Do not include `public` in browser URLs.
- Render rich text through `MarkdownContent` (`react-markdown` and `remark-gfm`).
  It suppresses Markdown images; use explicit image blocks for write-up media.
  Do not enable raw HTML rendering without a clear requirement and review.
- When adding proficiency icons, keep the asset exports,
  `components/proficiencies/content.tsx` icon map and `.pages.yml` options aligned.
  Unknown icon keys are currently omitted from the rendered proficiency list.
- When adding or renaming homepage sections, update the rendered section IDs,
  `data/index.ts` navigation entries and displayed section numbers together.
  Navigation's section list and the `PageId` type derive from those entries.
  Preserve links from write-ups back to homepage sections.

## Design and accessibility

- Reuse established styles; do not invent a new visual treatment. Follow the
  current dark navy/slate palette, cyan and pink accents, Poppins typography,
  rounded cards and responsive spacing. If existing components and styles do not
  cover the requested change, ask before introducing a new design pattern.
- Preserve the desktop introduction/sidebar layout and mobile navigation behaviour.
  Inspect affected layouts at mobile and desktop widths after visual changes.
- Preserve semantic headings, descriptive image alt text, accessible control names,
  visible keyboard focus, dialog focus behaviour and carousel keyboard controls.
- Respect reduced-motion preferences when adding animations or programmatic
  scrolling, following the existing CSS and navigation handling.
- Use internal links for site navigation. For links opening a new tab, preserve
  `rel="noopener noreferrer"` and the accessible new-tab notice.
- Check the relevant component for media layout details: wide project cards and
  write-up header images currently use 8:5, while write-up image/video blocks use
  4:3. Do not assume every project image has the same aspect ratio.

## Static hosting and validation

- Preserve `output: "export"` and `images.unoptimized` in `next.config.js`.
  Features must work without a runtime Next.js server; discuss hosting changes
  before introducing server actions, request-time rendering or API endpoints.
- Keep `generateStaticParams`, `dynamicParams = false` and the empty-write-up
  fallback in the dynamic project route working. Missing or unpublished write-ups
  must resolve to the not-found view.
- Do not hand-edit or commit generated directories such as `.next/`, `out/`,
  `node_modules/`, TypeScript build information or generated Next.js declarations.
- For application code, content, CMS or build configuration changes, run
  `npm run lint` and `npm run build`. Inspect relevant exported routes or assets
  when changing routing or media. Font loading uses `next/font/google`, so report
  network-related build failures accurately rather than changing fonts to bypass them.
- For UI changes, check the affected behaviour in a browser when available,
  including keyboard use and responsive layout. State if browser checks were not run.
- For instructions-only or documentation-only changes, verify referenced paths,
  commands and the diff; a full application build is unnecessary.
- Do not claim validation passed if it failed or was skipped. Report unrelated
  existing failures separately, and avoid expanding the task into unrelated fixes.
