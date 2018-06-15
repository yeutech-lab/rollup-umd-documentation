import React from 'react';

const config = {
  layout: 'router',
  socialLinks: [
    {
      name: 'spectrum',
      description: 'Spectrum',
      logo: null,
      href: 'https://spectrum.chat/about',
      alt: 'Link to Yeutech Spectrum profile.',
      target: '_blank',
    },
    {
      name: 'github',
      description: 'Github',
      logo: null,
      href: 'https://github.com/yeutech',
      alt: 'Link to Yeutech Github profile.',
      target: '_blank',
    },
    {
      name: 'twitter',
      description: 'Twitter',
      logo: null,
      href: 'https://twitter.com/',
      alt: 'Link to Yeutech twitter profile.',
      target: '_blank',
    },
    {
      name: 'gitter',
      description: 'Gitter',
      logo: null,
      href: 'https://gitter.im/',
      alt: 'Link to Yeutech Gitter profile.',
      target: '_blank',
    },
  ],
  routes: [
    {
      name: 'home',
      description: 'Home',
      path: '/',
      components: <div>Home page</div>,
    },
    {
      name: 'home2',
      description: 'Home2',
      path: '/home2',
      components: <div>Home page 2</div>,
    },
    {
      name: 'start',
      description: 'Start',
      path: '/start',
      components: <div>Start Home page</div>,
      childRoutes: [
        {
          name: 'subRoute',
          description: 'sub route',
          path: '/doc/sub-route',
          components: <div>Start 1 page</div>,
        },
        {
          name: 'anotherSubRoute',
          description: 'sub route 1',
          path: '/doc/sub-route-1',
          components: <div>Start 2 page</div>,
        },
      ],
    },
    {
      name: 'docs',
      description: 'Documentation',
      path: '/docs',
      components: 'STYLEGUIDE_SECTION',
    },
  ],
};

export default config;
