
/*
 * Top level app & layout, loaded ONCE at the start
 */

import App, {Container} from 'next/app'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import MyHeader from "../components/MyHeader"

// required here for hot reload
import css from "../styles/layout.sass"

import store from "../store"
import api from "../config"


export default class MyApp extends App {

    componentDidMount() {
        console.info("app did mount");

        // always query movies at the start of the app, no matter what page
        // gets loaded first (actually we just need the count in the header
        // but for simplicity there is no separate API for count only)
        api.query_movies().then(movies => store.set_movies(movies));
    }

    render () {
        const {Component, pageProps} = this.props;

        return <Container>

            {/* global sass styles
                pages may also define Head which is merged with this */}
            <Head>
                <title>Upwards Movement</title>

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <div className="outer">
                <MyHeader />

                <article>
                    <Component {...pageProps} />
                </article>

                <aside className="sidebar-right">
                    <h2>Owning A Home</h2>

                    <p><strong>build equity </strong></p>

                    <p className="example">
                        Take advantage of Tax Breaks for Homeowners.</p>
                    <p><strong>Total control</strong></p>

                    <p className="example">
                        over your living space (decoration improvements, etc.)</p>
                    <p className="example">
                        <strong> Fixed rates for stable Mortgage payments</strong>
                        Your mortgage payment will not increase over the life of the loan</p>
                    <p className="example">
                Buying a home allows a FAMILY to find a place where they know they can stay</p>

                </aside>

                <footer> Schedule A Showing
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <a className="right" href="/Checkout">Get Pre-Approved</a>
                </footer>
            </div>
            </Container>
    }
}

