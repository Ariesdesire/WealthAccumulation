import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Animated from 'animated/lib/targets/react-dom';
import api from "../config";

const styles = {
    root: {
        background: '#000',
        padding: '0 50px',
    },
    slide: {
        padding: '12px 8px',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
    },
    img: {
        width: '100%',
        height: 400,
        display: 'block',
        marginBottom: 16,
    },
};



class DemoCoverflow extends React.Component {
    constructor(props) {
        super(props);
        //state to store active index and chart data
        this.state = {
            index: 0,
            position: new Animated.Value(0),
            albumData: []

        };
    }

    componentDidMount() {
        console.info("MovieDetailView did mount", this.props);


        // get movie id (getInitialProps is not always called, Nextjs bug?)
        let movie_id = this.props.id ? this.props.id : (new URLSearchParams(window.location.search)).get("id");

        api.get_movie(movie_id)
            .then(result => {
                //Logging fetched data from api to console
                console.log(result.images);
                //extracting required data only
                return result.images;
            })
            //setting fetched data to state
            .then(result => this.setState({ albumData: result }));

    }

    handleChangeIndex = index => {
        this.setState({ index });
    };

    handleSwitch = (index, type) => {
        if (type === 'end') {
            Animated.spring(this.state.position, { toValue: index }).start();
            return;
        }
        this.state.position.setValue(index);
    };


    render() {
        const { index, position } = this.state;

        return (
            <SwipeableViews
                index={index}
                style={styles.root}
                onChangeIndex={this.handleChangeIndex}
                onSwitching={this.handleSwitch}
            >
                {this.state.albumData.map((album, currentIndex) => {
                    const inputRange = this.state.albumData.map((_, i) => i);
                    const scale = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => {
                            return currentIndex === i ? 1 : 0.7;
                        }),
                    });
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => {
                            return currentIndex === i ? 1 : 0.3;
                        }),
                    });
                    const translateX = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => {
                            return (100 / 2) * (i - currentIndex);
                        }),
                    });

                    return (
                        <Animated.div
                            key={String(currentIndex)}
                            style={Object.assign(
                                {
                                    opacity,
                                    transform: [{ scale }, { translateX }],
                                },
                                styles.slide,
                            )}
                        >
                            <img style={styles.img} src={album.url} alt="cover" />
                            {album.caption}
                        </Animated.div>
                    );
                })}
            </SwipeableViews>
        );
    }
}

export default DemoCoverflow;
