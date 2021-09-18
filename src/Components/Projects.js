import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { CardActions, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles'

const projArray = [
    {name: "Blockchain app", id:"blockchain", image:"project-img/blockchain.png"}, 
    {name: '¡Conjugado!', id:'conjugado', image:"project-img/conjugado.png"}, 
    {name:'Weather app', id: 'weather', image:"project-img/weather.png"}, 
    {name:'Woofers', id:'woofers', image:"project-img/woofers.png"}, 
    {name:'Smart Brain', id:'smartBrain', image:"project-img/smartbrain.png"}
]

const projListArray = [
    {name: 'Blockchain app',id: '#blockchain'}, 
    {name: '¡Conjugado!', id:'#conjugado'}, 
    {name:'Weather app', id: '#weather'}, 
    {name:'Woofers', id:'#woofers'}, 
    {name:'Smart Brain', id:'#smartBrain'}
]

const useStyles = makeStyles({
    main:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        paddingBottom: '120px',
    },
    projectList: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    projectListItem:{
        paddingTop: 30,
        paddingBottom: 30
    },
    projects: {
        flex: '1 1 auto',
        justifyItems: 'center',
        minHeight: 0,
        height: '100%',
        overflowY: 'auto',
        scrollSnapType: 'y proximity',
        scrollPaddingTop: '1vh',
    },
    projectItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        scrollSnapAlign: 'start',
        margin: 10,
        paddingTop: 30,
        // backgroundImage: props => `url(${props.project.image})`,
        // '&:hover':{
        //     backgroundImage: props => `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("${props.image}")`
        // },
        backgroundSize: 'cover',
        height: 360,
    },
    appPreview: {
      width: 400,
      height: 200
    },
    myComponent: {
        backgroundImage: props => `url(${props.image})`,
        backgroundSize: 'cover',
        height: 360,
    }
  })

function ProjectCard(props) {
    const [show, setShow] = useState(false)
    const { project } = props;
    const styleProps = {
       project
    }
    const classes = useStyles(styleProps.project)
    console.log(styleProps.project)
    return (
        <Paper className={classes.myComponent}>
            {project.image}
        </Paper>

        // <Paper 
        //     // key={i}
        //     id={project.id}
        //     className={classes.projectItem}
        //     onMouseOver={() => setShow(true)}
        //     onMouseOut={() => setShow(false)}
        // >
        //     {show && 
        //     <Container styles={{display: 'flex', justifyContent: "center"}}>
        //         <Container styles={{paddingBottom: 8}}>
        //             <Typography variant="h3" align='center' gutterBottom>
        //                 {project.name}
        //                 {project.image}
        //             </Typography>
        //         </Container>
        //         <Container >
        //             <Typography variant="body1" align='justify' gutterBottom>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //             </Typography>
        //         </Container>
        //         <Container style={{paddingBottom: '3vh', display: 'flex', justifyContent: 'space-around'}}>
        //             <Button
        //                 variant='contained'
        //                 disableElevation
        //                 startIcon={<GitHubIcon/>}
        //             >GitHub</Button>
        //             <Button
        //                 variant='contained'
        //                 disableElevation
        //                 startIcon={<LaunchIcon/>}
        //             >Launch</Button>
        //         </Container>
        //     </Container>
        //     }
        // </Paper>
    )
}

export default function Projects() {
    // const projRefs = useRef([]);

    const classes = useStyles();

    return (       
        <Container className={classes.main}>
        <Grid item sm={2}>
            <Container disableGutters className={classes.projectList}>
                <Divider />
                <List>
                    {projListArray.map((text, index) => 
                        <ListItem 
                            key={index}
                            // button 
                            component="a" 
                            href={text.id} 
                            classes={{ 
                                root: classes.projectListItem
                            }}
                        >
                            <ListItemText primary={text.name} />
                        </ListItem>
                    )}
                </List>
                <Divider />
            </Container>
        </Grid>
        <Grid item sm={10} >
            <Container className={classes.projects}>
                {projArray.map((project, i) => {
                    return (
                        <ProjectCard key={i} project={project}/>
                    )
                })}
            </Container>
        </Grid>
    </Container>


    )
}