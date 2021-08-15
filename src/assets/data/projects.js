import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'E-Commerce',
    desc: 'Ordinary people can easily sell or buy product with fast& securely.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Weather-app',
    desc:
      'A timeline feature, which shows the weather at regular points along your path.',
    img: GreenCtgImg,
  },
];

export default projects;
