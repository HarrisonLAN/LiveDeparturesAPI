import { Client, createClientAsync } from "soap";
import "../types/stationBoardTypes"
export class LDBWSClient {
    private url: string = "https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx"
    private client: Client | null = null;
    private token: string;

    constructor(token: string) {
      this.token = token;
    }
    private async setup() {
      try {
        this.client = await createClientAsync(this.url);
        this.client.addSoapHeader({ AccessToken: { TokenValue: this.token } });
      } catch (e) {
        throw e;
      }
    }
    private async call(method: string, params: SoapParams){
      if (!this.client) await this.setup();
      return await this.client[method](params);
    }
    private getDepParams(crs: string, rows?: number, toCrs?: string,
      timeOffset?: number, timeWindow?: number){
        let params: GeneralParameters = {
          numRows: rows || 10,
          crs: crs,
          filterCrs: toCrs,
          filterType: "to",
          timeOffset: timeOffset,
          timeWindow: timeWindow
        };
      return params;
    }
    private getArrParams(crs: string, rows?: number, fromCrs?: string,
      timeOffset?: number, timeWindow?: number){
        let params: GeneralParameters = {
          numRows: rows || 10,
          crs: crs,
          filterCrs: fromCrs,
          filterType: "from",
          timeOffset: timeOffset,
          timeWindow: timeWindow
        };
      return params;
    }
    private getStationParams(crs: string, rows?: number, filterType?: string, filterCrs?: string, 
      timeOffset?: number, timeWindow?: number){
        let params: GeneralParameters = {
          numRows: rows || 10,
          crs: crs,
          filterCrs: filterCrs,
          filterType: filterType,
          timeOffset: timeOffset,
          timeWindow: timeWindow
        };
      return params;
    }
    private getFastestParams(crs: string, filterList?: string[], timeOffset?: number, 
      timeWindow?: number){
        let params: GetNextOrFastestParameters = {
          crs: crs,
          filterList: filterList,
          timeOffset: timeOffset,
          timeWindow: timeWindow
        };
      return params;
    }

  
    async GetDepartureBoard(crs: string, rows?: number, toCrs?: string,
      timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
      let method: string = "GetArrDepBoardWithDetailsAsync";
      var params = this.getDepParams(crs,rows,toCrs,timeOffset,timeWindow)
      var res = await this.call(method, params);
      const stationData: StationBoard = res[0].GetStationBoardResult;
      return stationData;
    }
    async GetDepBoardWithDetails(crs: string, rows?: number, toCrs?: string, 
        timeOffset?: number, timeWindow?: number): Promise<StationBoardWithDetails> {
        let method: string = "GetDepBoardWithDetailsAsync";
        var params = this.getDepParams(crs,rows,toCrs,timeOffset,timeWindow)
      var res = await this.call(method, params);
      const stationData: StationBoardWithDetails = res[0].GetStationBoardResult;
      return stationData;
    }
    async GetArrivalBoard(crs: string, rows?: number, fromCrs?: string, 
      timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
      let method: string = "GetArrivalBoardAsync";
      var params = this.getArrParams(crs,rows,fromCrs,timeOffset,timeWindow)
      var res = await this.call(method, params);
      const stationData: StationBoard = res[0].GetStationBoardResult;
      return stationData;
  }
  async GetArrBoardWithDetails(crs: string, rows?: number, fromCrs?: string, 
    timeOffset?: number, timeWindow?: number): Promise<StationBoardWithDetails> {
    let method: string = "GetArrBoardWithDetailsAsync";
    var params = this.getArrParams(crs,rows,fromCrs,timeOffset,timeWindow)
    var res = await this.call(method, params);
    const stationData: StationBoardWithDetails = res[0].GetStationBoardResult;
    return stationData;
}
async GetArrivalDepartureBoard(crs: string, rows?: number, filterType?: string, filterCrs?: string, 
  timeOffset?: number, timeWindow?: number): Promise<StationBoard> {
  let method: string = "GetArrivalDepartureBoardAsync";
  var params = this.getStationParams(crs,rows,filterType,filterCrs,timeOffset,timeWindow)
    var res = await this.call(method, params);
    const stationData: StationBoard = res[0].GetStationBoardResult;
    return stationData;
}
async GetArrDepBoardWithDetails(crs: string, rows?: number, filterType?: string, filterCrs?: string, 
  timeOffset?: number, timeWindow?: number): Promise<StationBoardWithDetails> {
  let method: string = "GetArrDepBoardWithDetailsAsync";
  var params = this.getStationParams(crs,rows,filterType,filterCrs,timeOffset,timeWindow)
    var res = await this.call(method, params);
    const stationData: StationBoardWithDetails = res[0].GetStationBoardResult;
    return stationData;
}
async GetNextDepartures(crs: string, filterList: string[],  
  timeOffset?: number, timeWindow?: number): Promise<DeparturesBoard> {
  let method: string = "GetNextDeparturesAsync";
  var params = this.getFastestParams(crs,filterList,timeOffset,timeWindow);
    var res = await this.call(method, params);
    const stationData: DeparturesBoard = res[0].GetStationBoardResult;
    return stationData;
}
async GetNextDeparturesWithDetails(crs: string, filterList: string[],  
  timeOffset?: number, timeWindow?: number): Promise<DeparturesBoardWithDetails> {
  let method: string = "GetNextDeparturesWithDetailsAsync";
  var params = this.getFastestParams(crs,filterList,timeOffset,timeWindow);
    var res = await this.call(method, params);
    const stationData: DeparturesBoardWithDetails = res[0].GetStationBoardResult;
    return stationData;
  }
  async GetFastestDepartures(crs: string, filterList: string[],  
    timeOffset?: number, timeWindow?: number): Promise<DeparturesBoard> {
    let method: string = "GetFastestDeparturesAsync";
    var params = this.getFastestParams(crs,filterList,timeOffset,timeWindow);
    var res = await this.call(method, params);
    const stationData: DeparturesBoard = res[0].GetDeparturesBoardResult;
    return stationData;
}
async GetFastestDeparturesWithDetails(crs: string, filterList: string[],  
  timeOffset?: number, timeWindow?: number): Promise<DeparturesBoardWithDetails> {
  let method: string = "GetFastestDeparturesWithDetailsAsync";
  var params = this.getFastestParams(crs,filterList,timeOffset,timeWindow);
    var res = await this.call(method, params);
    const stationData: DeparturesBoardWithDetails = res[0].GetDeparturesBoardWithDetailsResult;
    return stationData;
}
async GetServiceDetails(serviceID: string): Promise<ServiceDetails> {
  let method: string = "GetServiceDetailsAsync";
  let params: GetServiceDetails = { 
      serviceID: serviceID,
  };
  var res = await this.call(method, params);
    const stationData: ServiceDetails = res[0].GetStationBoardResult;
    return stationData;
}


}