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
- `projects.json` for personal projects.
- `professional-projects/` for professional-project carousel entries and write-ups.

Images uploaded through Pages CMS are saved in `public/images/`. Videos are saved in `public/videos/`. Both are referenced from content using their public paths.

### Professional projects

Create a Professional Project entry in Pages CMS, then fill in its title, URL slug and carousel summary. New entries default to draft.

- Set the status to Published to include the project in the built site.
- Enable Show in Carousel to display it on the homepage.
- Enable Write-up Page to generate `/projects/<slug>` and make its carousel slide clickable.
- Use Display Order to control the carousel order. Higher numbers appear first.
- Add an optional project image and alt text for the carousel and page header. It does not use a caption.
- Build the write-up from reorderable Markdown, image and video blocks. Content images require alt text and a caption; content videos require a caption.

Project images and videos are displayed at a 4:3 aspect ratio with rounded corners. Projects without an image use the default carousel placeholder.

After editing locally, run `npm run lint` and `npm run build` before committing.

## Deployment

The [deployment workflow](.github/workflows/deploy.yml) runs linting and a static build for pull requests targeting `main`. Pushes to `main` build and publish the `out/` directory to GitHub Pages. You can also run the workflow manually from the Actions tab; deployment still occurs only from `main`.
