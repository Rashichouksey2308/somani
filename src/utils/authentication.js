import Cookies from 'js-cookie'

/**
 * It takes in a data object, extracts the jwtAccessToken, refreshToken, and userId from it, and then sets a cookie with
 * the name SOMANI, and the value of the encodedString
 * @param data - {
 * @returns null
 */
export const setAuthenticationCookie = async (data) => {
  const {
    jwtAccessToken, refreshToken, user: { userId },
  } = data

  const encodedString = Buffer.from(`${userId}#${refreshToken}#${jwtAccessToken}`).toString('base64')

  Cookies.set('SOMANI', encodedString, { expires: 7 })
  return null
}

/**
 * It gets the cookie from the browser, decodes it, and returns the userId, refreshToken, and jwtAccessToken
 * @returns An object with the userId, refreshToken, and jwtAccessToken
 */
export const getAuthenticationCookie = async () => {
  const cookie = Cookies.get('SOMANI')

  if (!cookie) return false

  const decodedString = Buffer.from(cookie, 'base64').toString('ascii')

  const [userId, refreshToken, jwtAccessToken] = decodedString.split('#')

  return { userId, refreshToken, jwtAccessToken }
}
