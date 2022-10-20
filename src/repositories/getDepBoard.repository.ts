import { LDBWSClient } from "../services/soapReq/ldbwsClient";
import config from "../config";
const api = new LDBWSClient(config.TOKEN_SECRET);

const getArrDepBoardWithDetails = () => {
    return api.GetFastestDeparturesWithDetails("HNX", ["LVC"]);
};

const repository = {
    getArrDepBoardWithDetails
};

export default repository;