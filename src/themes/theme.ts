// src/theme.ts
import { createTheme } from '@mui/material/styles';
import { red, blue, grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F57C00',
    },
    secondary: {
      main: grey[700],
    },
    error: {
      main: red[500],
    },
    background: {
      default: grey[100],
      paper: grey[200],
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[200],
    },
    secondary: {
      main: grey[400],
    },
    error: {
      main: red[200],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[100],
      secondary: grey[200],
    },
  },
});
