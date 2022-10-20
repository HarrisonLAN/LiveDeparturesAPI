import { LDBWSClient } from "../services/soapReq/ldbwsClient";
import config from "../config";
const api = new LDBWSClient(config.TOKEN_SECRET);

const GetFastestDepartures = (payload: object) => {
    //return api.GetFastestDepartures();
};

const GetFastestDeparturesWithDetails = (payload: object) => {
    //return api.GetFastestDeparturesWithDetails(crs, crsList);
};

const GetNextDepartures = (payload: object) => {
    //return api.GetNextDepartures(crs, crsList);
};

const GetNextDeparturesWithDetails = (payload: object) => {
    //return api.GetNextDeparturesWithDetails(crs, crsList);
};

const repository = {
    GetFastestDepartures,
    GetFastestDeparturesWithDetails,
    GetNextDepartures,
    GetNextDeparturesWithDetails
};

export default repository;