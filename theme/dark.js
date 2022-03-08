import { createTheme } from "@material-ui/core/styles";
import coreTheme from "./coreTheme";

// Create a theme instance.
const theme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    background: {
      default: "#22252E",
      paper: "#352633",
    },
    primary: {
      main: "#b428c1",
    },
    type: "dark",
  },
  overrides: {
    ...coreTheme.overrides,
    MuiButton: {
      ...coreTheme.overrides.MuiButton,
      outlinedPrimary: {
        border: "1px solid #FFFFFF1A",
        "&:hover": {
          backgroundColor: "#b428c1 !important",
          color: "#fff",
        },
      },
    },
    MuiInputBase: {
      ...coreTheme.overrides.MuiInputBase,
      root: {
        background: "#fff",
      },
    },
    MuiOutlinedInput: {
      ...coreTheme.overrides.MuiOutlinedInput,
      notchedOutline: {
        borderColor: "#FFF",
      },
    },
    MuiSnackbarContent: {
      root: {
        color: "#fff",
        backgroundColor: "#352633",
        padding: "0px",
        minWidth: "auto",
        "@media (min-width: 960px)": {
          minWidth: "500px",
        },
      },
      message: {
        padding: "0px",
      },
      action: {
        marginRight: "0px",
      },
    },
  },
});

export default theme;
