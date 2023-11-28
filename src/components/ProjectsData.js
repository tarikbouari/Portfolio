import ahoeimg from '../images/AH0.jpg';
import hap from '../images/gez.jpg';
import ahoe from '../images/ahoe.jpg';
import estate from '../images/vehii.jpg';

const data = [
  {
    titre: 'NafexGlobal',
    text: ' An ecommerce website for light and home decoration.Base in Accra, Nafex is specialized in providing exquisite lighting solutions that transform spaces, adding warmth, sophistication, and functionality. Designed and built using figma and WordPress   ',
    image: ahoeimg,
    tools: { frist: 'GitHub', second: 'Figma', third: 'Wordpress' },
    links: { git: 'https://github.com/', source: 'www.nafexgh.com' },
  },
  {
    titre: 'Vehigo',
    text: 'A car rental app that allow users to see available car for rental. A user can add car to the car list or select his favorite. The frontend is built with react connected to a Backend API built with  rails.',
    image: estate,
    tools: {
      frist: 'GitHub', second: 'react', third: 'redux', fourth: 'Rails', fith: 'API',
    },
    links: { git: 'https://github.com/', source: 'www.ahoechic.com' },
  },
  {
    titre: 'AhoeChic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ',
    image: ahoe,
    tools: { frist: 'GitHub', second: 'react', third: 'redux' },
    links: { git: 'https://github.com/', source: 'www.ahoechic.com' },
  },
  {
    titre: 'Gameland',
    text: 'Gameland is an online gaming web application that allows users to view different kinds of games and share their opinions on each game. Users can like and make reservations to play online. Built with HTML/CSS, JAVASCRIPT, and  API.',
    image: hap,
    tools: {
      frist: 'HTML5/CSS', second: 'JavaScript', third: 'Webpack', fourth: 'API',
    },
    links: { git: 'https://github.com/', source: 'www.ahoechic.com' },
  },

];

export default data;
