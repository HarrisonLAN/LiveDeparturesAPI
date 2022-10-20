// import { LDBWSClient } from "./soapReq/ldbwsClient";
// import config from "./config";
// const api = new LDBWSClient(config.TOKEN_SECRET);
// async function req() {
//   let res = await api.GetFastestDeparturesWithDetails("HNX", ["LVC"]);
// }
// req();

import config from "./config";
import express  from "express";
import cors from "cors";
import routes from "./routes/routes";
import {errHandler} from "./middlewares/err.handler";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api", routes)
app.use(errHandler.asyncHandler);

const start = () => {
    app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}.`));
};