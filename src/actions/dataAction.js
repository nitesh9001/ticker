import { GET_ALL_DATA, SET_LOADING } from "./types";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket("wss://api-pub.bitfinex.com/ws/2");
const msg = JSON.stringify({
  event: "subscribe",
  channel: "ticker",
  symbol: "tBTCUSD",
});

export const setLoading = (data) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: data,
  });
};

// CATEGORY LIST
export const getData = (data) => (dispatch) => {
  dispatch(setLoading(true));
  client.onopen = () => {
    console.log("websocket is connected");
    client.send(msg);
  };
  client.onmessage = (message) => {
    const dataFromServer = JSON.parse(message.data);
    console.log("got reply !", dataFromServer);
    dispatch({
      type: GET_ALL_DATA,
      payload: dataFromServer,
    });
  };
};

export const closeData = () => (dispatch) => {
  client.onclose = function (event) {
    console.log("WebSocket is closed now.");
  };
};
