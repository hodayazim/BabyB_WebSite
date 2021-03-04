import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class signup extends Component {

    state = {
        name: "",
        family: "",
        email: "",
        age: "",
    }

    render() {
        return (
            < div >
                <form onSubmit={() => this.signupHandler()}>
                    <div>

                        <Link to="/login">   <button type="submit" id="login">login</button></Link>

                    </div>
                    <label>שם פרטי</label>
                    <input type="text" className="input" />
                    <label>שם משפחה</label>
                    <input type="text" className="input" />
                    <label>שם משתמש</label>
                    <input type="text" className="input" />
                    <label>כתובת מייל</label>
                    <input type="mail" className="input" />
                    <label>סיסמה</label>
                    <input type="char" className="input" />
                    <label>אימות סיסמה</label>
                    <input type="char" className="input" />
                </form>
                <input type="submit" className="SubmitSave" onClick={() => alert('save')} value="שמור" />
            </div >
        );

    }
    componentWillMount = () => {
        console.log("hello hodaya");
    }
    signupHandler = () => {
        console.log("sign up");

    }
}

export default signup;