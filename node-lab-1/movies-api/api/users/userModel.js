import mongoose, { isValidObjectId } from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    id: {type: String, unique: false, required: true, index: true, sparse: true},
    title:{type: String, required: true}
  });
  
  const UserSchema = new Schema({
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true },
    favourites: [MovieSchema]
  });
  


export default mongoose.model('User', UserSchema);