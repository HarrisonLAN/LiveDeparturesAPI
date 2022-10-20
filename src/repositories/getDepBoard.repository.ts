import { LDBWSClient } from "../services/soapReq/ldbwsClient";
import config from "../config";
const api = new LDBWSClient(config.TOKEN_SECRET);

const GetArrDepBoardWithDetails = (crs: string) => {
    return api.GetArrDepBoardWithDetails(crs);
};

const getDepartureBoard = (crs: string) => {
    return api.GetDepartureBoard(crs);
};

const getDepBoardWithDetails = (crs: string) => {
    return api.GetDepBoardWithDetails(crs);
};

const GetArrivalDepartureBoard = (crs: string) => {
    return api.GetArrivalDepartureBoard(crs);
};

const repository = {
    GetArrDepBoardWithDetails,
    getDepartureBoard,
    getDepBoardWithDetails,
    GetArrivalDepartureBoard
};

export default repository;