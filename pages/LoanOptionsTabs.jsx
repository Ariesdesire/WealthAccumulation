import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MonthlyPaymentsFhaGetStarted from "./MonthlyPaymentsFhaGetStarted";
import MonthlyPaymentsConventionalGetStarted
    from "./MonthlyPaymentsConventionalGetStarted";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LoanOptionsTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" centered>
                    <Tab
                        value="one"
                        label="FHA"
                        wrapped
                        {...a11yProps('one')}
                    />
                    <Tab value="two" label="Conventional" {...a11yProps('two')} />
                    <Tab value="three" label="VA" {...a11yProps('three')} />
                </Tabs>
            </Paper>
            <TabPanel value={value} index="one">
                <MonthlyPaymentsFhaGetStarted />
            </TabPanel>
            <TabPanel value={value} index="two">
                <MonthlyPaymentsConventionalGetStarted />

            </TabPanel>
            <TabPanel value={value} index="three">
                VA
            </TabPanel>
        </div>
    );
}
