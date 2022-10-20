import { LDBWSClient } from "../services/soapReq/ldbwsClient";
import config from "../config";
const api = new LDBWSClient(config.TOKEN_SECRET);

const GetArrBoardWithDetails = (crs: string) => {

    return api.GetArrBoardWithDetails(crs);
};
const GetArrivalBoard = (crs: string) => {
    return api.GetArrivalBoard(crs);
};

const repository = {
    GetArrBoardWithDetails,
    GetArrivalBoard
};

export default repository;