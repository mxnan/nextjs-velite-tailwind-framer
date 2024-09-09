export const siteConfig = {
  name: "mxnan.com",
  description: "Personal website and component library with some blogs, Built with Nextjs,velite,tailwind,framer-motion and more.",
  url: "https://mxnan.com",
  author: "@mxnan",
  topNavLinks: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Components",
      href: "/components",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/etc_etcx",
    github: "https://github.com/mxnan",
    linkedin: "https://www.linkedin.com/in/mxnan/",
  },
  componentSidebar: [
    {
      category: "Playground",
      items: [
        {
          name: "Particles Reveal",
          href: "/components/playground/particles-reveal",
        },
      ],
    },
    {
      category: "Loaders",
      items: [{ name: "Spiral", href: "/components/loaders/spiral" }],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
