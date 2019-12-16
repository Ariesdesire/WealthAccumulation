
/* Movie details page.
 *
 * Displays single movie data.
 *
 * Only local data, no store access.
 */

import React, { PureComponent } from 'react';

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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
    {name: 'Payment 1', balance: 4000, principal: 2400, interest: 2400},
    {name: 'Payment 2', balance: 3000, principal: 1398, interest: 2210},
    {name: 'Payment 3', balance: 2000, principal: 9800, interest: 2290},
    {name: 'Payment 4', balance: 2780, principal: 3908, interest: 2000},
    {name: 'Payment 5', balance: 1890, principal: 4800, interest: 2181},
    {name: 'Payment 6', balance: 2390, principal: 3800, interest: 2500},
    {name: 'Payment 7', balance: 3490, principal: 4300, interest: 2100},
];
export default class AmortizationSchedule extends React.Component {


//the center coordinates are NYC. I chose 12 as the zoom because it didn’t seem too far away or too close. The higher the number you choose, the more you zoom in on the map.
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onBack = this.onBack.bind(this);
        this.onPieEnter = this.onPieEnter.bind(this);

        this.state =
            {movie:{},
                activeIndex: 0,};

    }

    componentDidMount() {
        console.info("Monthly Payments Detail did mount", this.props);


        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        api.get_movie(movie_id).then(d => this.setState({movie: d}));
    }


    onPieEnter(data, index) {
        this.setState({
            activeIndex: index,
        });
    }
    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
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

                <LineChart width={600} height={300} data={data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="principal" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="balance" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="interest" stroke="#f03434" />
                </LineChart>
            </React.Fragment>
        )
    }
}

