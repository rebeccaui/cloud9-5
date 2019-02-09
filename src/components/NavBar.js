import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
    return(
        <div className="topNav">
            <AppBar position="static">
                <Toolbar className="navBar">
                    <Typography variant="title" color="inherit">
                        {/* <a href="#home">Home</a> */}
                        <a href="#today">Today</a>
                        <a href="#forecast">Forecast</a>
                        <a href="#radar">Radar</a>
                        <a href="#puns">Puns</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;