
/* Page to edit a listing.
 *
 * A regular form with 2 fields and a button.
 *
 * Only local data, no store access.
 */

import React from 'react'

import Head from 'next/head'
import Router from 'next/router'
import Typography from '@material-ui/core/Typography';
import api from "../config"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Slider from '@material-ui/core/Slider';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default class LoanOptions extends React.Component {

    // query params to props
    static getInitialProps ({query:{id}}) {
        return {id};
    }

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onBack = this.onBack.bind(this);

        this.state = {movie: {address:"", price:"", brokerRemarks:"", id:""}, oldtitle:""};
    }

    componentDidMount() {
        console.info("MovieEditView did mount" + this.props.id);

        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        if (movie_id) {
            // editing, load the movie
            api.get_movie(movie_id).then(d => {
                this.setState({movie: d, oldtitle:d.title});
            });
        }
    }
    valuetext(value) {
        return `${value}%`;
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.movie.address)
            return;

        // save the data and go to front page
        api.save_movie(this.state.movie)
            .then(reply => Router.push('/'))
            .catch(error => alert("Error occurred"));
    }

    onInputChange(e) {
        // grab the changes into data
        const {name, value} = e.target;
        let movie = {...this.state.movie, [name]: value};
        this.setState({movie});
    }

    onBack(e) {
        e.preventDefault();
        Router.back();
    }

    render () {
        const title = this.props.id ? 'Edit '+this.state.oldtitle
            : 'Add a new Listing';

        return (

            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined"  xs={12}>
                            <InputLabel htmlFor="loan-term">Term</InputLabel>
                            <Select
                                native
                                // value={state.term}
                                // onChange={handleChange('term')}
                                inputProps={{
                                    name: 'term',
                                    id: 'loan-term',
                                }}
                            >
                                <option value={30}>Thirty</option>
                                <option value={10}>Ten</option>
                                <option value={15}>Fifteen</option>
                                <option value={20}>Twenty</option>

                            </Select>
                            <FormHelperText>number of years to repay loan</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <div>
                            <Typography id="continuous-slider" gutterBottom>
                                Down Payment
                            </Typography>
                            <Grid container spacing={2}>

                                <Grid item xs>
                                    <Slider
                                        defaultValue={20.0}
                                        aria-labelledby="discrete-slider-small-steps"
                                        step={0.5}
                                        marks
                                        min={3.5}
                                        max={100.0}
                                        valueLabelDisplay="auto"
                                    />
                                </Grid>

                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div>

                            <FormControlLabel  control={<Checkbox value="checkedD" />} label="Closing Cost Assistance" />
                        </div>
                    </Grid>
                </Grid>
                <div>


                    {/*<div>*/}
                    {/*    <label>Price:</label>*/}
                    {/*    <input type="number" name="price" value={this.state.movie.price}*/}
                    {/*           onChange={this.onInputChange} autoFocus autoComplete="off" />*/}
                    {/*</div>*/}

                    <a href="#" className="but back" onClick={this.onBack}>Back</a>

                    <button type="submit">Save</button>
                </div>

            </React.Fragment>
        )
    }
}

