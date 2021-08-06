import React from 'react';
import Projects from '../Components/Projects'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    mainArea: {
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      minHeight: '100vh',
    },
  }))

export default function Main() {
    const classes = useStyles();
    return (
        
      <Grid className={classes.mainArea}>
        <Projects />
    </Grid>
    )
};