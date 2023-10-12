import dbConfig from "./db-config";
import mongoose, { mongo } from "mongoose";

mongoose.connect(`mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.cluster}.mongodb.net/${dbConfig.dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as mongoose.ConnectOptions
);

export const db = mongoose.connection;