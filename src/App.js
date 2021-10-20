import React, { useRef } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
import Header from './Containers/Header'
import AboutMe from './Containers/AboutMe'
import Projects from './Components/Projects'
// import Footer from './Containers/Footer';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  const switchMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  var paletteType = darkMode ? "dark" : "light"

  const theme = createTheme({
    palette: { 
      type: paletteType,
      // text: {
      //   primary: '#32908F',
      //   secondary: '#946E83',
      // },
      // background: {
      //   paper: '#fff8eb',
      //   default: '#fff8eb',
      // },
    },
    typography: {
      fontFamily: "Inter",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 300,
      fontWeightMedium: 300,
      fontWeightBold: 300,
    },
  }) 

const useStyles = makeStyles((theme) => ({
  // root: {  
  display: 'flex',
  flexGrow: 1,
  overflowY: 'scroll',
  scrollSnapType: 'y mandatory',
  //   height: '100vh',
  //   minHeight: '100%',
  //   flexDirection: 'column',
  //   // color: theme.palette.text,
  //   // backgroundColor: theme.palette.background.default,
  //   margin: 0,
  // }
}))
  const classes = useStyles();

  const childRef = useRef(null)
  const projRef = useRef([])

  function scrollToTop() {
    // childRef.current.scrollIntoView({
    //   behavior: "smooth",
    // });
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  function scrollToProjRef(index) {
    projRef.current[index].current.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <ThemeProvider 
      theme={theme}
    >
      <CssBaseline />
      <div className={classes.root}>
        <Header 
          switchMode={switchMode} 
          darkMode={darkMode} 
          scrollToTop={scrollToTop}
          scrollToProjRef={scrollToProjRef}
        />
        <Container style={{paddingTop: '70px'}}>
          <AboutMe />
          <Projects projRef={projRef}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
