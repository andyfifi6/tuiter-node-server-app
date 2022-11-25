import express from 'express';
import cors from "cors";
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";


const app = express()
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
mongoose.connect(process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter')
app.listen(process.env.PORT || 4000)

