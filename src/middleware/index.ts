import helmetMiddleware from "./helmet-middleware";
import morganMiddleware from "./morgan-middleware";
import xRequestId from "./xrequestid-middleware";
import { Express } from "express";

const transferMiddleware = (app:Express) => {
    helmetMiddleware(app);
    morganMiddleware(app);
    app.use(xRequestId);
}

export default transferMiddleware;