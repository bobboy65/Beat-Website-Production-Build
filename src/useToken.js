import { useState, useEffect } from 'react';
import axios from "axios";
//Auth0 solution in the works

//use Token does NOT use a JWT, but uses a combination of 
//NODE JS / AUTH0 "proprietary" routing techniques

export const useToken = () => {
  //const [token, setToken] = useState();

const getToken = async () => {
  const PF = "http://localhost:8080/profile"
    try {
      const res = await axios.get(PF, {
        mode: 'cors',
        headers: {'Access-Control-Allow-Origin': true}
      
      });
      const userToken = res.data
      console.log({userToken})
      //setToken("benis");
      } catch (err) {
          console.error(err)
      }

}
getToken();


}

export default {
  useToken
  //, otherfunction if needed in the future
}