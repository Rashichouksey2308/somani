/**
 * It takes a string as an argument and returns true if the string is a valid PAN number, else returns false
 * @param e - The value of the input field
 * @returns A boolean value
 */
export const panValidation = (e) => {
  let panValue = e.toUpperCase();
  let PANRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  return PANRegex.test(panValue);
};

/**
 * It checks if the email is valid
 * @param email - The email address to validate.
 * @returns A boolean value.
 */
export const emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

/**
 * It returns true if the phone number is 10 digits long, and false otherwise
 * @param phone - The phone number to validate.
 * @returns A boolean value.
 */
export const phoneValidation = (phone) => {
  let regex = /^\d{10}$/;
  return !!phone.match(regex);
};

/**
 * It checks if the given GSTIN is valid or not
 * @param gstin - The GSTIN number to be validated.
 * @returns A boolean value.
 */
export const gSTINValidation = (gstin) => {
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return !!gstin.toUpperCase().match(regex);
};

/**
 * It takes a value and converts it to a number, then divides it by a conversion value (defaults to 10000000) and returns
 * the result
 * @param value - The value you want to convert.
 * @param [conversionValue=10000000] - The value to convert to.
 * @returns A function that takes in two arguments, value and conversionValue.
 */
export const CovertvaluefromtoCR = (value, conversionValue = 10000000) => {
  return Number(value / conversionValue);
};

/**
 * It takes a value, divides it by a conversion rate, and returns the result
 * @param value - The value you want to convert.
 * @param [coversionRate=10000000] - This is the conversion rate from the original value to the new value.
 * @param [toFixed=2] - The number of decimal places to round the number to.
 */
export const convertValue = (value, coversionRate = 10000000, toFixed = 2) => {
  let newValue = Number(value / coversionRate);
  if (value === 0) return 0;
  if (!newValue) return '';
  return newValue;
};

/**
 * It returns true if the text contains at least 4 alphanumeric characters
 * @param text - The text to be tested.
 * @returns A boolean value
 */
export const predictiveSearch = (text) => {
  let regex = /[a-zA-Z0-9]{4}/;
  return regex.test(text);
};

export const checkForPlusSign = (text) => {
  let regex = /[^a-zA-Z0-9 ]/g;
  return regex.test(text);
};

/**
 * If the date is greater than today, return true.
 * @param date - The date to check
 * @returns A boolean value.
 */
export const isInTheFuture = (date) => {
  const today = new Date();
  today.setHours(23, 59, 59, 998);
  return date > today;
};

/**
 * It takes in a unit of value and a value and returns the value in terms of millions
 * @param unitOfValue - The unit of value of the currency.
 * @param value - The value of the property
 * @returns A function that takes two arguments, unitOfValue and value.
 */
export const handleCurrencyOrder = (unitOfValue, value) => {
  switch (unitOfValue.toUpperCase()) {
    case 'CRORES':
      return Number(value) * 10000000;
    case 'MILLION':
      return Number(value) * 1000000;
    case 'LAKH':
      return Number(value) * 100000;
    case 'BRITISH POUND':
      return Number(value) * 1000000;
    default:
      return Number(value) * 1000000;
  }
};

/**
 * It takes a number, a type of unit and a position (front or back) and returns a string with the number and the unit of
 * value in the specified position
 * @param unitOfValue - The value that you want to add the prefix or suffix to.
 * @param type - The type of the value, i.e. '₹', '$', '€', '£', '¥', '₩', '₽', '₹', '₺', '₴', '₵', '
 * @param [where=front] - front or back
 * @returns A function that takes in 3 parameters and returns a string.
 */
export const addPrefixOrSuffix = (unitOfValue, type, where = 'front') => {
  if (where === 'front')
    return `${addPrefixSymbol(type)} ${Number(removePrefixOrSuffix(unitOfValue)).toLocaleString('en-IN')}`;
  return `${Number(removePrefixOrSuffix(unitOfValue)).toLocaleString('en-IN')} ${type}`;
};

/**
 * It takes a string, removes all non-numeric characters, and returns a number
 * @param unitOfValue - The value that you want to remove the prefix or suffix from.
 * @returns The number of the unit of value.
 */

export const removePrefixOrSuffix = (unitOfValue) => {
  const value = String(unitOfValue).replace(/([a-zA-Z])/g, '');
  console.log(value, 'SDadsasd', unitOfValue);
  return Number(value);
};

/**
 * It checks if the value is a number, if it is, it returns the value in the format you want
 * @param unitOfValue - The value you want to check for NaN
 * @param [type=false] -
 * @param [number=2] - The number of decimal places to round to.
 */
export const checkNan = (unitOfValue, type = false, number = 2) => {
  if (isNaN(unitOfValue)) return '';
  if (type === 'no') return Number(unitOfValue)?.toFixed(2);
  if (!type) {
    return Number(unitOfValue)?.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
    });
  }
  return unitOfValue?.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
  });
};

/**
 * It takes a symbol as an argument and returns the symbol with a prefix if the symbol is INR or RUPEE
 * @param [symbol] - The currency symbol you want to add a prefix to.
 */
export const addPrefixSymbol = (symbol = '') => {
  if (symbol === 'RUPEE') return 'INR';
  if (symbol === 'BRITISHPOUND') return 'POUND';
  return symbol;
};

export const crConverter = (amount = 0) =>
  ` ₹ ${Number(amount / 10000000).toLocaleString('en-IN', {
    maximumFractionDigits: 2,
  })} Cr`;
export const specialCharCheck = (val) => {
  let reg = /^[a-zA-Z0-9]{4,10}$/;
  return reg.test(val);
};
