import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Toolbar, IconButton, Typography, Button, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Mail from '@material-ui/icons/Mail';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const projListArray = [
    {name: 'Blockchain app',id: '#blockchain'}, 
    {name: '¡Conjugado!', id:'#conjugado'}, 
    {name:'Weather app', id: '#weather'}, 
    {name:'Woofers', id:'#woofers'}, 
    {name:'Smart Brain', id:'#smartBrain'}
]

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton:{
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth
    },
}))

export default function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', backdropFilter: 'blur(4px)'}}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Button onClick={props.switchMode}>
                            {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                        </Button>
                    </Typography>
                    <Box sx={{flexGrow: 1}} />
                    <Box>
                        <Button 
                            // href='#aboutMe' 
                            // color="inherit"
                            onClick={props.scrollToTop}
                        >
                            About Me
                        </Button>
                        <Button 
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onClick={handleClick} 
                            // color="inherit"
                        >
                            Projects
                        </Button>
                    </Box>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {projListArray.map((text, index) => 
                            <MenuItem 
                                color='inherit' 
                                button 
                                component={Link} 
                                // href={text.id} 
                                key={index}
                                onClick={() => props.scrollToProjRef(index)}
                            >
                                {text.name}
                            </MenuItem>
                        )}
                    </Menu>
                    <Box sx={{flexGrow: 1}} />
                    <Box
                        sx={{flexGrow: 1}}
                    >
                        <IconButton
                            // size="large"
                            style={props.darkMode ? {color:'#fff'} : {color:'rgba(0, 0, 0, 0.87)'}}
                            href="https://github.com/stevopritchard"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            // size="large"
                            style={props.darkMode ? {color:'#fff'} : {color:'rgba(0, 0, 0, 0.87)'}}
                            href="https://www.linkedin.com/in/stevopritchard/"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            // size="large"
                            style={props.darkMode ? {color: '#fff'} : {color: 'rgba(0, 0, 0, 0.87)'}}
                            href="mailto:stephen.a.pritchard@gmail.com"
                        >
                            <Mail />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}