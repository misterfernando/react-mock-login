import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignIn from '../components/auth/SignIn';
import MyDashboard from '../components/layout/MyDashboard';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";

const styles = theme => ({

});

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/MyDashboard" component={MyDashboard} />
                    <Route path="/SignIn" component={SignIn} />
                    <Redirect from="/" to="/SignIn" />
                </div>
            </Router>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
