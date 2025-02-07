// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif", // Set your desired global font family here
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'sans-serif', // Set font family for all buttons
        },
      },
    },
    MuiLink: {
        styleOverrides: {
          root: {
            fontFamily: 'Lexend', // Set font family for all MUI Link components
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: 'Lexend', // Set font family for all Table Cells
          },
        },
      },
}
});



export default theme;
