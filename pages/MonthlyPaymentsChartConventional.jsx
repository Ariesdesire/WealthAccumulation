import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import api from "../config";


const renderActiveShape = props => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke={fill}
                fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="#333"
            >{`$ ${value}`}</text>
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={18}
                textAnchor={textAnchor}
                fill="#999"
            >
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


export default class ConventionalMonthlyPaymentChart extends React.Component {
    // query params to props
    static getInitialProps({query: { id }}) {
        return {id};
    }

    constructor(props) {
        super(props);
        //state to store active index and chart data
        this.state = {
            activeIndex: 0,
            chartData: []

        };
    }

//Changing active index on hovering
    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };
    componentDidMount() {
        console.info("MovieDetailView did mount", this.props);


        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        api.get_payment(movie_id)
            .then(result => {
                //Logging fetched data from api to console
                console.log(result);
                //extracting required data only
                const ConventionalPrincipalInterest = Number(result.ConventionalPrincipalInterest);
                const PropertyTaxes = Number(result.PropertyTaxes);
                const HOAFees = Number(result.HOAFees);
                return [
                    { name: "Principal & Interest", value: ConventionalPrincipalInterest },
                    { name: "Taxes", value: PropertyTaxes },
                    { name: "Association Fees", value: HOAFees }
                ];
            })
            //setting fetched data to state
            .then(result => this.setState({ chartData: result }));

    }





    render() {
        console.log(this.state.chartData);

        return (
            <PieChart width={500} height={500}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={this.state.chartData}
                    cx={250}
                    cy={250}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                />
            </PieChart>
        );
    }
}
