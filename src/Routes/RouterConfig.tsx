import { FC, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes.config';
import Loader from '../Components/Common/Loader';

const RouterConfig: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;