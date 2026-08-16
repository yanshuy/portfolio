// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Yanshuman Yadav',
  role: 'Software Developer',
  email: 'yanshuman2005@gmail.com',
  phone: '+91 9082474842',
  tagline: "Hi, I'm Yanshuman. I like building things and figuring out how they work.",
  description:
    "I'm a software developer and Information Technology student at Thadomal Shahani Engineering College, building across frontend, backend, and systems. When I'm not writing code, I'm usually drawing or exploring things that catch my curiosity.",
  status: "Frontend Developer Intern @ AmberFlux EdgeAI · B.E IT @ TSEC '27",
  social: [
    { label: 'GitHub', href: 'https://github.com/yanshuy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yanshuman/' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
