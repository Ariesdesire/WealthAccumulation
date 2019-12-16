
/* Movie details page.
 *
 * Displays single movie data.
 *
 * Only local data, no store access.
 */

import React from 'react'

import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import { Player } from 'video-react';
import api from "../config"
import CssBaseline from '@material-ui/core/CssBaseline';
import GoogleMapReact from 'google-map-react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropertyVisuals from './PropertyVisuals';
import PropertyTour from './PropertyTour';
import Container from '@material-ui/core/Container';
export default class PropertyOverview extends React.Component {

    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }

    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onBack = this.onBack.bind(this);

        this.state = {movie:{}};

    }

    componentDidMount() {
        console.info("MovieDetailView did mount", this.props);


        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        api.get_movie(movie_id).then(d => this.setState({movie: d}));
    }

    onDelete(e) {
        e.preventDefault();

        if (!confirm("Delete this movie?"))
            return;

        api.delete_movie(this.props.id)
            .then(reply => Router.push('/'))
            .catch(error => alert("Error occurred"));
    }

    onBack(e) {
        e.preventDefault();
        Router.back();
    }

    render () {
        return (
            <React.Fragment>
                <CssBaseline />



                <Head>
                    <title>{this.state.movie.address || ''}</title>
                </Head>

                <h2>{this.state.movie.address}</h2>
                <h3>{this.state.movie.propertyType} built in {this.state.movie.yearBuilt}</h3>

                <Box color="text.primary" display="flex" justifyContent="space-around">
                <p>Beds
                    {this.state.movie.totalBedrooms}</p>
                <p>Baths {this.state.movie.totalBathrooms}</p>
                <p>Sq ft {this.state.movie.squareFeet}</p>
                <p>{this.state.movie.parkingType}</p>


                </Box>

                <p><strong> Brokers remarks</strong>  {this.state.movie.brokerRemarks}</p>

            </React.Fragment>
        )
    }
}

