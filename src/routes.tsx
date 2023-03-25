import { createBrowserRouter } from 'react-router-dom';
import App, { appLoader } from './App';
import { Error, Home, Menu } from './components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
    ],
  },
]);
