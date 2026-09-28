// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Tech Stacks',
    url: '#services',
  },
  {
    label: 'Live Projects',
    url: '#works',
  },
  {
    label: 'Awards',
    url: '#skills-section',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Experience',
    url: '#experience-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/Anubhavjai68749',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/anubhavxdev',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/anubhavxdev',
  },
  {
    label: 'Portfolio',
    url: 'https://anubhav12302387.github.io/My_Portfolio/',
  },
];

const resourceLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/anubhavxdev',
  },
];

const heroText =
  'A Full-Stack & App Developer, 2x Hackathon Winner, building production-grade web and mobile apps since 2023.';

const locationPlace = `31°15'32.0"N 75°42'16.0"E`;
const locationCountry = 'Punjab, India';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'anubhavxdev/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
