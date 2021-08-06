import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';


import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    aboutMe: {
      display: 'flex',
      justifyContent: 'center'
    },
    appPreview: {
      width: 400,
      height: 200
    }
  }))

export default function Projects() {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={9}>
        <Container disableGutters fixed>
          <Box id="aboutMe" display='flex' flexDirection='row' justifyContent='center'>
          <h1>Stephen Pritchard</h1>
          </Box>
          <p>Hi I'm Stephen, an aspiring full-stack developer.</p>
          <Box display='flex' flexDirection='row' justifyContent='space-around'>
            <Paper>React</Paper>
            <Paper>Node.js</Paper>
          </Box>
        </Container>
        <Container disableGutters>
          <Box id="blockchain" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <h2>Blockchain app</h2>
          <Paper className={classes.appPreview}>Blockchain app</Paper>
          <Box display='flex' flexDirection='row' justifyContent='space-between' >
            <Button
            variant="contained"
            disableElevation
            startIcon={<GitHubIcon/>}
            >GitHub</Button>
            <Button
            variant="contained"
            disableElevation
            startIcon={<LaunchIcon/>}
            >Launch</Button>
          </Box>
          </Box>
        </Container>
        <Container disableGutters>
          <Box id="conjugado" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <h2>¡Conjugado!</h2>
          <Paper className={classes.appPreview}>Blockchain app</Paper>
          <Box display='flex' flexDirection='row' >
            <Paper>GitHub</Paper>
            <Paper>Launch</Paper>
          </Box>
          </Box>
        </Container>
        <Container disableGutters>
          <Box id="weather" className="weatherApp" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <h2>Weather app</h2>
          <Paper className={classes.appPreview}>Blockchain app</Paper>
          <Box display='flex' flexDirection='row' >
            <Paper>GitHub</Paper>
            <Paper>Launch</Paper>
          </Box>
          </Box>
        </Container>
        <Container disableGutters>
          <Box id="woofers" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <h2>Woofers Bristol</h2>
          <Paper className={classes.appPreview}>Blockchain app</Paper>
          <Box display='flex' flexDirection='row' >
            <Paper>GitHub</Paper>
            <Paper>Launch</Paper>
          </Box>
          </Box>
        </Container>
        <Container disableGutters>
          <Box id="smartBrain" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <h2>Smart Brain</h2>
          <Paper className={classes.appPreview}>Blockchain app</Paper>
          <Box display='flex' flexDirection='row' >
            <Paper>GitHub</Paper>
            <Paper>Launch</Paper>
          </Box>
          </Box>
        </Container>
        <Container disableGutters>
          <Box id="getInTouch" display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <h2>Get In Touch</h2>
          <Paper className={classes.appPreview}>Blockchain app</Paper>
          <Box display='flex' flexDirection='row' >
            <Paper>GitHub</Paper>
            <Paper>Launch</Paper>
          </Box>
          </Box>
        </Container>
      </Grid>
    )
}