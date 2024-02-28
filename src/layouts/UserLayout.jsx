import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from '../components/layouts';
import routes from './../routes';

export function UserLayout() {
  return (
    <section>
      <Navbar routes={routes} />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === 'UserLayout' &&
              pages.map(({ path, element }) => (
                <Route exact key={path} path={path} element={element} />
              ))
          )}
        </Routes>
      <Footer />
    </section>
  );
}

UserLayout.displayName = '/src/layouts/UserLayout.jsx';

export default UserLayout;
