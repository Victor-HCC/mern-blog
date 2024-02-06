import expres from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoutes from './routes/user.route.js';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then( () =>
  console.log('MongoDB is connected')
).catch(err => {
  console.log(err);
})

const app = expres();

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
})

app.use('/api/user', userRoutes)