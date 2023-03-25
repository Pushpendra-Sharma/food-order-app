import { createBrowserRouter } from 'react-router-dom';
import App, { appLoader } from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '/',
        element: <h1>Home</h1> 
      },
    ],
  },
]);
