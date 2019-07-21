import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#b40923"
        },
        secondary: {
            main: "#444343"
        },
        background: "#010101",
        blue: "#0e10cc"
    }
})

const Theme = props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>

export default Theme;