import * as actionTypes from "./actionTypes";

export const changeCurrency = currency => ({
  type: actionTypes.CHANGE_CURRENCY,
  payload: currency
});


