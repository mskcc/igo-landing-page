import React from 'react';
import Header from './Header';
import Link from './Link';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import IgoIcon from './igo-icon-orange.png';
import './App.scss';

// Check if running on `igodev.mskcc.org` (QA) or `igo.mskcc.org` (Prod)
const isDev = window.location.hostname === 'igodev.mskcc.org';

// Set dynamic URLs based on environment
const sampleSubmissionURL = isDev ? 'https://igodev.mskcc.org/sample-submission' : 'https://igo.mskcc.org/sample-submission';
const sampleQCURL = isDev ? 'https://igodev.mskcc.org/sampleQC/' : 'https://igo.mskcc.org/sample-qc/';
const runQCURL = isDev ? 'https://igodev.mskcc.org/runQC' : 'https://igo.mskcc.org/runqc';
const requestTrackerURL = isDev ? 'https://igodev.mskcc.org/request-tracker' : 'https://igo.mskcc.org/request-tracker';

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
            <Link title="Sample Submission" source={sampleSubmissionURL} iconColor="blue" icon="cloud_upload" />
            <Link title="Request Tracker" source={requestTrackerURL} iconColor="magenta" icon="tasks" />
            <Link title="Sample QC" source={sampleQCURL} iconColor="green" icon="check_circle" />
            <Link title="Run QC" source={runQCURL} iconColor="orange" icon="assignment" />
            <Link title="Reservations" source="https://genomics.mskcc.org/reservations" iconColor="green" icon="insert_invitation" />
            <Link title="Careers" source="https://genomics.mskcc.org/careers/" iconColor="violet" icon="business_center" />
            <Link title="Swab 'n Seq Results" source="https://igo.mskcc.org/swabnseq" iconColor="blue" icon="pie_chart" />
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

export default App;

