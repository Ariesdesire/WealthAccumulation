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
export default function FirstStep() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
            Here To Help!
            </Typography>
            <Typography variant="body1" >
The first step to buying a home is choosing the right professional that will help you  figure out how much you can afford and who will guide you through the entire purchase process.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>

                </Grid>


            </Grid>
        </React.Fragment>
    );
}
