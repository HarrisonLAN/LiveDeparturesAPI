import { Client, createClientAsync } from "soap";
import config from "../config";
import "../types/stationBoardTypes"
export class LDBWSClient {
    private url: string = config.URL
    private client: Client | null = null;
    private token: string = config.TOKEN_SECRET;
  
    async setup() {
      try {
        this.client = await createClientAsync(this.url);
        this.client.addSoapHeader({ AccessToken: { TokenValue: this.token } });
      } catch (e) {
        throw e;
      }
    }
  
    async GetDepartureBoard(crs: string, rows: number, toCrs?: string,
      timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
      let method: string = "GetArrDepBoardWithDetailsAsync";
      let params: GeneralParameters = {
        numRows: rows || 10,
        crs: crs,
        filterCrs: toCrs,
        filterType: "to",
        timeOffset: timeOffset,
        timeWindow: timeWindow
      };
      return this.call(method, params) as Promise<StationBoard>;
    }
  
    private async call(method: string, params: SoapParams): Promise<DataType> {
      if (!this.client) await this.setup();
      let response: Result = this.client && await this.client[method](params);
      return this.formatResult(response);
    }
  
    private formatResult(response: Result): DataType {
      const [data] = response;
      let res = null;
  
      if (Object.prototype.hasOwnProperty.call(data, 'GetStationBoardResult')) {
        const { GetStationBoardResult: stationData } = data as GetStationBoardResult;
        res = stationData;
      }
  
      else if (Object.prototype.hasOwnProperty.call(data, 'GetStationBoardWithDetailsResult')) {
        const { GetStationBoardWithDetailsResult: stationData } = data as GetStationBoardWithDetailsResult;
        res = stationData;
      }
  
      else if (Object.prototype.hasOwnProperty.call(data, 'GetDeparturesBoardResult')) {
        const { GetDeparturesBoardResult: stationData } = data as GetDeparturesBoardResult;
        res = stationData;
      }
  
      else if (Object.prototype.hasOwnProperty.call(data, 'GetDeparturesBoardWithDetailsResult')) {
        const { GetDeparturesBoardWithDetailsResult: stationData } = data as GetDeparturesBoardWithDetailsResult;
        res = stationData;
      }
  
      else if (Object.prototype.hasOwnProperty.call(data, 'GetServiceDetailsResult')) {
        const { GetServiceDetailsResult: stationData } = data as GetServiceDetailsResult;
        res = stationData;
      }
  
      return res;
    }
  }
  