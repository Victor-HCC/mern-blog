import expres from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then( () =>
  console.log('MongoDB is connected')
).catch(err => {
  console.log(err);
})

const app = expres();

app.use(expres.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})
