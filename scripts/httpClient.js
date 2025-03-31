import { settings } from './config/settings.js';
export default class HttpClient {
  constructor(endpoint) {
    this.endpoint = settings.apiUrl + endpoint;
  }

  async get() {
    try {
      const response = await fetch(this.endpoint);

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          `Ett fel inträffade: ${response.status}, ${response.statusText}`
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
