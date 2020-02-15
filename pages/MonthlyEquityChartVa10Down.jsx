import React, { PureComponent } from 'react';
import {ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import api from "../config";


export default class MonthlyEquityChartVa10Down extends PureComponent {
    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }

    constructor(props) {
        super(props);
        //state to store active index and chart data
        this.state = {

            open: false,
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

                return result.Va10DownWealth5yearsAccum;
            })
            //setting fetched data to state
            .then(result => this.setState({ chartData: result }));

    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };



    render() {
        return (

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
                    <Line type="monotone" dataKey="Taxes Saved" stroke="#7f8c8d" />
                    <Line type="monotone" dataKey="Wealth Accum." stroke="#d63031" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
