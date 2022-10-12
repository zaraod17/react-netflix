import Layout from "./components/layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import MoviesView from "./pages/movies/MoviesView";
import MovieDetailsView from "./pages/movies/MovieDetailsView";
import SeriesView from "./pages/series/SeriesView";
import SeriesDetailView from "./pages/series/SeriesDetailsView";
import SearchView from "./pages/search/SearchView";
import NotFoundView from "./pages/errors/NotFoundView";
import MyListView from "./pages/user/MyListView";
import AuthView from "./pages/auth/AuthView";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" element={<MovieDetailsView />} />
        <Route path="/series" element={<SeriesView />} />
        <Route path="/series/:serieId" element={<SeriesDetailView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/my-list" element={<MyListView />} />
        <Route path="/auth" element={<AuthView />}></Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Layout>
  );
}

export default App;
