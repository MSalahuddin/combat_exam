import Auth from "./auth/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import roomReducer from "./room/roomReducer";

const rooReducer = {
  Auth,
  toastr: toastrReducer,
  room: roomReducer,
};

export default rooReducer;
