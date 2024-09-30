export const siteConfig = {
  name: "mxnan.com",
  description:
    "Personal website and component library with some blogs, Built with Nextjs,velite,tailwind,framer-motion and more.",
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
          name: "Image/card",
          href: "/components/playground/image-card",
        },
        {
          name: "Particles",
          href: "/components/playground/particles",
        },
        {
          name: "Blur/Vignette",
          href: "/components/playground/blur-vignette",
        },
      ],
    },
    {
      category: "Blocks",
      items: [
        {
          name: "Gallery",
          href: "/components/blocks/gallery",
        },
      
      ],
    },
    {
      category: "Buttons",
      items: [
        { name: "Hover-reveal", href: "/components/buttons/hover-reveal" },
        { name: "Magnet", href: "/components/buttons/magnet" },
      ],
    },

    {
      category: "Loaders",
      items: [
        { name: "Spin", href: "/components/loaders/spin" },
        { name: "Shuriken", href: "/components/loaders/shuriken" },
      ],
    },
    {
      category: "Text",
      items: [
        {
          name: "Bubble",
          href: "/components/text/bubble",
        },
        {
          name: "Fade",
          href: "/components/text/fade",
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
