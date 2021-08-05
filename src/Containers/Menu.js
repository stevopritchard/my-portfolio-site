import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
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

export default function Menu() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        SP
                    </Typography>
                    <Button color="inherit">Logos here</Button>
                </Toolbar>
            </AppBar>
        <nav className={classes.drawer}>
            <Hidden xsDown implementation="css">
                <Drawer
                    variant="persistent"
                    anchor={'left'}
                    open
                    onClose={handleDrawerToggle}

                >
                    <List>
                        <ListItem button component="a" href='#aboutMe'>
                            <ListItemText primary={'About Me'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemText primary={'Projects'}/>
                        </ListItem>
                        {[{name: 'Blockchain app',id: '#blockchain'}, {name: '¡Conjugado!', id:'#conjugado'}, {name:'Weather app', id: '#weather'}, {name:'Woofers', id:'#woofers'}, {name:'Smart Brain', id:'#smartBrain'}].map((text, index) => 
                            <ListItem button component="a" href={text.id} key={index}>
                                <ListItemText primary={text.name} />
                            </ListItem>
                        )}
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button component="a" href='#getInTouch' >
                            <ListItemText primary={'Get In Touch'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                </Drawer>
            </Hidden>
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}

                >
                    <List>
                        <ListItem>
                            <ListItemText primary={'About Me'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemText primary={'Projects'}/>
                        </ListItem>
                        {['Blockchain app', '¡Conjugado!', 'Weather app', 'Woofers', 'Smart Brain'].map((text, index) => 
                            <ListItem key={index}>
                                <ListItemText primary={text} />
                            </ListItem>
                        )}
                    </List>
                    <Divider/>
                    <List>
                        <ListItem>
                            <ListItemText primary={'Get In Touch'}/>
                        </ListItem>
                    </List>
                    <Divider/>
                </Drawer>
            </Hidden>
        </nav>
        </div>
    )
}