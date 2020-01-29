import React, { PureComponent } from 'react';
import {ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import api from "../config";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default class WealthAccumulation10YearsFha extends PureComponent {
    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }

    constructor(props) {
        super(props);
        //state to store active index and chart data
        this.state = {

            chartData: []

        };
    }


    componentDidMount() {
        console.info("MovieDetailView did mount", this.props);


        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        api.get_payment(movie_id)
            .then(result => {
                //Logging fetched data from api to console
                console.log(result);
                //extracting required data only

                return result.WealthAccumulation10years;
            })
            //setting fetched data to state
            .then(result => this.setState({ chartData: result }));

    }


    classes = useStyles();

    render() {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Wealth Accumulation - FHA 3.5% down</h2>
                        <p id="transition-modal-description">10 Years Analysis</p>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart

                    data={this.state.chartData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="month" />
                    <YAxis />

                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Principal paid" stroke="#55efc4" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Home Apprec." stroke="#fdcb6e"  />
                    <Line type="monotone" dataKey="Taxes saved" stroke="#d63031" />
                    <Line type="monotone" dataKey="Wealth Accum." stroke="#d63031" />
                </LineChart>
            </ResponsiveContainer>
                    </div>
                </Fade>
            </Modal>
        );
    }
}
