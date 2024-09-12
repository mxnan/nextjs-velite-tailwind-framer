# Contributing to this repo ?

## How to contribute

1. Fork this repo
2. Clone the repo
3. Create a new branch
4. Commit your changes
5. Push your changes
6. Create a PR
7. Merge your PR
8. Thank you.

---

### Contributing guidelines

- If you find any bug , please create an issue with the bug description and an example.
- If you have an idea for new component , just send me an email.
- Dont change `@content/blogs` or `home.mdx` and `intro.mdx`

---

To add a new component ?

1. Go to `@config/site.ts` and add your component with `category` and `slug` in componentSidebar so that it can be generated as a link.
2. Create a new mdx file in `@content/components/{category}/{slug}.mdx` with proper frontmatter and content .
3. If your component uses multiple files , then add extra files in `@showcase/_components/` and base demo should be created in `@showcase/demo/{category}/{slug}.tsx`
4. Now, Just use the relevant componentPreview values in `@content/components/{category}/{slug}.mdx`.
5. Try to keep styles and logic in `@content/components/{category}/{slug}.mdx` and `@showcase/demo/{category}/{slug}.tsx` same as used in other places.
6. Thank you for contributing !!!!
