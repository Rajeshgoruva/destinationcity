import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
  },
  {
    id: 13,
    name: 'Vizag',
    imgUrl:
      'https://www.adotrip.com/public/images/city/master_images/5e413e3a115d7-Vizag_Attractions.jpg',
  },
  {
    id: 14,
    name: 'Munnar',
    imgUrl:
      'https://www.revv.co.in/blogs/wp-content/uploads/2021/02/Munnar-HD-Image.jpg',
  },
  {
    id: 15,
    name: 'Kashmir',
    imgUrl:
      'https://honeymoonbug.com/blog/wp-content/uploads/2017/07/sonamarg1-min.jpg',
  },
  {
    id: 16,
    name: 'Ooty',
    imgUrl:
      'https://lehren.com/wp-content/uploads/2020/08/Did-You-Know-This-Odisha-Hill-Station-Gets-Snowfall-Every-Winter.jpg',
  },
  {
    id: 17,
    name: 'ArunachalPradesh',
    imgUrl:
      'https://1.bp.blogspot.com/-uJh5y2tUn1E/XfOtgsD-M9I/AAAAAAAADxA/_zZ6b2wmC1kl-CgcUTjTys6nS5zyk-gkgCLcBGAsYHQ/s1600/State%2Bof%2BArunachal%2BPradesh-Population%252C%2BMap%252C%2BPlaces%252C%2BCapital%252C%2BGeography%2Betc%252C.jpg',
  }
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
