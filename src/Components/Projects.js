import React, { createRef } from 'react';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles'

const projArray = [
    {
        name: "Invoice Parser", 
        id:"invoiceParser", 
        image:"project-img/invoice_parser.png",
        description:"An automated invoice submission app. Invoices are uploaded via drag 'n' drop to an AWS Textract endpoint which reads the document. The returned data is checked against the client's purchase orders on their BrightPearl CRM endpoint, and any matches are saved to a MongodDB collection.",
        github1:"https://github.com/stevopritchard/Invoice-Parser-client",
        github2: "https://github.com/stevopritchard/Invoice-Parser-server",
        url:"https://radiant-crag-07404.herokuapp.com/"
    }, 
    {
        name: "Blockchain app", 
        id:"blockchain", 
        image:"project-img/blockchain.png",
        description:"I built this as a submission for a project challenge on the Complete Web Developer community. The only third party library used for this project was Material Kit for styling. I took advantage of ES6 class constructors, which I had previously only used in building class-based React components.",
        github1:"https://github.com/stevopritchard/Challenge-1-Blockchain",
        github2: null,
        url:"https://stevopritchard.github.io/Challenge-1-Blockchain/"
    }, 
    {
        name: '¡Conjugado!', 
        id:'conjugado', 
        image:"project-img/conjugado.png",
        description:"This project was an opportunity to build something that would be useful to my Spanish studies. Verbs are found via the search bar, and each verb offers a full conjugation table and can be selected as a 'favourite' so that it appears onscreen when you next login. There is also an accompanying practise section that allows you to test your knowledge against a chosen combination of tenses.",
        github1:"https://github.com/stevopritchard/conjugation_frontend",
        github2: "https://github.com/stevopritchard/conjugation_backend",
        url:"https://conjugado-frontend.herokuapp.com/"
    }, 
    {
        name:'Weather app', 
        id: 'weather', 
        image:"project-img/weather.png",
        description:"A application that I built while studying the Complete Node Developer course. It utilises Mapbox and Weatherstack REST APIs to deliver a location-accurate weather forecast.",
        github1:"https://github.com/stevopritchard/node_weather_website",
        github2: null,
        url:"https://pritchard-node-weather-app.herokuapp.com/"
    }, 
    {
        name:'Woofers', 
        id:'woofers', 
        image:"project-img/woofers.png",
        description: "My first project for a client. A single-page React app that uses React-Router-DOM and the react-carousel and react-image-lightbox packages and Google's Maps Embed API.",
        github1:"https://github.com/stevopritchard/woofersv2",
        github2: null,
        url:"https://www.woofersbristol.co.uk/"
    }, 
    {
        name:'Smart Brain', 
        id:'smartBrain', 
        image:"project-img/smartbrain.png",
        description: "The final project of the Complete Web Developer course brought together a lot of aspects that I had previously covered as separate concepts, including using third-party libraries with Node.js, REST operations and setting up an SQL database.",
        github1:"https://github.com/stevopritchard/facerecognitionbrain",
        github2: "https://github.com/stevopritchard/SmartBrain-API",
        url:"https://smart-brain--front-end.herokuapp.com/"
    }
]


const useStyles = makeStyles({
    main:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    projects: {
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
    },
    projectItem:{
        paddingTop: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',

    },
    projectPaper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 10,
        backgroundImage: props => `url(${props.image})`,
        '&:hover':{
            backgroundImage: props => `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), transition: 0.5s, url("${props.image}")`,
        },
        backgroundSize: 'cover',
        height: '42.18vw',
        width: '75vw',
    },
    magicButton: {
        transition: '0.5s'
    }
})

const GitHubPopover = (props) => {
    const { project } = props;
    
    return (
        <Box display='flex' flexDirection="row">
            <Button 
                variant='outlined'
                href={project.github1}
                style={{margin: 5}}
            >Front-End</Button>
            <Button 
                variant='outlined'
                href={project.github2}
                style={{margin: 5}}
            >Back-End</Button>
        </Box>
    )
}

function ProjectCard(props) {
    const { project } = props;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'GitHub' : undefined

    const styleProps = {
       project
    }

    const classes = useStyles(styleProps.project)

    return (
        <Container 
            className={classes.projectItem}
            id={project.id}
            ref={props.menuRef}
        >
            <Divider/>
            <Typography variant="h3" style={{fontWeight: 400}} align='center' gutterBottom>
                {project.name}
            </Typography>
            <Paper className={classes.projectPaper}>
            </Paper>

            <Container style={{paddingBottom: '3vh', display: 'flex', justifyContent: 'space-around'}}>
                    <Box>
                        <Button
                            aria-describedby={id}
                            variant='outlined'
                            disableElevation
                            startIcon={<GitHubIcon/>}
                            href={
                                project.github2 !== null 
                                ? 
                                null
                                : 
                                project.github1
                            }
                            onClick={
                                project.github2 !== null
                                ?
                                handleClick
                                :
                                null
                            }
                        >GitHub</Button>
                    </Box>
                    <Box>
                        <Button
                            variant='outlined'
                            disableElevation
                            startIcon={<LaunchIcon/>}
                            href={project.url}
                        >Launch</Button>
                    </Box>
                    <Popover 
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'center', horizontal: 'center'}}
                        transformOrigin={{vertical: 'center', horizontal: 'center'}}
                    >
                        <GitHubPopover 
                            project={project} 
                        />
                    </Popover>
                </Container>
            <Typography variant="body1" align='justify' gutterBottom>
                {project.description}
            </Typography>
        </Container>
    )
}

export default function Projects(props) {
    const classes = useStyles();
   
    if(props.projRef.current.length !== projArray.length) {
        props.projRef.current = Array(projArray.length).fill().map((_, i) => props.projRef.current[i] || createRef())
    }

    return (       
        <Container className={classes.projects}>
            {projArray.map((project, i) => {
                return (
                    <ProjectCard 
                        key={i} 
                        menuRef={props.projRef.current[i]}
                        project={project}
                    />
                )
            })}
        </Container>


    )
}