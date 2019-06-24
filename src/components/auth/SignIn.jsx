import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from "../../store/actions/authActions"
import { Redirect } from "react-router-dom"

const initialState = {};
function SignIn(props) {

    const [userInfo, setUserInfo] = useState(initialState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(userInfo);
        props.signIn(userInfo);
    }

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    }
    const { authError, auth } = props;
    if (auth.uid)
        return <Redirect to="/"/>
    return (

        <div className="container">
            <form action="" onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-filed">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-filed">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


