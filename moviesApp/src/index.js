import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
      <AuthProvider>
        <SiteHeader />
        <AuthHeader />
        <div className="container-fluid">
          <MoviesContextProvider>
            <GenresContextProvider>
              <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute exact path="/movies/watchlist" component={WatchlistMoviesPage} />
          <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <PrivateRoute exact path="/movies/toprated" component={TopRatedMoviesPage} />
          <PrivateRoute exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
          <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
          <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
          <PrivateRoute path="/movies/:id" component={MoviePage} />
          <PrivateRoute path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));