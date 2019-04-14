import React, {Component} from 'react';

import {Redirect} from "react-router-dom";

import * as actions from '../../../Store/actions/index';
import {connect} from "react-redux";

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return (
            <Redirect to={"/"}/>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
};

export default connect(null, mapDispatchToProps)(Logout);