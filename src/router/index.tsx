import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import PhotoGrid from '@/pages/PhotoGrid';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/list' />,
      },
      {
        path: '/list',
        element: <PhotoGrid />,
      },
      {
        path: '*',
        element: '404 not found',
      },
    ],
  },
]);
