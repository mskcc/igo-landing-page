import React from "react";
import Header from "./Header";
import logo from "./logo.svg";
import Link from "./Link";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <div class="content">
          <Link
            title="Sample Submission"
            source="https://igo.mskcc.org/sample-submission"
            icon="cloud_upload"
          />
          <Link
            // disabled={true}
            title="Sample QC (Beta Testing)"
            source="https://igo.mskcc.org/sample-qc-dev"
            icon="check_circle"
          />

          <Link
            // disabled={true}
            title="Sequencing/Run QC (Internal)"
            source="https://igo.mskcc.org/run-qc"
            icon="developer_board"
          />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      logo: "#319ae8",
      light: "#8FC7E8",
      main: "#007CBA",
      dark: "#006098"
    },
    secondary: {
      light: "#F6C65B",
      main: "#DF4602",
      dark: "#C24D00"
    },

    textSecondary: "#e0e0e0"
  }
});
const styles = theme => ({
  content: {
    display: "grid",
    width: "60vw",
    textAlign: "center"
  },
  title: {
    margin: "0 auto"
  }
});

export default withStyles(styles)(App);
