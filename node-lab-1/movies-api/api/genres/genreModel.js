import mongoose, { isValidObjectId } from 'mongoose';

const Schema = mongoose.Schema;
  
  const GenreSchema = new Schema({
    id: {type: String, unique: false, required: true, index: true, sparse: true},
    title: {type: String, required: true },
  });
  


export default mongoose.model('Genre', GenreSchema);