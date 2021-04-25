export const bookActions = {
  SETBOOKSCART: "SETBOOKSCART",
};

export function setBooksCart(booksCart) {
  return { type: bookActions.SETBOOKSCART, booksCart };
}



