import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Header from './Containers/Header'
import AboutMe from './Containers/AboutMe'
import Projects from './Components/Projects'
import Footer from './Containers/Footer';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import { orange, deepPurple, amber } from '@material-ui/core/colors';

const customTheme = createTheme({
  palette: {
    text: {
      primary: '#32908F',
      secondary: '#946E83',
    },
    background: {
      paper: '#fff8eb',
      default: '#fff8eb',
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontWeightBold: 300,
  },
  // primary: {
  //   main: deepPurple[500],
  // },
  // secondary: {
  //   main: amber[500],
  //   contrastText: deepPurple[900],
  // },
}) 

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
    minHeight: '100%',
    flexDirection: 'column',
    color: customTheme.palette.text,
    backgroundColor: customTheme.palette.background.default,
    // font: theme.typography.fontFamily,
    margin: 0,
  }
}))


function App() {
  const classes = useStyles();
  
  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.main}>
        <Router>
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/projects" component={Projects}/>
          </Switch>
          <Footer classes={classes}/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
