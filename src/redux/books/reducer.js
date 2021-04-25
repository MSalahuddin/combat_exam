import { bookActions } from "./actions.js";

const initState = {
  booksCart: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case bookActions.SETBOOKSCART:
      return { ...state, booksCart: action.booksCart };
    default:
      return state;
  }
}
