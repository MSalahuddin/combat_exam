import { authActions } from "./actions.js";

const initState = {
  user: null,
  cart: [],
  showCart: false,
  booksCart: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case authActions.SETUSER:
      return { ...state, user: action.user };
    case authActions.SETCART:
      return { ...state, cart: action.cart, showCart: action.showCart };
    case authActions.SETBOOKSCART:
      return { ...state, booksCart: action.booksCart };
    default:
      return state;
  }
}
