import React from 'react'
import Header from './Containers/Header'
import Main from './Containers/Main'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
}))


function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Header/>
      <Main />
    </div>
  );
}

export default App;
