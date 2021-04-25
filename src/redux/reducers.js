import Auth from "./auth/reducer";
import Books from "./books/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import roomReducer from "./room/roomReducer";

const rooReducer = {
  Auth,
  Books,
  toastr: toastrReducer,
  room: roomReducer,
};

export default rooReducer;
