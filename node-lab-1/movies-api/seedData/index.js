import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genreModel';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

const genres = [
    {
    'title': 'action'
},

{'title' : 'comedy'
}
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await userModel.collection.insertMany(users);
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
};

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
    