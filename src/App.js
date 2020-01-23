import React from "react";
import Header from "./Header";
import image from "./igo_dark_gray.png";
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
        <div className="content">
          <Link
            title="Sample Submission (Rex)"
            source="https://igo.mskcc.org/sample-submission"
            style="blue"
            icon="cloud_upload"
          />
          <Link
            title="Sample QC "
            source="https://igo.mskcc.org/sample-qc"
            style="green"
            icon="check_circle"
          />
          <Link
            // disabled={true}
            title="Swab 'n Seq Results"
            source="https://igo.mskcc.org/swabnseq/"
            style="yellow"
            icon="pie_chart"
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
    width: "70vw",
    textAlign: "center",
    gridRowGap: "2em",
    gridTemplateAreas: "'a b' 'c c'"
  },
  title: {
    margin: "0 auto"
  }
});

export default withStyles(styles)(App);

// <Link
//          // disabled={true}
//          title="Sequencing/Run QC (IGO only)"
//          source="https://igo.mskcc.org/run-qc"
//          icon="developer_board"
//        />
