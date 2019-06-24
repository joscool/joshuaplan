import React from 'react';
import { Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ component: Component,auth, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                auth.uid ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
}
export default connect(mapStateToProps)(PrivateRoute);