

  export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };
  
  export const getMovie = id => {
    return fetch(
      `/api/movies/${id}`,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };

  export const getGenres = () => {
    return fetch(
      `/api/genres/`,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    }
    ).then(res => res.json());
  };

  export const getMovieReviews = id => {
    return fetch(
      `/api/movies/${id}/reviews`,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  }

  export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };

  export const getTopRatedMovies = () => {
    return fetch(
       '/api/movies/top_rated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };

  export const getNowPlayingMovies = () => {
    return fetch(
       '/api/movies/now_playing',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };

  export const getMovieProviders = (id) => {
    return fetch(
       `/api/movies/${id}/watch/providers`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };

  export const getMovieCredits = (id) => {
    return fetch(
       `/api/movies/${id}/watch/providers`,{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json()).then(json => {return json.results;});
  };