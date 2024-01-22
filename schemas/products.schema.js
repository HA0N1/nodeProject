import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'FOR_SALE',
    required: true,
  },
});
//createAt
productsSchema.set('timestamps', { createdAt: true, updatedAt: false });
export default mongoose.model('Products', productsSchema);
