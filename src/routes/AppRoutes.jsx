import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Shows from '../pages/Shows';
import MovieDetails from '../pages/MovieDetails';
import ShowDetails from '../pages/ShowDetails';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="shows" element={<Shows />} />
        <Route path="shows/:id" element={<ShowDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;