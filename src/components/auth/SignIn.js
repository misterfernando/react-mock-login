import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import fakeAuth from '../../util/fakeAuth';
import {
    Redirect
} from "react-router-dom";

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends Component {
    state = {
        redirectToReferrer: false,
        username: '',
        password: ''
    };

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleSignInClick = () => {
        let username = this.state.username;
        let password = this.state.password;
        if (username === "maks" && password === "maks123") {
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: true });
            });
        } else {
            alert("Invalid login attempt!");
        }
    }

    render() {
        const { classes } = this.props;
        const to = "/MyDashboard";
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={to} />;
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" name="username" value={this.state.username} autoComplete="username" autoFocus onChange={this.handleUsernameChange} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePasswordChange}
                                />
                            </FormControl>
                            <Button
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleSignInClick}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);