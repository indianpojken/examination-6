import { createBrowserRouter } from 'react-router-dom';

import { Root } from './views/Root';
import { Home } from './views/Home';
import { AddCard } from './views/AddCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/addcard",
        element: <AddCard />
      },
    ],
  },
]);

export { router };
