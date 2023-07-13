export const commaMoney = (money: number): string => {
  let calc = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return calc;
};
