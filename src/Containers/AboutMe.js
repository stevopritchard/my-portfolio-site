import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    mainArea: {
      flexGrow: 1,
      height: '100%',
      justifyContent: 'center',
    },
  })

export default function AboutMe() {
    const classes = useStyles();
    return (
      <Container className={classes.mainArea} disableGutters fixed>
        <Box id="aboutMe" display='flex' flexDirection='row' justifyContent='center'>
            <Typography variant="h2">Stephen Pritchard</Typography>
        </Box>
        <Typography variant="body1">Hi I'm Stephen, an aspiring full-stack developer.</Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-around'>
            <Paper>React</Paper>
            <Paper>Node.js</Paper>
        </Box>
      </Container>
    )
};