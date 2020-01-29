
/* The home page.
 *
 * Loads and displays the movie list.
 */

import React from 'react'
import { observer } from "mobx-react"
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from 'next/link';

import store from "../store";
import api from "../config";
import fire from "../fire";
import NumberFormat from 'react-number-format';
import Box from "@material-ui/core/Box";


class About extends React.Component {

    componentDidMount() {
        console.info("index did mount");

        // query movies and put into store, whenever this page gets activated
        api.query_movies().then(movies => store.set_movies(movies));
        // this.initializeAnalytics();
            // analytics.setCurrentScreen('All Properties');
        // fire.analytics().setCurrentScreen('All Properties');
    }

    render () {

        return (

        <React.Fragment>
            <h2>Listings For Sale</h2>

            <Grid  container direction="row"
                  justify="space-evenly"
                  alignItems="center"
                   overflow="hidden"
                   flex="nowrap"
                  spacing={5}
                  >
            {store.movielist.map(movie => (



                <Grid item key={movie.id}>

                <Card  style={{width: "20rem"}}>

<CardHeader>
    <Typography>
        {movie.city},  {movie.state}  {movie.zipCode}
    </Typography>
</CardHeader>
                    <Link href={"/moviedetails?id="+movie.id}>
                <CardActionArea>
                <CardMedia
                component="img"
                alt={movie.address}
                height="220"
                image={movie.photoUrl}
                title={movie.address}
                />
                <CardContent>
                    <Box color="text.primary" display="flex" justifyContent="space-between">
                <Typography gutterBottom variant="h6" component="h2">
                {movie.units}
                </Typography>
                <Typography component="p"> <NumberFormat value={movie.price} displayType={'text'} thousandSeparator={true}  prefix={'$'} /></Typography>

</Box>  <Box color="text.primary" display="flex" justifyContent="flex-start">


</Box>
                    <Typography variant = 'body1'>{movie.totalBedrooms} Bedrooms <span>&nbsp;</span>
                         {movie.totalBathrooms} Bathrooms {movie.squareFeet} Sq Ft
                       </Typography>

                </CardContent>

                </CardActionArea>
                    </Link>
                <CardActions>
                <Button size="small" color="primary" href="/LandingPage">
                Schedule A Showing
                </Button>
                <Button size="small" color="primary" href="https://www.info.nmbhome.com/lcampbell">
                Get Pre-Approved
                </Button>
                </CardActions>
                </Card>

                </Grid>
            ))}
            </Grid>

            <Link href="/LandingPage"><a className="but">Add a new Listing</a></Link>


            </React.Fragment>

        )
    }
}

// mark as mobx observer
export default observer(About);

// debug in console
//window.store = store;

