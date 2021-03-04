import axios from "../axios";

// constructor(props) {
//   super(props);
// }

// export default function login(user) {
//   debugger;

//   console.log("login");
//   var scope = this;
//   // axios
//   //   .get("http://localhost:21309/api/Category/GetAllCategories")
//   //   .then((result) => {
//   //     //setMyArray(result.data);
//   //     console.log(result.data);
//   //   });
//   // const response =
//   axios
//     .get(
//       "http://localhost:21309/api/User/Login/" +
//         user.EMail +
//         "/" +
//         user.UserPassword
//     )
//     .then((res) => {
//       //   this.setState({ IdUser: res.data });
//       //   this.setState({ redirect: true });

//       localStorage.removeItem("IdUser");
//       localStorage.removeItem("EMail");
//       localStorage.setItem("IdUser", res.data);
//       localStorage.setItem("EMail", user.EMail);
//       scope.history.push("/");
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// }

// const baseURL = "http://localhost:21309/api/";
// export default function login(event) {}
//   const IdUser = "";
//   debugger;
//   console.log("login");
//   axios
//     .get(
//       `http://localhost:21309/api/User/Login/` +
//         state.EMail +
//         "/" +
//         state.UserPassword
//     )
//     .then(function (res) {
//       console.log(res);
//     });
// }

// export default function GetIdUser(user) {
//   debugger;

//   axios
//     .post(`http://localhost:21309/api/ShoppingCart/Login`, user)

//     .then(function (response) {
//       // handle success

//       // user.idUser = response.data;
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

// axios
//   .get(
//     "http://localhost:21309/api/ShoppingCart/Login/" + JSON.parse(user.EMail)
//   )
//   .then((result) => {
//     console.log(result.data);
//   });

// axios
// .get("ShoppingCart/Login/"+user.EMail)
// .then( (response)=> {
//   user.idUser = response.data;
// })
// .catch(function (error) {
//   // handle error
//   console.log(error);
// })
// .then(function () {
//   // always executed
// });
