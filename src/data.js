import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];
export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    iconClass: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    iconClass: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    iconClass: 'fab fa-squarespace',
  },
  {
    id: 4,
    href: 'https://www.instagram.com',
    iconClass: 'fab fa-instagram',
  },
];
export const services = [
  {
    id: 1,
    iconClass: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 2,
    iconClass: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 3,
    iconClass: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
];
export const tours = [
  {
    id: 1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    destination: 'china',
    duration: 6,
    price: 2100,
    image: tour1,
  },
  {
    id: 2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    destination: 'indonesia',
    duration: 11,
    price: 1400,
    image: tour2,
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    destination: 'hong kong',
    duration: 8,
    price: 5000,
    image: tour3,
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    destination: 'kenya',
    duration: 20,
    price: 3300,
    image: tour4,
  },
];
