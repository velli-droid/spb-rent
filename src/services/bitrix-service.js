import axios from "axios";

export class BitrixClient {
  baseUrl = "https://rent198.ru/api";
  httpClient = axios.create({
    baseURL: this.baseUrl,
  });

  async getUserData() {
    return await this.httpClient.get("/profile");
  }

  async updateUserData(phoneNumber, name, email) {
    return await this.httpClient.post("/profile", null, {
      params: {
        phoneNumber,
        name,
        email,
      },
    });
  }

  async logout() {
    return await this.httpClient.post("/logout");
  }

  async auth(phoneNumber) {
    return await this.httpClient.post("/authorize", null, {
      params: {
        phoneNumber,
      },
    });
  }

  async resendCode(signedData) {
    return await this.httpClient.post("/resend", null, {
      params: {
        signedData,
      },
    });
  }

  async checkCode(code, signedData) {
    return await this.httpClient.post("/checkCode", null, {
      params: {
        code,
        signedData,
      },
    });
  }
}
