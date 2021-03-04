import React from "react";
import "../css/login.css";
import "../css/round.css";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { Label, Checkbox } from "@rebass/forms";
import checkLogin from "../FUNCTION/AppFunction";

import swal from "sweetalert";
import Swal from "sweetalert2";
// import login from "../FUNCTION/LoginFunction";
// import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import GetIdUser from "../FUNCTION/LoginFunction";
import Password from "antd/lib/input/Password";

class Loginup extends React.Component {
  state = {
    FirstNameUser: null,
    LastNameUser: "",
    UserPassword: "",
    UserwPassword: "",
    GetPostMail: "",
    EMail: null,
    IdUser: "",
    redirect: false,
  };

  constructor(props) {
    super(props);
  }

  /* הפונקציה עובדת */
  login = (event) => {
    debugger;
    console.log("login");

    // axios
    //   .get("http://localhost:21309/api/Category/GetAllCategories")
    //   .then((result) => {
    //     //setMyArray(result.data);
    //     console.log(result.data);
    //   });
    // const response =
    axios
      .get(
        "http://localhost:17374/api/User/Login/" +
          this.state.EMail +
          "/" +
          this.state.UserPassword
      )
      .then((res) => {
        // this.setState({ IdUser: res.data });
        // sessionStorage.setItem("idUser", this.state.IdUser);
        // this.setState({ redirect: true });
        localStorage.removeItem("IdUser");
        localStorage.removeItem("EMail");
        localStorage.removeItem("EMail");
        localStorage.removeItem("FirstNameUser");
        localStorage.removeItem("lastName");

        localStorage.setItem("IdUser", res.data.IdUser);
        localStorage.setItem("EMail", res.data.EMail);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("FirstNameUser", res.data.FirstNameUser);
        this.props.history.push("/");
        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //    axios
  //     .get(
  //       `http://localhost:21309/api/User/Login/hodayazim.m@gmail.com/1055`
  //       // this.state.EMail +
  //       // "/" +
  //       // this.state.UserPassword
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });

  /* הפונקציה עובדת */
  newUserHadler = (event) => {
    var scope = this;
    axios
      .post(`http://localhost:17374/api/Users/Register`, this.state)
      // , {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
      .then(function (response) {
        console.log(response);
        if (response.data == -1) {
          swal({
            icon: "error",
            title: "מייל זה קיים במערכת",
            text: " BabyB ברוכים הבאים לאתר",
            type: "error",
          });
        } else if (response.data == 0) {
          swal({
            icon: "warning",
            title: "אחד או יותר מהשדות לא נכונים",
            text: " BabyB ברוכים הבאים לאתר",
            type: "warning",
          });
        } else {
          swal({
            icon: "success",
            title: "נרשמת בהצלחה",
            text: " BabyB ברוכים הבאים לאתר",
            type: "success",
          }).then((result) => {
            console.log(result);
            localStorage.setItem("IdUser", response.data);
            localStorage.setItem(
              "EMail",
              JSON.parse(response.config.data)["EMail"]
            );
            localStorage.setItem(
              "FirstNameUser",
              JSON.parse(response.config.data)["FirstNameUser"]
            );
            //event.preventDefault();
            scope.props.history.push("/");
            window.location.reload();
          });
          if (localStorage.length > 0) {
            localStorage.removeItem("IdUser");
            localStorage.removeItem("EMail");
            localStorage.removeItem("FirstNameUser");
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    event.preventDefault();
  };

  // state = { IdUser: " " };

  // async function login() {
  //   debugger;
  //   //axios... return id

  //   // this.setState({
  //      const IdUser = await GetIdUser({
  //       EMail: this.state.EMail,
  //       UserPassword: this.state.UserPassword,
  //     })
  //   // });

  //   localStorage.setItem("IdUser", this.state.IdUser);
  // };

  // async login() {
  //   try {
  //     axios.post( `http://localhost:21309/api/ShoppingCart/Login`,this.state);

  //     this.setState({ IdUser:  });
  // }

  /*זה עבד אתמול עם שולמית */

  // async login() {
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:21309/api/User/Login/`,
  //       this.state
  //     );
  //     User / Login / this.setState({ IdUser: res.data });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async login() {
  //   debugger;
  //   console.log("login");
  //   const postRes = await axios.post(
  //     `http://localhost:21309/api/ShoppingCart/Login`,
  //     this.state
  //   );
  //   if (postRes) {
  //     console.log(postRes);
  //     const delivery = postRes.data;
  //     this.setState({ IdUser: postRes.data });
  //   } else {
  //     console.log("error!");
  //   }
  // .then(function (response) {
  //   this.setState({ IdUser: response.data });
  //   console.log(response);
  // })

  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

  //axios... return id

  // const a = "ריק";
  // a = GetIdUser({
  //   EMail: this.state.EMail,
  //   UserPassword: this.state.UserPassword,
  // });

  // this.setState({
  //   IdUser: GetIdUser({
  //     EMail: this.state.EMail,
  //     UserPassword: this.state.UserPassword,
  //   }),
  // });
  //   localStorage.setItem("IdUser", this.state.IdUser);
  // }

  checkPassword = (event) => {
    const { UserPassword, UserwPassword } = this.state;
    // perform all neccassary validations
    if (UserPassword !== UserwPassword) {
      alert("Passwords don't match");
    } else {
      alert("good password"); // make API call
      this.newUserHadler(event);
    }
  };

  checkGet = (e) => {
    axios.get("user/CheckGet", this.state).then((x) => {
      console.log("sucses!" + x);
    });
  };

    changeFirstName = (e) => {
      this.setState({ FirstNameUser: e.target.value });
    };

  changeLastName = (e) => {
    this.setState({ LastNameUser: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ EMail: e.target.value });
  };

  changepassword = (e) => {
    this.setState({ UserPassword: e.target.value });
  };

  changeWpassword = (e) => {
    this.setState({ UserwPassword: e.target.value });
  };

  changeGetMail = (e) => {
    this.setState({ GetPostMail: e.target.value });
  };

  // render() {
  //   return (
  //     <div>
  //       <div className="container">
  //         <div className="row">
  //           <div className="col">1 of 3</div>
  //           <div className="col-6">2 of 3 (wider)</div>
  //           <div className="col">3 of 3</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <>
        <div class="container login-container">
          <div class="row login-row">
            <div class="col-md-4 login-form-1 login-col">
              <h3>הרשמה</h3>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    id="Firstname"
                    placeholde="שם פרטי"
                    className="form-control"
                    value={this.state.FirstName}
                    onChange={this.changeFirstName}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    id="Lastname"
                    placeholde="שם משפחה"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastName}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="mail"
                    id="email"
                    placeholde="הכנס כתובת מייל"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeEmail}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    id="password"
                    placeholde="הכנס סיסמה"
                    className="form-control"
                    value={this.state.UserPassword}
                    onChange={this.changepassword}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    id="Wpassword"
                    placeholde=">אימות סיסמה"
                    className="form-control"
                    value={this.state.UserwPassword}
                    onChange={this.changeWpassword}
                    required
                  />
                </div>

                <div class="form-group">
                  {/* <input type="submit" class="btnSubmit" value="Login" /> */}
                  <input
                    type="button"
                    placeholder="הרשמה"
                    className="btnSubmit"
                    onClick={(e) => {
                      this.checkPassword(e);
                    }}
                  />
                </div>
                <div class="form-group">
                  <a href="#" class="ForgetPwd">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>

            {/***** new form ***/}
            <div class="col-md-4 login-form-2 login-col">
              <h3>כניסה</h3>
              <form>
                <div class="form-group">
                  <input
                    type="email"
                    id="email"
                    value=""
                    className="form-control"
                    placeholder="הכנס כתובת מייל של החשבון"
                    onChange={this.changeEmail}
                    required
                  />
                </div>
                <div class="form-group">
                  <label>הכנס סיסמה</label>
                  <input
                    type="password"
                    id="password"
                    value={this.state.UserwPassword}
                    className="form-control"
                    placeholder="הכנס סיסמה"
                    onChange={this.changepassword}
                    required
                  />
                </div>
                <div class="form-group">
                  {/* <input type="submit" class="btnSubmit" value="Login" />
                   */}
                  <input
                    type="button"
                    value=""
                    className="btnSubmit btn btn-primary mt-3"
                    onClick={(e) => {
                      this.login(e);
                    }}
                  />
                </div>
                <div class="form-group">
                  <a href="#" class="ForgetPwd" value="Login">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="loginUp container">
          {/*** LOG-IN*/}
          <div className="left"></div>
        </div>
      </>
    );
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/ManagerForms/addProduct" />;
    }

    return <Loginup />;
  }
}
export default withRouter(Loginup);

