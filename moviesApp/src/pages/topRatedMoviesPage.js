import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const TopRatedMoviesPage = props => {
  const context = useContext(MoviesContext);
  const toprated = context.toprated;
  return (
    <MovieListPageTemplate
      movies={toprated}
      title={"Top Rated Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default TopRatedMoviesPage;