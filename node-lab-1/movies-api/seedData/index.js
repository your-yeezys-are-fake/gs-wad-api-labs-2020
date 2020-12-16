import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genreModel';
import {movies} from './movies.js';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
]

const genres = [
  {
    'id': '1342',
    'title': 'Comedy',
  },
  {
    'id': '4562',
    'title': 'Action',
  },
]

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

    export async function loadGenres() {
      console.log('load genre Data');
        try {
          await genreModel.deleteMany();
          await genreModel.collection.insertMany(genres);
          console.info(`${genres.length} genres were successfully stored.`);
        } catch (err) {
          console.error(`failed to Load genre Data: ${err}`);
        }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

    