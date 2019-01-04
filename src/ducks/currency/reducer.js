import * as actionTypes from "./actionTypes";
import { INIT_CURRENCY } from "../../common/Constants";

let ratesMap = new Map([["UAH", 1], ["USD", 30], ["EUR", 40]]);

export default function productsReducer(state = INIT_CURRENCY, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CHANGE_CURRENCY:
      return { designation: payload, rate: ratesMap.get(payload) };

    default:
      return state;
  }
}
