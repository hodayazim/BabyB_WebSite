import axios from "axios";

export const GetAllUsers = () => {
  return axios
    .get(`http://localhost:17374/api/Users/GetAllUsers`)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      return error;
    });
};
