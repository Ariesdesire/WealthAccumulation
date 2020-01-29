import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from "@material-ui/core/ListSubheader";


export default function VaHomeLoan() {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                VA Home Loans
            </Typography>
            <Typography variant="body1" >
                VA Residential Loans have many advantages that make it one of
                the most appealing paths to home ownership, this great benefit is
                reserved exclusively to those veterans who bravely served our country
                and select military spouses.**
            </Typography>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <List   subheader={<ListSubheader>What Are The Benefits of an FHA Home Loan?*</ListSubheader>} >
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ Up to 100% financing, $0 down payment"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ Allows for minimal to NO out-of-pocket costs"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ No Private Mortgage Insurance (PMI) required"

                            />
                        </ListItem>                   <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="✔ Surviving spouses of deceased veterans may also be eligible."

                            />
                        </ListItem>

                    </List>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
