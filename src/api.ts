/**
 * API
 */

import axios from "axios";

// const API_URI = "https://dddice.com/api/1.0";
const API_URI = "http://localhost:8000/api/1.0";

export const DefaultStorage: IStorage = {
  apiKey: undefined,
  room: undefined,
  theme: undefined,
};

export interface IRoom {
  slug: string;
  name: string;
}

export interface IStorage {
  apiKey?: string;
  room?: string;
  theme?: string;
}

export interface ITheme {
  id: string;
  name: string;
}

export interface IUser {
  uuid: string;
  username: string;
}

class API {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;

    axios.defaults.headers.common["Authorization"] = `Bearer ${this.apiKey}`;
    axios.defaults.headers.common["Content-Type"] = `application/json`;
  }

  public user = () => ({
    get: async () => (await axios.get(`${API_URI}/user`)).data.data,
  });

  public roll = () => ({
    create: async (params: {
      dice: { type: string; theme: string }[];
      room: string;
      operator: object;
    }) => (await axios.post(`${API_URI}/roll`, params)).data.data,
  });

  public room = () => ({
    list: async () => (await axios.get(`${API_URI}/room`)).data.data,
    updateRolls: async (slug: string, dice: { is_cleared: boolean }) =>
      (await axios.patch(`${API_URI}/room/${slug}/roll`, { dice })).data.data,
  });

  public diceBox = () => ({
    list: async (filter?: string) => {
      const query = filter ? `?filter=${filter}` : "";
      return (await axios.get(`${API_URI}/dice-box${query}`)).data.data;
    },
  });
}

export default API;
