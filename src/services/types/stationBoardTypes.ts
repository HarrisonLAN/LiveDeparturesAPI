declare type SoapParams = GeneralParameters |
    GetNextOrFastestParameters | GetServiceDetails

interface GeneralParameters {
    numRows?: number;
    crs: string;
    filterCrs?: string;
    filterType?: string;
    timeOffset?: number;
    timeWindow?: number;
}

interface GetNextOrFastestParameters {
    crs: string;
    filterList: string[];
    timeOffset?: number;
    timeWindow?: number;
}

interface GetServiceDetails {
    serviceID: string;
}

interface Board {
    generatedAt?: string;
    locationName?: string;
    crs?: string;
    filterLocationName?: string;
    filterCrs?: string;
    filterType?: string;
    ntccMessages?: string;
    platformAvaliable?: boolean;
    areServicesAvailable?: boolean;
}
interface DeparturesBoard extends Board {
    nrccMessages?: string;
    departures?: Array<DepartureItem>;
}
interface DeparturesBoardWithDetails extends Board {
    nrccMessages?: string;
    departures?: Array<DepartureItemWithCallingPoints>;
}
interface StationBoard extends Board {
    trainServices?: { service?: Array<ServiceItem> };
    busServices?: { service?: Array<ServiceItem> };
    ferryServices?: { service?: Array<ServiceItem> };
}
interface StationBoardWithDetails extends Board {
    trainServices?: { service?: Array<ServiceItemWithCallingPoints> };
    busServices?: { service?: Array<ServiceItemWithCallingPoints> };
    ferryServices?: { service?: Array<ServiceItemWithCallingPoints> };
}
interface Service {
    serviceType?: string;
    operator?: string;
    operatorCode?: string;
    isCancelled?: boolean;
    cancelReason?: string;
    delayReason?: string;
    length?: number;
    detatchFront?: boolean;
    isReverseFormation?: boolean;
    platform?: string;
    sta?: string;
    eta?: string;
    std?: string;
    etd?: string;
    adhocAlerts?: Array<string>;
}

interface ServiceItem extends Service {
    origin: Array<ServiceLocation>;
    destination: Array<ServiceLocation>;
    currentOrigins?: Array<ServiceLocation>;
    currentDestinations?: Array<ServiceLocation>;
    isCircularRoute?: boolean;
    filterLocationCancelled?: boolean;
    serviceID?: string;
    formation: FormationData;
}
interface ServiceDetails extends Service {
    generatedAt?: string;
    rsid?: string;
    locationName?: string;
    crs?: string;
    overdueMessage?: string;
    ata?: string;
    atd?: string;
    previousCallingPoints?: { callingPointList?: Array<CallingPoint> };
    subsequentCallingPoints?: { callingPointList?: Array<CallingPoint> };
}

interface ServiceItemWithCallingPoints extends ServiceItem {
    previousCallingPoints?: { callingPointList?: Array<CallingPoint> };
    subsequentCallingPoints?: { callingPointList?: Array<CallingPoint> };
}

interface CallingPoint {
    locationName: string;
    crs: string;
    st?: string;
    et?: string;
    at?: string;
    isCancelled?: boolean;
    length?: string;
    detatchFront?: boolean;
    adhocAlerts?: Array<string>;
}

interface ServiceLocation {
    locationName: string;
    crs: string;
    via?: string;
    futureChangeTo?: string;
    assocIsCancelled?: boolean;
}
interface FormationData {
    avgLoading?: string;
    coaches?: Array<CoachData>;
}
interface CoachData {
    coachClass?: string;
    loading?: string;
    number?: string;
    toilet?: ToiletAvailabilityType;
}
interface ToiletAvailabilityType {
    status?: string;
    value?: string;
}
interface DepartureItem {
    crs?: string;
    service?: Array<ServiceItem>;
}
interface DepartureItemWithCallingPoints {
    crs?: string;
    service?: Array<ServiceItemWithCallingPoints>;
}
interface FilterList {
    crs?: string;
}