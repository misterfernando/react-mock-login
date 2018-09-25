import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({

});

class MyDashboard extends Component {
    render() {
        return (
            <div>My Dashbord View</div>
        );
    }
}

MyDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyDashboard);
