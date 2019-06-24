import React from 'react';
import { Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function AnonymousRoute({ component: Component,auth, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                auth.uid ? (
                    <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    
                ) : (
                    <Component {...props} />
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
export default connect(mapStateToProps)(AnonymousRoute);