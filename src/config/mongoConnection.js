/* eslint-disable arrow-parens */
import mongoose from 'mongoose';

const options = {
  autoIndex: true,
};

const connect = () => {
  mongoose
    .connect(process.env.DB_URL, options)
    .then(() => {
      console.log('Database is connected');
    })
    .catch(err => {
      console.log(err.message);
    });
};

export default connect;
