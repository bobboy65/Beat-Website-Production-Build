import { useState } from 'react';
//Auth0 solution in the works

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
  
    const userToken = tokenString
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  //returns an object that cointains the token and saveToken
  //set to the setToken property name
  return {
    setToken: saveToken,
    token
  }
}