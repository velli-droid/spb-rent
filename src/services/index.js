import axios from "axios";

export class RealtyCalendarClient {
    baseUrl = "https://realtycalendar.ru/widgets/bookings/search/";
    httpClient = axios.create({
        baseURL: this.baseUrl,
    });

    constructor(clientId) {
        this.clientId = clientId
    }

    async getApartments(humans, begin_date, end_date) {
        const result = await this.httpClient.get(
            `${this.clientId}.json`,
            {
                params: {
                    humans,
                    begin_date: begin_date ? begin_date : null,
                    end_date: end_date ? end_date : null
                }
            }
        )
        return result
    }
}

export const useRealtyCalendarClient = new RealtyCalendarClient("027f3555876b68e93d6def33c4ab5d2b")