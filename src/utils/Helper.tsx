import { IproductFetch } from "../services/fetchProduct";

const currencyFormat = new Intl.NumberFormat("fa-IR", {
  style: "currency",
  currency: "IRR",
  maximumFractionDigits: 2,
});

export const commaMoney = (money: number) => {
  return currencyFormat.format(money);
};

export const productOfCart = (
  id: number,
  productList: IproductFetch[]
): number => {
  let result;
  result = productList.findIndex((item) => item.id === id);
  return result;
};
