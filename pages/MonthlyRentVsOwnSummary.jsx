import React, { PureComponent } from 'react';
import {ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import api from "../config";
import MaterialTable from 'material-table'

export default class MonthlyRentVsOwnSummary extends PureComponent {
    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }

    constructor(props) {
        super(props);
        //state to store active index and chart data
        this.state = {
            selectedRow: null,
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

                return result.RentVsOwn;
            })
            //setting fetched data to state
            .then(result => this.setState({ chartData: result }));

    }




    render() {
        return (
            <MaterialTable
                title="Rent Vs Own Analysis "
                columns={[

                    { title: 'Summary', field: 'summary' },
                    { title: 'Rent', field: 'rent' },
                    { title: '3.5% Down', field: 'own' },
                ]}
                data={this.state.chartData}
                Riw
                onRowClick={((evt, selectedRow) => this.setState({ selectedRow }))}
                page={1}

                rowsPerPage={13}
                totalCount={13}
                options={{
                    paging: false,
                    rowStyle: rowData => ({
                        backgroundColor: (this.state.selectedRow && this.state.selectedRow.tableData.id === rowData.tableData.id) ? '#EEE' : '#FFF'
                    }),
                    headerStyle: {
                        backgroundColor: '#95a5a6',
                        color: '#FFF'
                    },

                    tableLayout: 'fixed',
                    search: false
                }}
            />
        );
    }
}
