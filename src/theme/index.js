import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#b40923"
        },
        secondary: {
            main: "#0e10cc"
        },
        background: "#010101",
        backgroundLight: "#444343"
    }
})

const Theme = props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>

export default Theme;