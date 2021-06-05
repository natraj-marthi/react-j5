import axios from "axios";
//const baseUrl = 'https://magic-express.herokuapp.com/cricket/api';
const baseUrl = "http://localhost:3030/cricket/api";

//clients are suppose to call this function in a async manner- promise
export function getPlayers() {
  return axios.get(`${baseUrl}/players`);
}

export function getPlayer(id) {
  return axios.get(`${baseUrl}/players/${id}`);
}

export function deletePlayer(id) {
  console.log(id);
  return axios.delete(`${baseUrl}/players/${id}`);
}

export function createPlayer(player) {
  return axios.post(`${baseUrl}/players`, player, {
    headers: {
      "Content-Type": "Application/json",
    },
  });
}

  export function updatePlayer(player) {
    return axios.patch(`${baseUrl}/players/${player.id}`, player, {
      headers: {
        "Content-Type": "Application/json",
      },
    });
  }

