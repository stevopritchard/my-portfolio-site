import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Grid, Toolbar, IconButton, Typography, Button, Link } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Mail from '@material-ui/icons/Mail';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const projListArray = [
    {name: 'Invoice Parser',id: '#invoiceParser'},
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
            <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)'}}>
                <Toolbar>
                    <Grid item xs={2} sm={3} md={3} style={{display:'flex', flexFlow:'row nowrap', justifyContent: 'flex-start'}}>
                        <Typography variant="h6" className={classes.title}>
                            <Button onClick={props.switchMode}>
                                {props.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                            </Button>
                        </Typography>
                    </Grid>
                    <Box />
                    <Grid item xs={6} sm={6} md={6} style={{display:'flex', flexFlow:'row nowrap', justifyContent: 'center'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Box>
                            <Button 
                                onClick={props.scrollToTop}
                                style={{fontWeight: 500}}
                            >
                                About Me
                            </Button>
                            <Button 
                                aria-controls="simple-menu" 
                                aria-haspopup="true" 
                                onClick={handleClick} 
                                style={{fontWeight: 500}}
                            >
                                Projects
                            </Button>
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
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={3} md={3} spacing={1} style={{display:'flex', flexFlow:'row nowrap', justifyContent: 'flex-end'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <IconButton
                            style={props.darkMode ? {color:'#fff', paddingRight: 0} : {color:'rgba(0, 0, 0, 0.87)', paddingRight: 0}}
                            href="https://github.com/stevopritchard"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            // size="large"
                            style={props.darkMode ? {color:'#fff', paddingRight: 0} : {color:'rgba(0, 0, 0, 0.87)', paddingRight: 0}}
                            href="https://www.linkedin.com/in/stevopritchard/"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            // size="large"
                            style={props.darkMode ? {color: '#fff', paddingRight: 0} : {color: 'rgba(0, 0, 0, 0.87)', paddingRight: 0}}
                            href="mailto:stephen.a.pritchard@gmail.com"
                        >
                            <Mail />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}