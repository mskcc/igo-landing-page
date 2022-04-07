import React from 'react';
import Header from './Header';
import Link from './Link';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import IgoIcon from './igo-icon-orange.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <div className="main">
          <div className="content">
            <a target="_blank" rel="noopener noreferrer" href="http://genomics.mskcc.org/" className="link igo-website">
              <img className="icon" alt="igo logo" src={IgoIcon} />
              <div className="title">IGO Website</div>
            </a>
            <Link title="Sample Submission" source="https://igo.mskcc.org/sample-submission" iconColor="blue" icon="cloud_upload" />
            <Link title="Request Tracker" isFa={true} source="https://igo.mskcc.org/request-tracker" iconColor="magenta" icon="tasks" />
            <Link title="Sample QC " source="https://igo.mskcc.org/sample-qc" iconColor="green" icon="check_circle" />
            <Link title="Reservations " source="https://genomics.mskcc.org/" iconColor="green" icon="insert_invitation" />
            <Link title="Careers" source="https://genomics.mskcc.org/careers/" iconColor="yellow" icon="business_center" />
            <Link title="Swab 'n Seq Results" source="https://igo.mskcc.org/swabnseq/" iconColor="blue" icon="pie_chart" />
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      logo: '#319ae8',
      light: '#8FC7E8',
      main: '#007CBA',
      dark: '#006098',
    },
    secondary: {
      light: '#F6C65B',
      main: '#DF4602',
      dark: '#C24D00',
    },

    textSecondary: '#e0e0e0',
  },
});
const styles = (theme) => ({
  main: {
    display: 'grid',
  },
  content: {
    display: 'grid',
    width: '70vw',
    textAlign: 'center',
    gridRowGap: '2em',
    gridTemplateAreas: "'a b' 'c c'",
  },
  title: {
    margin: '0 auto',
  },
});

export default withStyles(styles)(App);

// <Link
//          // disabled={true}
//          title="Sequencing/Run QC (IGO only)"
//          source="https://igo.mskcc.org/run-qc"
//          icon="developer_board"
//        />
