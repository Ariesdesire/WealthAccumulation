
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


const style = {
    width: '400px',
    height: '400px'
}

const AnyReactComponent = ({text}) => <div>{text}</div>;
export default class Neighborhood extends React.Component {

    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }
    static defaultProps = {
        center: {lat: 40.878946, lng: -73.854380},
        zoom: 16
    }
//the center coordinates are NYC. I chose 12 as the zoom because it didn’t seem too far away or too close. The higher the number you choose, the more you zoom in on the map.
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onBack = this.onBack.bind(this);

        this.state = {movie:{}};

    }

    componentDidMount() {
        console.info("Google Map Detail did mount", this.props);


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

        //Marker Component
        const Marker = ({text}) => {
            return (
                <div><b>{text}</b></div>
            );
        }

        return (
            <React.Fragment>

                <CssBaseline />

                <GoogleMapReact
                    style={{width: '100%', height: 400, position: 'relative'}}
                    bootstrapURLKeys={{
                        key: 'AIzaSyBxiIepV_8nY4hq4slxiEAQ1TWJ56vSnYc',
                        language: 'en'
                    }}
                    defaultCenter={{lat: this.state.movie.latitude, lng: this.state.movie.longitude}}
                    center={{lat: this.state.movie.latitude, lng: this.state.movie.longitude}}
                    layerTypes={[ 'TransitLayer']}
                    defaultZoom={this.props.zoom}
                    onChildMouseEnter={this.onChildMouseEnter}
                    onChildMouseLeave={this.onChildMouseLeave}>
                <Marker
                    style={{ height: '50vh',
                        width: '90%' }}

                    lat = { this.state.movie.latitude}
                    lng = {this.state.movie.longitude}
                    text = {this.state.movie.address}
                />

            </ GoogleMapReact >


            </React.Fragment>
        )
    }
}

