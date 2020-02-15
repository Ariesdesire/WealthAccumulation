import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import PropertyOverview from './PropertyOverview';
import Neighborhood from './Neighborhood';
import MonthlyPayments from './MonthlyPayments';
import AmortizationSchedule from './AmortizationSchedule';
import LoanOptions from './LoanOptions';
import LoanOptionsSlider from './LoanOptionsSlider';
import LoanPrograms from "./LoanPrograms";
import MonthlyPaymentsFhaGetStarted from "./MonthlyPaymentsFhaGetStarted";
import PropertyImages from "./propertyImages";
import MonthlyRentVsOwnSummary from "./MonthlyRentVsOwnSummary";
import LoanOptionsTabs from "./LoanOptionsTabs";
import Monthly2000RentVsEquity from "./Monthly2000RentvsEquity";
import Monthly2000RentIncrease from "./Monthly2000RentIncrease";

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);
function getSteps() {
    return ['Property Overview','Neighborhood','Monthly Costs', 'Loan' +
    ' Options', 'Summary' ];
}

export default function PropertyDetail() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Property Overview</Typography>
                </ExpansionPanelSummary>
                <Typography>

                            <PropertyOverview />
                </Typography>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Neighborhood</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
<Neighborhood />
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">

                    <Typography>Summary</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"

                    >
                        <Grid item md={6}>
<MonthlyRentVsOwnSummary />
                        </Grid>
                        <Grid item md={6}>
<Monthly2000RentVsEquity />
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Monthly Costs</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <LoanOptionsTabs />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Loan Programs</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
 <LoanOptionsSlider />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
