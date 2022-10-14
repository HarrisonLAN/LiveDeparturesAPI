import { LDBWSClient } from "./soapReq/ldbwsClient";
const api = new LDBWSClient();
async function req() {
  let res = await api.GetDepartureBoard("HNX", 10);
  console.log(res)
}
req();