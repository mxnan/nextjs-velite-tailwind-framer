export const siteConfig = {
  name: "wind-UI",
  description: "My personal website with Next.js and Tailwind CSS.",
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
};

export type SiteConfig = typeof siteConfig;
