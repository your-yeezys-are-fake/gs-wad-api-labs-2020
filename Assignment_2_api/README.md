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
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

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

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  
