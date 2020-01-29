
/*
 * Header component of the site, observes the count of the movies
 *
 */

import { observer } from "mobx-react"

import store from "../store";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';



const MyHeader = observer((props) => (

    /*<header>
        <p className="right">Listings: {store.count}</p>
        <h1>Upwards Movement</h1>
        <p className="author">teamwork makes the dream work</p>

    </header>
    */
    <AppBar position="static">
        <Toolbar>

            <Typography variant="h6" >
                <h1>Upwards Movement</h1>
                <p className="author">Teamwork makes the Dreamwork</p>

            </Typography>
            {/*<p className="right">Listings: {store.count}</p>*/}

        </Toolbar>
    </AppBar>

))

export default MyHeader;




