export const toInteger = (value: any, defaultValue = NaN) => {
  const integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
};
