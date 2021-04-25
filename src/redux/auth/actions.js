export const authActions = {
  SETUSER: "SETUSER",
  SETCART: "SETCART",
  SETBOOKSCART: "SETBOOKSCART",
};

export function setUser(user) {
  return { type: authActions.SETUSER, user };
}

export function setCart(cart, showCart) {
  return { type: authActions.SETCART, cart, showCart };
}

export function setBooksCart(booksCart) {
  return { type: authActions.SETBOOKSCART, booksCart };
}



