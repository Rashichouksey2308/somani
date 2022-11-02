export const panValidation = (e) => {
  let panValue = e.toUpperCase();
  let regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if (regpan.test(panValue)) {
    return true;
    // valid pan card number
  } else {
    return false;
    // invalid pan card number
  }
};

export const emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const phoneValidation = (phone) => {
  let regex = /^\d{10}$/;
  if (phone.match(regex)) {
    return true;
  } else {
    return false;
  }
};

export const gSTINValidation = (gstin) => {
  var regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  if (gstin.toUpperCase().match(regex)) {
    return true;
  } else {
    return false;
  }
};

export const CovertvaluefromtoCR = (value, conversionValue = 10000000) => {
  let newValue = Number(value / conversionValue);
  return newValue;
};

export const convertValue = (value, coversionRate = 10000000, toFixed = 2) => {
  let newValue = Number(value / coversionRate);
  if (value === 0) {
    return 0;
  }
  if (!newValue) {
    return '';
  } else {
    return newValue;
  }
};
export const predictiveSearch = (text) => {
  let regex = /[a-zA-Z0-9]{4}/;
  return regex.test(text);
};

export const isInTheFuture = (date) => {
  const today = new Date();

  today.setHours(23, 59, 59, 998);

  return date > today;
};

export const handleCurrencyOrder = (unitOfValue, value) => {
  if (unitOfValue === 'Crores') {
    return Number(value) * 10000000;
  } else if (unitOfValue === 'Million') {
    return Number(value) * 1000000;
  } else if (unitOfValue === 'Lakh') {
    return Number(value) * 100000;
  } else if (unitOfValue === 'BRITISH POUND') {
    return Number(value) * 1000000;
  }
};

export const addPrefixOrSuffix = (
  unitOfValue,
  type,
  where = 'null',
  showINR = 'false',
) => {
  if (where == 'front') {
    if (type != undefined) {
      if (unitOfValue == '') {
        return '';
      }

      let symbol = type;
      if (type == 'INR' || 'RUPEE') {
        symbol = 'INR';
      }
      if (type == 'USD') {
        symbol = 'USD';
      }

      if (type == 'EUR') {
        symbol = 'EUR';
      }
      if (type == 'CHF') {
        symbol = 'CHF';
      }
      if (type == 'EURO') {
        symbol = 'EURO';
      }
      if (type == 'BRITISHPOUND') {
        symbol = 'POUND';
      }
      let removedValue;

      removedValue = unitOfValue
        ?.toLocaleString()
        ?.replaceAll('E', '')
        .replaceAll('U', '')
        .replaceAll('R', '')
        .replaceAll('O', '')
        .replaceAll('I', '')
        .replaceAll('N', '')
        .replaceAll('R', '')
        .replaceAll('U', '')
        .replaceAll('S', '')
        .replaceAll('D', '')
        .replaceAll('P', '')
        .replaceAll('O', '')
        .replaceAll('U', '')
        .replaceAll('U', '')
        .replaceAll('D', '')
        .replaceAll('C', '')
        .replaceAll('H', '')
        .replaceAll('A', '')
        .replaceAll(',', '')
        .replace(/ /g, '');

      let newValue =
        symbol + '  ' + Number(removedValue)?.toLocaleString('en-IN');
      return newValue;
    } else {
      return '';
    }
  } else {
    if (unitOfValue !== undefined) {
      if (unitOfValue == '') {
        return '';
      }

      let removedValue = unitOfValue
        ?.toString()
        .replaceAll('M', '')
        .replaceAll('T', '')
        .replaceAll('%', '')
        .replaceAll('K', '')
        .replaceAll('G', '')
        .replaceAll('M', '')
        .replaceAll('Cr', '')
        .replaceAll('i', '')
        .replaceAll('l', '')
        .replaceAll('o', '')
        .replaceAll('n', '')
        .replaceAll('s', '')
        .replaceAll('I', '')
        .replaceAll('N', '')
        .replaceAll('R', '')
        .replaceAll('U', '')
        .replaceAll('S', '')
        .replaceAll('D', '')
        .replaceAll(',', '')
        .replace(/ /g, '');

      let newValue = `${Number(removedValue)?.toLocaleString(
        'en-IN',
      )}${` `}${type}`;
      return newValue;
    } else {
      return '';
    }
  }
};
export const removePrefixOrSuffix = (unitOfValue) => {
  if (unitOfValue !== undefined || unitOfValue !== 'undefined') {
    let newValue = unitOfValue
      ?.toString()
      .replaceAll('M', '')
      .replaceAll('T', '')
      .replaceAll('%', '')
      .replaceAll('K', '')
      .replaceAll('G', '')
      .replaceAll('₹', '')
      .replaceAll('$', '')
      .replaceAll('€', '')
      .replaceAll('£', '')
      .replaceAll('C', '')
      .replaceAll('r', '')
      .replaceAll('i', '')
      .replaceAll('l', '')
      .replaceAll('o', '')
      .replaceAll('n', '')
      .replaceAll('s', '')
      .replaceAll('M', '')
      .replaceAll('I', '')
      .replaceAll('N', '')
      .replaceAll('R', '')
      .replaceAll('U', '')
      .replaceAll('S', '')
      .replaceAll('D', '')
      .replaceAll('E', '')
      .replaceAll('U', '')
      .replaceAll('R', '')
      .replaceAll('O', '')
      .replaceAll('I', '')
      .replaceAll('N', '')
      .replaceAll('R', '')
      .replaceAll('U', '')
      .replaceAll('S', '')
      .replaceAll('D', '')
      .replaceAll('P', '')
      .replaceAll('O', '')
      .replaceAll('U', '')
      .replaceAll('U', '')
      .replaceAll('D', '')
      .replaceAll('C', '')
      .replaceAll('H', '')
      .replaceAll('A', '')
      .replaceAll(',', '')
      .replace(/ /g, '')
      .replace(/ /g, '');

    return Number(newValue);
  }
};
export const checkNan = (unitOfValue, type = false, number = 2) => {
  if (isNaN(unitOfValue)) {
    return '';
  } else {
    if (type == 'no') {
      return Number(unitOfValue)?.toFixed(2);
    }
    if (!type) {
      // return Number(Number(unitOfValue))?.toLocaleString('en-IN', {

      return Number(unitOfValue)?.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
      });
    } else {
      return unitOfValue?.toLocaleString('en-IN', {
        minimumFractionDigits: 2,
      });
    }
  }
};

export const addPrefixSymbol = (type = '') => {
  if (type != undefined) {
    let symbol = type;
    if (type == 'INR' || 'RUPEE') {
      symbol = 'INR';
    }
    if (type == 'USD') {
      symbol = 'USD';
    }

    if (type == 'EUR') {
      symbol = 'EUR';
    }

    if (type == 'CHF') {
      symbol = 'CHF';
    }
    if (type == 'BRITISHPOUND') {
      symbol = 'POUND';
    }
    return symbol;
  } else {
    return '';
  }
};
