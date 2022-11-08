<<<<<<< Updated upstream
import React from 'react';
import Cookies from 'js-cookie';


export const returnAuthToken = () => {
    const cookie = Cookies.get('SOMANI');
    const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
    const [userId, refreshToken, jwtAccessToken] = decodedString.split('#');
    return jwtAccessToken;
}




export const returnReadableNumber = (number, locales = undefined, maximum = 0, minimum = 0) => {
    if (number) {
        return number.toLocaleString(locales, {
            maximumFractionDigits: maximum,
            minimumFractionDigits: minimum
        })
    }
}
=======
import React from 'react'
import Cookies from 'js-cookie'

export const returnAuthToken = () => {
  const cookie = Cookies.get('SOMANI')
  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')
  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')
  return jwtAccessToken
}

export const returnReadableNumber = (number, locales = undefined, maximum = 0, minimum = 0) => {
  if (number) {
    return number.toLocaleString(locales, {
      maximumFractionDigits: maximum,
      minimumFractionDigits: minimum
    })
  }
}
>>>>>>> Stashed changes
