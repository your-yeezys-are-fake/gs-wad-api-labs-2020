# Assignment 2 - Web API.

Name: Georgia Swindley

## Features.
 
 + Feature 1 - Installation of Morgan and Helmet to provide logging and extra security to API.
 + Feature 2 - Integration of viewing the cast and reviews for each individual movie into the API.
 + Feature 3 - Addition of login and sign up pages in React App. 
 + Feature 4 - Addition of protected routes which require a valid session token to view.
 + Feature 5 - Integration of upcoming, trending, now playing, and popular movies into the API. 

## Installation Requirements

+ Software 1 - NPM ("npm install" at terminal)
+ Software 2- Mongoose ("npm install mongoose")

## API Configuration

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
REACT_APP_TMDB_KEY= yourTMDBKey
```


## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A | N/A 
| /api/movies/{movieid}/credits | Get all cast credits      | N/A | N/A | N/A
| /api/movies/upcoming  | Get upcoming Movies | N/A | N/A | | N/A | 
| /api/movies/trending  | Get trending Movies | N/A | N/A | | N/A |   
| /api/movies/nowplaying  | Get now playing Movies | N/A | N/A | | N/A |  
| /api/movies/popular  | Get popular Movies | N/A | N/A | | N/A |  
| ... | ... | ... | ... | ...

## Security and Authentication

+ Feature 1 - Implementation of Helmet for API Security
+ Feature 2- Implementation of JWTs
+ Feature 3 - Implementation of Passports
+ Feature 4 - Full review route is Protected (requires sign in of valid account to view)

## Integrating with React App

I integrated my React app with the API by including a proxy to localhost 8080 in the package.json file. To retrieve data from the API, I replaced the fetch portion of the get method with a path to the required method in the new API instead of the previously used direct TMDB API link. 

~~~Javascript
 export const getPopularMovies = () => {
    return fetch(
      `/api/movies/popular`,{headers: {
        'Authorization': window.localStorage.getItem('token')
     }
   }
    )
      .then(res => res.json())
      .then(json => json.results);
  };

~~~

## Extra features

+ Feature 1 - Installation and use of Morgan and Helmet for API security and logging. 

## Independent learning.

+ Configuration of Morgan referenced from: https://www.digitalocean.com/community/tutorials/nodejs-getting-started-morgan
