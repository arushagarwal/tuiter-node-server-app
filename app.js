import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = "mongodb+srv://arushagarwal:arushagarwal@cluster0.pekigpl.mongodb.net/?retryWrites=true&w=majority"||"mongodb://127.0.0.1:27017/tuiter";

import mongoose from "mongoose";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());

HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);

