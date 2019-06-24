import React, { useState } from 'react';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const initialState = {};
function SignUp(props) {
    //const {signUp} = props;
    const { authError } = props;
    const [userInfo, setUserInfo] = useState(initialState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(userInfo);
        props.signUp(userInfo);
    }

    function handleChange(e) {
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
    }

    return (
        <div className="container">
            <form action="" onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-filed">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-filed">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-filed">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onChange={handleChange} />
                </div>
                <div className="input-filed">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
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
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)