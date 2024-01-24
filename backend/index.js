// import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
// import { mongoose } from "mongoose";
// import booksRoute from './routes/bookRoutes.js';
// import cors from 'cors';

// const app = express();

// //Middleware for parsing request body
// app.use(express.json());

// //Middleware to handle CORS Policy
// app.use(cors());
// // app.use(cors(
// //     {
// //         origin:'http://localhost:3000',
// //         methods:['GET','POST','PUT','DELETE'],
// //         allowedHeaders:['Content-Type'],
// //     }
// // ));

// app.get("/", (req, res) => {
//   console.log(req);
//   return res.status(234).send("Welcome to the Book Store");
// });

// //To serve routes from routes folder
// app.use('/books',booksRoute);


// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log("App connected to the database");
//     app.listen(PORT, () => {
//       console.log(`App is listening on port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware to handle CORS Policy
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to the Book Store");
});

// To serve routes from the routes folder
app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

