
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
import Grid from '@material-ui/core/Grid';
import MonthlyEquity from "./MonthlyEquityChart";
import ConventionalMonthlyPaymentChart
    from "./MonthlyPaymentsChartConventional";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MonthlyEquityChartFha5 from "./MonthlyEquityChartFha5";
import MonthlyEquityChartConventional5 from "./MonthlyEquityChartConventional5";
import MonthlyEquityChartConventional10
    from "./MonthlyEquityChartConventional10";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default class MonthlyPaymentsConventionalGetStarted extends React.Component {

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

        api.get_payment(movie_id).then(d => this.setState({movie: d}));
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

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom align="center">
                            How much house can I afford
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="center">
                           Conventional 20% Down
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={5}>

                        <List
                            component="ul"
                            aria-labelledby="Estimated-Monthly-Costs"
                            subheader={
                                <ListSubheader component="div" id="Estimated Monthly Costs">
                                    Estimated Annual Income Needed
                                    <NumberFormat value={this.state.movie.conventionalIncomeNeeded } displayType={'text'} thousandSeparator={true}  prefix={' $'} />
                                </ListSubheader>
                            }

                        >
                            <ListItem button>

                                <ListItemText primary="Price" secondary=  <NumberFormat value={this.state.movie.ListingPrice} displayType={'text'} thousandSeparator={true}  prefix={'$'} />  />
                            </ListItem>

                            <ListItem button>

                                <ListItemText primary="Down Payment"  secondary=  <NumberFormat value= {this.state.movie.ConventionalDownPayment} displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>
                            <ListItem button>

                                <ListItemText primary="Closing Costs"  secondary=<NumberFormat value={this.state.movie.ConventionalClosingCostAmount}  displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>
                            <ListItem button>

                                <ListItemText primary="Cash To Close"  secondary=<NumberFormat value={this.state.movie.conventionalCashToClose}  displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>
                            <ListItem button>

                                <ListItemText primary="Loan Amount"  secondary=<NumberFormat value={this.state.movie.conventionalLoanAmount}  displayType={'text'} thousandSeparator={true}  prefix={'$'} /> />
                            </ListItem>
                            <ListItem button>

                                <ListItemText primary="Rate"  secondary=<NumberFormat value={this.state.movie.rate}  displayType={'text'} decimalSeparator={'.'}  suffix={'%'} /> />
                            </ListItem>
                            <ListSubheader component="div" id="Estimated Monthly Costs">
                                Estimated Monthly Costs
                                <NumberFormat value={this.state.movie.ConventionalMonthlyPayments} displayType={'text'} thousandSeparator={true}  prefix={' $'} />
                            </ListSubheader>

                        </List>

                    </Grid>
                    <Grid xs={12} md={7}>
                        <ConventionalMonthlyPaymentChart />
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant="h6" gutterBottom align="center">
                            Wealth Accumulation
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="center">
                            5 Year Analysis
                        </Typography>
                        <MonthlyEquityChartConventional5 />
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant="h6" gutterBottom align="center">
                            Wealth Accumulation
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="center">
                            10 Year Analysis
                        </Typography>
                        <MonthlyEquityChartConventional10 />
                    </Grid>

                </Grid>


            </React.Fragment>
        )
    }
}

