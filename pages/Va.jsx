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
                <Grid item xs={12} sm={6}>
                    <List>
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" Up to 100% financing is available with no mortgage insurance."}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" No appraisal needed on VA Streamline Refinance loans (If discount points charged an appraisal will be required)."}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"

                                            color="textPrimary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' Closing costs limited due to VA guidelines.'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"

                                            color="textPrimary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {'  Closing costs may be paid by the seller.'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"

                                            color="textPrimary"
                                        >
                                            Surviving spouses of deceased veterans may also be eligible.
                                        </Typography>
                                        {'  Closing costs may be paid by the seller.'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List>
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" Up to 100% financing is available with no mortgage insurance."}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" No appraisal needed on VA Streamline Refinance loans (If discount points charged an appraisal will be required)."}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"

                                            color="textPrimary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' Closing costs limited due to VA guidelines.'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"

                                            color="textPrimary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {'  Closing costs may be paid by the seller.'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"

                                            color="textPrimary"
                                        >
                                            Surviving spouses of deceased veterans may also be eligible.
                                        </Typography>
                                        {'  Closing costs may be paid by the seller.'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
