import { Roboto } from "next/font/google";
import { createTheme, Theme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Create a theme instance.
const muiTheme: Theme = createTheme({
  typography: {
    fontFamily: [
      roboto.style.fontFamily,
      "sans-serif",
    ].join(","),
  }
});

export default muiTheme;