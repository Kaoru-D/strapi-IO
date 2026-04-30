import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa';
import { nanoid } from 'nanoid';

const sublinks = [
  {
    pageId: nanoid(),
    page: 'product',
    links: [
      {
        id: nanoid(),
        label: 'Comunidad',
        icon: <Fa500Px />,
        url: '/product/comunidad',
      },
      {
        id: nanoid(),
        label: 'Contenido',
        icon: <FaAccusoft />,
        url: '/product/contenido',
      },
      {
        id: nanoid(),
        label: 'Roles',
        icon: <FaAdversal />,
        url: '/product/roles',
      },
    ],
  },
  {
    pageId: nanoid(),
    page: 'solutions',
    links: [
      {
        id: nanoid(),
        label: 'Desarrolladores',
        icon: <FaAvianex />,
        url: '/solutions/desarrolladores',
      },
      {
        id: nanoid(),
        label: 'Gestores de contenido',
        icon: <FaBitcoin />,
        url: '/solutions/gestores-de-contenido',
      },
      {
        id: nanoid(),
        label: 'Equipos de negocio',
        icon: <FaBtc />,
        url: '/solutions/business teams',
      },
      {
        id: nanoid(),
        label: 'ecommerce',
        icon: <FaCodiepie />,
        url: '/solutions/ecommerce',
      },
    ],
  },
  {
    page: 'resources',
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: 'starters',
        icon: <FaDocker />,
        url: '/resources/starters',
      },
      {
        id: nanoid(),
        label: 'showcase',
        icon: <FaGithubSquare />,
        url: '/resources/showcase',
      },
    ],
  },
];

export default sublinks;
