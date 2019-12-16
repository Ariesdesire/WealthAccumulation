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
                Do you know about the Grants available for closing cost assistance
            </Typography>
            <Typography variant="body1" >
                Most sellers and buyers
                of residential real property in New York wonder why
                their closings costs are so high when selling and
                purchasing their homes. The reason is that New York
                State imposes a transfer tax that is typically paid
                by the seller and a mortgage tax that is paid by the
                buyer.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <List   subheader={<ListSubheader>You must meet the following criteria to start the Qualification Process</ListSubheader>} >
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="You must be a first-time-homebuyer."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Purchasing a One to Four Family home"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Purchasing a Cooperative or Condominium"

                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Purchasing in Brooklyn, Queens, Bronx, Staten Island or Manhattan"

                            />
                        </ListItem>
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Meet additional Program requirements such as income & household composition"

                            />
                        </ListItem>

                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List   subheader={<ListSubheader>Grant Highlights</ListSubheader>} >
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ Financing with FHA/VA & Conventional Loans"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔203K Renovation loans allowed with this grant"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Sellers Concessions are allowed with this grant."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Grant is forgivable - once conditions are met.."

                            />
                        </ListItem>

                    </List>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
