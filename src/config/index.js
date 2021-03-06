module.exports = {
  siteTitle: 'Sameer Kumar | Software Engineer',
  siteDescription:
    'Sameer Kumar is a software engineer based in New Delhi, India who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Sameer Kumar, Sameer, Kumar, backend, software engineer, backend-end engineer, web developer, python, vips, django',
  siteUrl: 'https://www.sameerkumar.website',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Sameer Kumar',
  location: 'New Delhi, India',
  email: 'sam@sameerkumar.website',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/sameerkumar18/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sameer-kumar18/',
    },
    {
      name: 'Blog',
      url: 'https://blog.sameerkumar.website/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sameer.kumar18/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sameer_kumar018',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@sameer_kumar018',
  googleAnalyticsID: 'UA-70893617-1',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 250,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
