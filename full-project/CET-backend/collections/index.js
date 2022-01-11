const nodbConfig = require("../config/nodb.config.js");
const mongoose = require("mongoose");
const uri = "mongodb+srv://adminMongo:admin1234@cluster0.38mkx.mongodb.net/CET?retryWrites=true&w=majority";
const db_path = nodbConfig.dialect + "://" + nodbConfig.HOST + "/" + nodbConfig.noDB;
const config = {
  useNewUrlParser: true,
  useCreateIndex: false,
  useFindAndModify: false,
  useUnifiedTopology: true,
  poolSize: 4,
};

mongoose
  .connect(uri, config)
  .then(() => console.log("DB connnection successful!"))
  .catch((err) => {
    console.error.bind(console, "MongoDB connection error:");
  });
