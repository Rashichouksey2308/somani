import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import has from 'lodash/has'
import dropdownJSONS from '@/utils/jsons/dropdownOptions.json'

const _ = { has }

export const returnAuthToken = () => {
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [jwtAccessToken] = decodedString.split('#')
  return jwtAccessToken
}

/**
 * It returns an image based on the file extension of the file name passed to it
 * @param [name] - The name of the file.
 * @returns A function that returns a JSX element.
 */
export const returnDocFormat = (name = '') => {
  if (name.toLowerCase().endsWith('.xls') || name.toLowerCase().endsWith('.xlsx')) {
    return <img src="/static/excel.svg" className="img-fluid" alt="Pdf" />
  }

  if (name.toLowerCase().endsWith('.doc') || name.toLowerCase().endsWith('.docx')) {
    return <img src="/static/doc.svg" className="img-fluid" alt="Pdf" />
  }

  return <img src="/static/pdf.svg" className="img-fluid" alt="Pdf" />
}

/**
 * It takes a number, and returns a string with the number formatted with commas
 * @param number - The number you want to format.
 * @param [locales] - The locale to use.
 * @param [maximum=0] - The maximum number of digits after the decimal point.
 * @param [minimum=0] - The minimum number of digits to be used. If the minimum number of digits is not specified, it is
 * assumed to be 0.
 * @returns A function that takes in a number, locales, maximum, and minimum.
 */
export const returnReadableNumber = (number, locales = undefined, maximum = 0, minimum = 0) => {
  let convertedNumber = Number(number);
  if (convertedNumber) {
    return convertedNumber.toLocaleString(locales, {
      maximumFractionDigits: maximum,
      minimumFractionDigits: minimum
    })
  }
  return ''
}

/**
 * If the toast message is not active, then display the toast message
 * @param toastMessage - The message you want to display in the toast.
 * @returns A function that takes in a string and returns a toast.
 */
export const handleErrorToast = (toastMessage) => {
  if (!toast.isActive(toastMessage.toUpperCase())) {
    return toast.error(toastMessage.toUpperCase(), { toastId: toastMessage })
  }
}

/**
 * If the toast message is not active, then return a success toast with the message and a toastId
 * @param toastMessage - The message you want to display in the toast
 * @returns A toast message
 */
export const handleSuccessToast = (toastMessage) => {
  if (!toast.isActive(toastMessage.toUpperCase())) {
    return toast.success(toastMessage.toUpperCase(), { toastId: toastMessage })
  }
}

/**
 * It takes an object and an array of objects with keys and error messages. It then checks if the object has the keys in
 * the array and if not, it displays the error message
 * @param [obj] - The object to be validated
 * @param [validation] - [{key: 'name', error: 'Name is required'}, {key: 'email', error: 'Email is required'}]
 */
export const objectValidator = async ({ obj = {}, validation = [] }) => {
  let isValid = true
  await validation.every(element => {
    const { key, error } = element
    if (!_.has(obj, key)) {
      handleErrorToast(error)
      isValid = false
      return isValid
    }
    return isValid
  })
  return isValid
}

export const dropDownOptionHandler = (module) => {
  switch (module) {
    case 'LeadOnboarding&OrderApproval':
      return dropdownJSONS.dropDownOptionLeadOnboarding
    case 'Loading-Transit-Unloading':
      return dropdownJSONS.dropDownOptionLoading
    case 'Agreements&Insurance&LC&Opening':
      return dropdownJSONS.dropDownOptionAgreements
    case 'customClearanceAndWarehousing':
      return dropdownJSONS.dropDownOptionCustomClearance
    default:
      return dropdownJSONS.dropDownOptionPayments
  }
}
