
/* About page.
 *
 */

import React from 'react'
import Head from 'next/head'


export default class About extends React.Component {

    componentDidMount() {
        console.info("about did mount");
    }

    render () {
        return (
            <React.Fragment>
            <Head>
                <title>About</title>
            </Head>
                <h2>Renting A home</h2>

                <p>Monthly payments increase usually 3% per year</p>
                <p>No tax benefits</p>
                <p>Lose money - No equity built.</p>
                <p>Each Year you have a lease dead line</p>
                <p>Less security, you will need to move at any time.</p>

            <style jsx>{`
                p.example {
                    color: #1a881a;
                    background: #dcffdc;
                    padding: 10px;
                    border: 1px dashed #111;
                }
                `}</style>

            </React.Fragment>
        )
    }
}

