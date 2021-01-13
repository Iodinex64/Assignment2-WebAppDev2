import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const NowPlayingMoviesPage = props => {
  const context = useContext(MoviesContext);
  const nowplaying = context.nowplaying;
  return (
    <MovieListPageTemplate
      movies={nowplaying}
      title={"Now Playing Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default NowPlayingMoviesPage;