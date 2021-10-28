import axios from "axios";

const verifyUser = (code) => {
    return axios.post('http://localhost:8080/users/confirm/' + code).then((response) => {
      return response.data;
    });
  };

  export default {
      verifyUser
  }