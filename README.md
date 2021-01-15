# Assignment 2 - Web API.

Name: Sean Duggan W20064774

## Features.
 Everything from labs, plus...
 + Feature 1 - Added extra TMDB routes with parameterized URLs
 + Feature 2 - Extra database quieries to extend Mongo integration with Mongoose

## Installation Requirements

Node and MongoDB will need to be installed and configured on the server/local machine.

1: Clone the repo, optionally via console;

```bat
git clone https://github.com/iodinex64/Assignment2-WebAppDev2.git
```

2: Install node with npm;

```bat
npm install
```

3: Run the program with npm.
```bat
npm start
```

## API Configuration
You will need to create an .env file and place it in the root directory of the API folder. It should look something like this:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost <or other if intended use is not local hosting>
TMDB_KEY=<your tmdb api key>
mongoDB=<your mongodb url>
SEED_DB=true
SECRET=<your jwt secret>
```

## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies | Gets a list of movies | N/A | N/A | N/A
| /api/movies/upcoming | Get a list of upcoming movies | N/A | N/A | N/A
| /api/movies/top_rated | Get a list of top rated movies | N/A | N/A | N/A
| /api/movies/now_playing | Get a list of movies now playing in cinemas | N/A | N/A | N/A
| /api/movies/{movieid}/credits | Get a list of people credited for {movieid} | N/A | N/A | N/A
| /api/movies/{movieid}/watch/providers | Get a list of outlets which sell {movieid} | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/genres | Gets a list of all genres | N/A | N/A | N/A
| /api/users |Gets a list of all users | Creates a user | Changes a user's details | N/A
| /api/users/{username} | Get {username}'s details | N/A | N/A | Delete {username} from the database
| /api/users{username}/favourites | Get {username}'s favourite movies | Add an entry to {username}'s favourites list | N/A | N/A

## Security and Authentication
JWT is used to authenticate user sessions. Passwords are hashed and salted, user related routes are mostly affected.

## Integrating with React App

The react app this API was designed for is inside this repo, as it was updated to accomodate the API consequently. The old react app's repo can be found here: https://github.com/Iodinex64/wad2-moviesApp

The API communicates with it in the following fashion, replacing the old tmdb/stub implementation:

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~
