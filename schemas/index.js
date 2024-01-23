import mongoose from 'mongoose';
import dotenv from 'dotenv';

// .env 파일의 위치 지정
dotenv.config({ path: './.env' });

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    })
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

export default connect;
