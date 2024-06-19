import RealtyCalendarClient from "../catalogWidget/services";

export function initRealtyClient(clientId) {
    return new RealtyCalendarClient(clientId)
}