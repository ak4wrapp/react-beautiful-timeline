// This function divides the provided value by 2 and return the value in string format
export const divedeHalfNumberValueInString = (value: string) => {
  const numericValue = value ? parseFloat(value.replace(/[^0-9.-]+/g, "")) : 0;
  return (
    numericValue && value.replace(`${numericValue}`, `${numericValue / 2}`)
  );
};
