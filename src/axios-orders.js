import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-cb627.firebaseio.com/"
});

export default instance;
