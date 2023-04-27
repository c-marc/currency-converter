import rates from "../assets/rates";

export const convert = (valueFrom, rateFrom, rateTo) => {
  return (valueFrom / rateFrom) * rateTo;
};

export const getRateFromCurrency = (currency) => {
  return rates[currency];
};
