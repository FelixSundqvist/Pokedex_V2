import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import GameBoy from '../assets/Early_GameBoy.ttf';

const gb = {
    fontFamily: "Early_GameBoy",
    src: `
      url(${GameBoy}) format('woff2')
    `,
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  
}
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
    },  
    typography: {
        fontFamily: [
          'Raleway',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [gb],
          },
        },
      },
})

const Theme = props => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>

export default Theme;