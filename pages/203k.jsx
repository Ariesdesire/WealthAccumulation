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
export default function RehabLoan() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
               203K Home Rehab Loan Program
            </Typography>
            <Typography variant="body1" >
                The 203(k) rehab loan covers a range of home improvements. These include, but are not limited to, the following
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <List>
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Remodeling bathrooms or a kitchen, including new built-in appliances"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Replacing Roof Gutters, and downspouts"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Adding a family room, bedrooms, or bathrooms"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Completing a basement or attic conversion or adding a second story"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Expanding or building a garage or carport"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Renovating a deteriorating property such as a repairing a chimney, termite damage or structural problems."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Upgrading plumbing, heating, air conditioning, or electrical wiring."

                            />
                        </ListItem>


                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List>

                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Upgrading plumbing, heating, air conditioning, or electrical wiring."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Eliminating health and safety hazards, such as removing lead-based paint"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Making the home accessible to the disabled"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Installing a well or a septic system"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Adding a porch, deck, or patio."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Adding or repairing siding or repainting."

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Installing energy efficient windows or doors"

                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">

                            <ListItemText
                                primary="Repairing an existing swimming pool"

                            />
                        </ListItem>
                    </List>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
