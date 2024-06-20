import axios from "axios";

export class RealtyClient {
  baseUrl = "https://realtycalendar.ru/widgets/bookings";
  httpClient = axios.create({
    baseURL: this.baseUrl,
  });

  constructor(clientToken) {
    this.clientToken = clientToken;
  }

  async getApartments(humans, begin_date, end_date) {
    const result = await this.httpClient.get(
      `/search/${this.clientToken}.json`,
      null,
      {
        params: {
          humans,
          begin_date: begin_date ? begin_date : null,
          end_date: end_date ? end_date : null,
        },
      }
    );
    return result;
  }

  async getPrice(apartmentId, humans, begin_date, end_date) {
    const result = await this.httpClient.get(
      `/apartments/${apartmentId}/price.json`,
      null,
      {
        params: {
          token: this.clientToken,
          humans,
          begin_date,
          end_date,
        },
      }
    );
    return result;
  }

  async validateCalendarEvent(apartmentId, client, event_calendar) {
    const result = await this.httpClient.post(
      `/apartments/${apartmentId}/event_calendars/valid`,
      {
        client,
        event_calendar,
      },
      {
        params: {
          token: this.clientToken,
        },
      }
    );
    return result;
  }

  async createCalendarEvent(apartmentId, client, event_calendar) {
    const result = await this.httpClient.post(
      `/apartments/${apartmentId}/event_calendars`,
      {
        client,
        event_calendar,
      },
      {
        params: {
          token: this.clientToken,
        },
      }
    );
    return result;
  }

  async getCalendarEvent(eventId) {
    const result = await this.httpClient.get(
      `/event_calendars/${eventId}`,
      null,
      {
        params: {
          token: this.clientToken,
        },
      }
    );
    return result;
  }
}

export const useRealtyClient = new RealtyClient(
  "027f3555876b68e93d6def33c4ab5d2b"
);
