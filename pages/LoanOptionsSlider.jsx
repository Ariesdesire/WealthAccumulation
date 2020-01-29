import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  Pagination  from "../components/Pagination"

import FirstStep from "./firstStep";
import FhaHomeLoan from "./fha";
import conventional from "./conventional";
import lastStep from "./lastStep";
import VaHomeLoan from "./Va";
import RehabLoan from "./203k";
import CashToClose from "./CashToClose";

const styles = {
    root: {
        position: 'relative',
    },
    slide: {
        padding: 15,
        minHeight: 100,

    },
    slide1: {
        backgroundColor: '#FEA900',
    },
    slide2: {
        backgroundColor: '#B3DC4A',
    },
    slide3: {
        backgroundColor: '#6AC0FF',
    },
};

class LoanOptionsSlider extends React.Component {
    state = {
        index: 0,
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const { index } = this.state;

        return (
            <div style={styles.root}>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>

                    <div style={Object.assign({}, styles.slide)}>
                        <CashToClose/>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <VaHomeLoan/>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <FhaHomeLoan/>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <RehabLoan/>
                    </div>
                </SwipeableViews>
                <Pagination dots={4} index={index} onChangeIndex={this.handleChangeIndex} />
            </div>
        );
    }
}

export default LoanOptionsSlider;
