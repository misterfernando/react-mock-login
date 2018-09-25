import React, { Component } from 'react';
import Dashboard from './views/Dashboard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Dashboard></Dashboard>
      </MuiThemeProvider>
    );
  }
}

export default App;
