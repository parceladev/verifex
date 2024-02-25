import { HomePage, LegitCheckPage, AboutPage } from './pages/user';
import { SignInPage, SignUpPage } from './pages/auth';

export const routes = [
  {
    title: 'User Pages',
    layout: 'UserLayout',
    pages: [
      {
        name: 'Home Page',
        path: '/',
        element: <HomePage />,
      },
      {
        name: 'Home Page',
        path: '/home',
        element: <HomePage />,
      },
      {
        name: 'Legit Check Page',
        path: '/legit-check',
        element: <LegitCheckPage />,
      },
      {
        name: 'About Page',
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
  {
    title: 'Auth Pages',
    layout: 'AuthLayout',
    pages: [
      {
        name: 'Sign In',
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        name: 'Sign Up',
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
];

export default routes;
