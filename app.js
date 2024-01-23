// app.js

import express from 'express';
import connect from './schemas/index.js';
import projectRouter from './routes/products.router.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI); //몽고 db를 연결하기 위한 connect함수 실행.
// json형태로 서버에 body 데이터를 전달하면,req.body에 데이터를 변환하여 넣어준다.
app.use(express.json());
// form content type 에서 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api', projectRouter);
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
