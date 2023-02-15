import { createBrowserRouter } from 'react-router-dom';

import { Root } from './views/Root';
import { AddCard } from './views/AddCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <AddCard />
      },
      {
        path: "/addcard",
        element: <AddCard />
      },
    ],
  },
]);

export { router };
