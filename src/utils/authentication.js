import Cookies from "js-cookie";

export const setAuthenticationCookie = async data => {
  const {
    jwtAccessToken,
    refreshToken,
    user: { userId }
  } = data;

  //let encodedString = btoa(`${userId}#${refreshToken}#${accessToken}`);
  const encodedString =  Buffer.from(`${userId}#${refreshToken}#${jwtAccessToken}`).toString('base64');
  console.log(encodedString,"ENCODED")
  //expire.setHours(expire.getHours() + 3)
  Cookies.set("SOMANI", encodedString, { expires: 7 });
  return null;
};

export const getAuthenticationCookie = async () => {
  let cookie =  Cookies.get("SOMANI");

  if (!cookie) return false;

  const decodedString = Buffer.from(cookie, 'base64').toString('ascii');
  console.log(decodedString,"DECODED")
  let [userId, refreshToken, jwtAccessToken] = decodedString.split("#");

  return { userId, refreshToken, jwtAccessToken };
};
