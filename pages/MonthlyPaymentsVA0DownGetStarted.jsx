
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

import PropertyTour from './PropertyTour';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import NumberFormat from 'react-number-format';
import FhaMonthlyPaymentsChart from "./MonthlyPaymentsChart";
import MonthlyPaymentChartVa0Down from "./MonthlyPaymentsChartVA0Down";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MonthlyEquityChartFha5 from "./MonthlyEquityChartFha5";
import MonthlyEquityChartFha10 from "./MonthlyEquityChartFha10";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  Pagination  from "../components/Pagination"
import MonthlyEquityChartVa0Down from "./MonthlyEquityChartVa0Down";

const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        padding: 15,
        minHeight: 100,

    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


export default class MonthlyPaymentsVA0DownGetStarted extends React.Component {


    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }

    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onBack = this.onBack.bind(this);

        this.state = {
            show: false,
            index: 0,
            movie:{}};


    }

    componentDidMount() {
        console.info("MovieDetailView did mount", this.props);


        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        api.get_payment(movie_id).then(d => this.setState({movie: d}));
    }
    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };
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
        const { index } = this.state.index;
        return (

            <React.Fragment>
                <CssBaseline />



                <Head>
                    <title>{this.state.movie.address || ''}</title>
                </Head>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="center">
                            How much house can I afford
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="center">
                            VA 0% Down
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <List
                            component="ul"
                            aria-labelledby="Estimated-Monthly-Costs"
                            subheader={
                                <ListSubheader component="div" id="Estimated Monthly Costs">
                                    Estimated Annual Income
                                    <NumberFormat value={this.state.movie.VaIncomeNeeded0Down} displayType={'text'} thousandSeparator={true}  prefix={' $'} />
                                </ListSubheader>
                            }

                        >
                            <ListItem button>

                                <ListItemText primary="Price" secondary=  <NumberFormat value={this.state.movie.ListingPrice} displayType={'text'} thousandSeparator={true}  prefix={'$'} />  />
                            </ListItem>

                            <ListItem button>

                                <ListItemText primary="Down Payment"  secondary=  <NumberFormat value= {this.state.movie.VADownPaymentAmount} displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>
                            <ListItem button>

                                <ListItemText primary="Funding Fee 2.3%"  secondary=<NumberFormat value={this.state.movie.VaFundingFee0Down}  displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>


                            <ListItem button>

                                <ListItemText primary="Cash To Close"  secondary=<NumberFormat value={this.state.movie.VaCashToClose0Down}  displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>
                            <ListItem button>

                                <ListItemText primary="Rate"  secondary=<NumberFormat value={this.state.movie.rate}  displayType={'text'} decimalSeparator={'.'}  suffix={'%'} /> />
                            </ListItem>
                            <ListSubheader component="div" id="Estimated Monthly Costs">
                                Estimated Monthly Payments
                                <NumberFormat value={this.state.movie.VaMonthlyEstimatedPayments0Down} displayType={'text'} thousandSeparator={true}  prefix={' $'} />
                            </ListSubheader>
                        </List>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MonthlyPaymentChartVa0Down />
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant="h6" gutterBottom align="center">
                            Wealth Accumulation
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="center">
                            5 Year Analysis
                        </Typography>
                        <MonthlyEquityChartVa0Down />
                    </Grid>



                </Grid>


            </React.Fragment>
        )
    }
}

