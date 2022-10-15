import { LDBWSClient } from "./soapReq/ldbwsClient";
import config from "./config";
const api = new LDBWSClient(config.TOKEN_SECRET);
async function req() {
  let res = await api.GetFastestDeparturesWithDetails("HNX", ["LVC"]);
}
req();