import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  GET_AMOUNT,
  GET_TOTAL,
} from "./actions";
const reducer = (state, action) => {
  //console.log({ state, action });
  const { type } = action;
  switch (type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE: {
      // console.log("you have decreased");
      let tempCart = [];
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: action.payload.amount - 1 };
          }
          return item;
        });
      }
      return { ...state, cart: tempCart };
    }

    case INCREASE:
      //console.log("you have increased");
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: action.payload.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case REMOVE:
      // console.log("you have removed");
      const newCartItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: newCartItems };
    case GET_AMOUNT:
      // console.log("get amount");
      return { ...state };
    case GET_TOTAL:
      // console.log("get total");
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
