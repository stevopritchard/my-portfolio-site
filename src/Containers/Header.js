import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { Toolbar, IconButton, Typography, Button, Link } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'

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
    }
}))

export default function Header() {
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
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        // onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        SP
                    </Typography>
                        <Button href='#aboutMe' color="inherit">
                            About Me
                        </Button>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
                            Projects
                        </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {[{name: 'Blockchain app',id: '#blockchain'}, {name: '¡Conjugado!', id:'#conjugado'}, {name:'Weather app', id: '#weather'}, {name:'Woofers', id:'#woofers'}, {name:'Smart Brain', id:'#smartBrain'}].map((text, index) => 
                            <MenuItem button component={Link} href={text.id} key={index}>
                                {text.name}
                            </MenuItem>
                        )}
                    </Menu>
                    <Button color="inherit">Logos here</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}