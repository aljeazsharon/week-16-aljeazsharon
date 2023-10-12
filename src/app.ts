import express from "express";
import "dotenv/config";
import routes from "./routes/main-routes";
import {db} from "./config/db-connect";
import transferMiddleware from "./middleware";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3311;

app.use(express.json());
transferMiddleware(app);
app.use(routes);

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('Connect to Database');
});

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`)
});