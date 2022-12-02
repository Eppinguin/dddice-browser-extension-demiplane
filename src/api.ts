/**
 * API
 *
 * @format
 */

import axios from 'axios';

const API_URI = process.env.API_URI ?? 'https://dddice.com/api/1.0';

class API {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    axios.defaults.headers.common['Authorization'] = `Bearer ${this.apiKey}`;
    axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  public room = () => ({
    updateRolls: async (slug: string, dice: { is_cleared: boolean }) =>
      (await axios.patch(`${API_URI}/room/${slug}/roll`, { dice })).data.data,
  });
}

export default API;
