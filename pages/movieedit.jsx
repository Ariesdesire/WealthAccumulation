
/* Page to edit a listing.
 *
 * A regular form with 2 fields and a button.
 *
 * Only local data, no store access.
 */

import React from 'react'

import Head from 'next/head'
import Router from 'next/router'

import api from "../config"


export default class MovieEditView extends React.Component {

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
            <Head>
                <title>{title}</title>
            </Head>

            <h2>{title}</h2>

            <form onSubmit={this.onSubmit}>
            <div>
            <label>Address:</label>
            <input type="text" name="address" value={this.state.movie.address}
                onChange={this.onInputChange} autoFocus autoComplete="off" />
            </div>

                <div>
            <label>Price:</label>
            <input type="number" name="price" value={this.state.movie.price}
                onChange={this.onInputChange} autoFocus autoComplete="off" />
            </div>
            <div>
            <label>brokerRemarks:</label>
            <input type="text" name="brokerRemarks" value={this.state.movie.brokerRemarks}
                onChange={this.onInputChange} autoComplete="off" />
            </div>

            <a href="#" className="but back" onClick={this.onBack}>Back</a>

            <button type="submit">Save</button>
            </form>

            </React.Fragment>
        )
    }
}