{
  // function Loginup(props) {
  //     const [name, setname] = useState('');
  //     const [family, setfamily] = useState('');
  //     const [email, setemail] = useState('');
  //     const [age, setage] = useState('');
  //        const newUserHadler = (enent) => {
  //            event.preventDefault()
  //             debugger;
  //             axios.post('user/register', user).then(x => {
  //                 console.log("sucses!" + x);
  //             })
  //     }
  //     return (
  //         <div className="loginUp">
  //             <div className="Login">
  //                 <form onSubmit={newUserHadler}>
  //                     <label >שם פרטי</label>
  //                     <input type="text" className="input" />
  //                     <label>שם משפחה</label>
  //                      <input type="text" className="input" />
  //                     <label>שם משתמש</label>
  //                     <input type="text" className="input" />
  //                     <label>כתובת מייל</label>
  //                     <input type="mail" className="input" />
  //                     <label>סיסמה</label>
  //                     <input type="char" className="input" />
  //                     <label>אימות סיסמה</label>
  //                     <input type="char" className="input" />
  //                     <button
  //                         type="submit"
  //                         className="input SubmiSignup">
  //                             לביצוע הרשמה
  //                     </button>
  //                 </form>
  //             </div>
  //             <div className="signup">
  //                 <form>
  //                     <label for="firstname">שם פרטי</label>
  //                     <input type="text" id="firstname" className="input" />
  //                     <label for="mail" >כתובת מייל</label>
  //                     <input type="mail" id="mail" className="input" />
  //                     <input type="submit" className="input SubmiSignup" onClick={() =>newUserHadler(this.state.name)} value="ביצוע הרשמה" />
  //                 </form>
  //             </div>
  //         </div>
  //     )
  // }export default Loginup;
}

{
  /*old form*/
  /* <form>
<article>
  <label htmlFor="mail">כתובת מייל</label>
  <input type="mail" id="mail" className="input" />

  <label htmlFor="account">סיסמה</label>
  <input type="password" className="input" id="account" />
  <button
    type="submit"
    className="input SubmiSignup"
    onClick={() => this.newUserHadler(this.state.name)}
  >
    כניסה
  </button>
  <button onClick={this.checkGet}>click</button>
</article>
</form> */
}
