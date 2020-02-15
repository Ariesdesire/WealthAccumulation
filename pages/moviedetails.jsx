
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
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import fire from "../fire";
import ReactGA from 'react-ga';

import PropertyTour from './PropertyTour';
import PropertyDetail from "./PropertyDetail";
import ReactPixel from 'react-facebook-pixel';



export default class MovieDetailView extends React.Component {

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
        // analytics.setCurrentScreen('Property Detail' + movie_id);
        // fire.analytics().setCurrentScreen('Property Detail' + movie_id);
        // this.initializeAnalytics();
        ReactGA.pageview('Property Detail ' + movie_id);


    }

    // initializeAnalytics() {
    //     let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");
    //
    //     ReactGA.initialize('UA-156112925-1');
    //     ReactGa.pageview('Property Detail' + movie_id);
    //
    // }
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
            <Head>
                <title>{this.state.movie.address || ''}</title>
            </Head>

            <h2>{this.state.movie.address} </h2>
            <p>{this.state.movie.city} , {this.state.movie.state}   {this.state.movie.zipCode} </p>
            <p>{this.state.movie.propertyType} </p>
                <PropertyTour />
                 <PropertyDetail/>

            {/*<a href="#" className="but back" onClick={this.onBack}>Back</a>*/}

            {/*<Link href={"/movieedit?id="+this.state.movie.id}>*/}
            {/*    <a className="but">Edit</a></Link>*/}
            {/*<a className="but right delete" href="#"*/}
            {/*    onClick={this.onDelete}>Delete</a>*/}

            </React.Fragment>
        )
    }
}

