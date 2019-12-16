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
export default function FhaHomeLoan() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                FHA Home Loans
            </Typography>
            <Typography variant="body1" >
                An FHA home loan offers buyers financing options through the FHA loan programs. FHA is a great option for buyers who may not qualify for a conventional loan or who are looking for financing options with a lower down payment. With an FHA loan buyers can purchase a home with a down payment as low as 3.5% of the purchase price.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <List   subheader={<ListSubheader>What Are The Benefits of an FHA Home Loan?*</ListSubheader>} >
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ A down payment requirement as low as 3.5%."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ The option for the seller to contribute up to 6% of the sale price."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ A relative can be a co-applicant on your loan as a non-occupant (not available on cash-out transactions)."

                            />
                        </ListItem>

                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List   subheader={<ListSubheader>Eligible Properties:*</ListSubheader>} >
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ 1 to 4 Family Properties"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ A HUD approved condominium."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ A manufactured housing unit (must be on a permanent foundation built on or after June 15, 1976)."

                            />
                        </ListItem>

                    </List>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
