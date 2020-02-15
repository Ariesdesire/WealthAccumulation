import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import api from "../config";


export default class Monthly2000RentVsEquity extends PureComponent {
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

                return result.RentVsOwnRentVsPrincipal;
            })
            //setting fetched data to state
            .then(result => this.setState({ chartData: result }));

    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };



    render() {
        return (


                <BarChart
                    width={300} height={600}
                    data={this.state.chartData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="own" fill="#44bd32" />
                    <Bar dataKey="rent" fill="#eb2f06" />
                </BarChart>


        );
    }
}
