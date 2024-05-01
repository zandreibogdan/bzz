import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { darkScrollbar } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#e7cf9e",
    },
    secondary: {
      main: "#dad",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
});

export default theme;
