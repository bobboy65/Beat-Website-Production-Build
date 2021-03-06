import { useState, useEffect } from 'react';
import axios from "axios";




//Auth0 solution in the works

//use Token does NOT use a JWT, but uses a combination of 
//NODE JS / AUTH0 "proprietary" routing techniques

export const useToken = () => {
  //const [token, setToken] = useState();

// const getToken = async () => {
//   const PF = "http://localhost:8080/profile"
//     try {
//       const res = await axios.get(PF, {
//         mode: 'cors',
//         headers: {"authorization": "bearer TOKEN"}
//        // {'Access-Control-Allow-Origin': true}
      
//       });
//       const userToken = res.data
//       console.log({userToken})
//       //setToken("benis");
//       } catch (err) {
//           console.error(err)
//       }

// }
// getToken();

// const options = { 
//   method: "GET",
//   url: "http://localhost:8080/signin",
//   headers: { "authorization" : "Bearer YOUR_ACCESS_TOKEN" },
// };
const options = { 
  method: "POST",
  url: "http://dev-nwzswemm.us.auth0.com/oauth/token",
  headers: {'content-type': 'application/x-www-form-urlencoded',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
  "Access-Control-Allow-Methods": "POST"},

};

axios(options)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });


}

export default {
  useToken
  //, otherfunction if needed in the future
}