import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
export default function ConventionalLoan() {
    return (
        <React.Fragment>
            <Typography variant="h3" gutterBottom align="center">
                Conventional Mortgages
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Fixed Rate Mortgages*
                    </Typography>
                    <Typography variant="body1" >
                        A fixed rate mortgage is a mortgage loan that has a fixed
                        interest rate for the entire term of the loan. With this type
                        of loan your interest rate and payments will be consistent
                        throughout the duration of your loan. You’ll never have to worry
                        about your interest rate increasing. Fixed rate mortgages are
                        available in a variety of term lengths ranging from 10 years to 30 years.


                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Adjustable Rate Mortgages (ARMs)*
                    </Typography>
                    <Typography variant="body1" >
                        An ARM may save you money on your loan, and might be a great option for someone
                        who only plans on living in their home for a few years. ARMs are available in a
                        variety of configurations and term lengths, the most common are 5/1, 7/1 and 10/1;
                        the first number represents the number of years the interest rate on your mortgage
                        will remain fixed. The second number represents how often the interest rate will
                        change after the fixed rate period expires (in this case, it may adjust annually).
                        Also referred to as the adjustment period. During the adjustment period your rate
                        may increase or decrease which will make your monthly payments higher or lower.
                    </Typography>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
