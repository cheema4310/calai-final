const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = { connect };
