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
export default function LastStep() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
               The cost of owning may be less than the cost of renting!
            </Typography>
            <Typography variant="body1" >
                Call me to learn about all of the benefits of owning a home!
                No one is better equipped to guide you through the buying process!
            </Typography>

        </React.Fragment>
    );
}
