export const panValidation = (e) => {
  var panValue = e.toUpperCase()
  var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/

  if (regpan.test(panValue)) {
    return true
    // valid pan card number
  } else {
    return false
    // invalid pan card number
  }
}

export const emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}

export const phoneValidation = (phone) => {
  var regex = /^\d{10}$/
  if (phone.match(regex)) {
    return true
  } else {
    return false
  }
}

export const predictiveSearch = (text) => {
  var regex = /[a-zA-Z0-9]{4}/
  return regex.test(text)
}

export const isInTheFuture = (date) => {
  const today = new Date()

  today.setHours(23, 59, 59, 998)

  return date > today
}

export const handleCurrencyOrder = (unitOfValue, value) => {
  if (unitOfValue === 'INR') {
    return Number(value) * 10000000
  } else if (unitOfValue === 'USD') {
    return Number(value) * 1000000
  } else if (unitOfValue === 'EURO') {
    return Number(value) * 1000000
  } else if (unitOfValue === 'BRITISH POUND') {
    return Number(value) * 1000000
  }
}

export const addPrefixOrSuffix = (unitOfValue, type, where) => {
  console.log(unitOfValue, type, 'type')
  if (where == 'front') {
    if (type != undefined) {
      if (unitOfValue == '') {
        return ''
      }
      let allSymbols = ['₹', '$', '€', '£']
      let symbol = type
      if (type == 'INR' || 'RUPEE') {
        symbol = '₹'
        console.log(symbol, 'symbol')
      }
      if (type == 'USD') {
        symbol = '$'
        console.log(symbol, 'symbol')
      }
      if (type == 'EURO') {
        symbol = '€'
      }
      if (type == 'BRITISHPOUND') {
        symbol = '£'
      }
      let removedValue

      removedValue = unitOfValue
        ?.toString()
        ?.replaceAll('₹', '')
        .replaceAll('$', '')
        .replaceAll('€', '')
        .replaceAll('£', '')

      let newValue = symbol + removedValue?.toString()
      console.log(newValue, 'newValue')
      return newValue
    } else {
      return ''
    }
  } else {
    console.log(unitOfValue, 'type', type)
    if (unitOfValue !== undefined) {
      if (unitOfValue == '') {
        return ''
      }
      let removedValue = unitOfValue
        ?.toString()
        .replaceAll('M', '')
        .replaceAll('T', '')
        .replaceAll('%', '')
        .replaceAll('K', '')
        .replaceAll('G', '')

      let newValue = `${removedValue}${type}`
      console.log('999', type, removedValue)
      return newValue
    } else {
      return ''
    }
  }
}
export const removePrefixOrSuffix = (unitOfValue, type) => {
  let newValue = unitOfValue.replaceAll(type, '')
  return Number(newValue)
}
