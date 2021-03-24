export const authActions = {
  SETUSER: "SETUSER",
  SETCART: "SETCART",
};

export function setUser(user) {
  return { type: authActions.SETUSER, user };
}

export function setCart(cart, showCart) {
  return { type: authActions.SETCART, cart, showCart };
}
