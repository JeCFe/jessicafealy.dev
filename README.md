# Jessica Fealy Portfolio

A statically exported Next.js portfolio, deployed to GitHub Pages.

## Local development

| Command         | Purpose                                                              |
| --------------- | -------------------------------------------------------------------- |
| `npm install`   | Install dependencies.                                                |
| `npm run dev`   | Start the development server.                                        |
| `npm run lint`  | Run ESLint.                                                          |
| `npm run build` | Create the static site in `out/`.                                    |
| `npm start`     | Serve the built `out/` directory locally. Run `npm run build` first. |

## Editing content in Pages CMS

Pages CMS is configured in [`.pages.yml`](.pages.yml). It exposes the site content held in the `data/` directory:

- `site.json` for navigation, accessibility labels, and global copy.
- `about.json`, `proficiencies.json`, and `experience.json` for homepage sections.
- `projects.json` for professional projects and the featured-project carousel.

Images uploaded through Pages CMS are saved in `public/images/` and referenced in content as `/images/<filename>`. Other static assets can live under `public/` and are referenced from the site with their public path.

After editing locally, run `npm run lint` and `npm run build` before committing.

## Deployment

The [deployment workflow](.github/workflows/deploy.yml) runs linting and a static build for pull requests targeting `main`. Pushes to `main` build and publish the `out/` directory to GitHub Pages. You can also run the workflow manually from the Actions tab; deployment still occurs only from `main`.
