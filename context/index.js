import React, { Component, createContext } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
export class ContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseApi: 'https://swapi.dev/api/films/',
            showHeader: false,
            movieListData: [],
            tempMovieListData: [],
            movieDetail: { characters: [] },
            charDetail: { films: [] },
            imgList: [
                require('../assets/images/img1.jpg'),
                require('../assets/images/img2.jpg'),
                require('../assets/images/img3.jpg'),
                require('../assets/images/img4.jpg'),
                require('../assets/images/img5.jpg'),
                require('../assets/images/img6.jpg'),
                require('../assets/images/img7.jpg'),
                require('../assets/images/img8.jpg'),
                require('../assets/images/img9.jpg'),
            ],
            charList: [
                require('../assets/characters/char1.jpg'),
                require('../assets/characters/char2.jpg'),
                require('../assets/characters/char3.jpg'),
            ],
            imgIndex: null,
            charIndex: null,
        }
        this.baseState = this.state
    }

    async componentDidMount() {
        this.fetchAllMovieData();
    }



    fetchAllMovieData = async () => {
        await axios.get(this.state.baseApi, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                this.setState({ movieListData: res.data.results, tempMovieListData: res.data.results });
            })
            .catch((error) => {
                console.log(error, 'error');
            })
    }
    fetchMovieDetail = async (url, imgIndex) => {
        this.setState({ movieDetail: { characters: [] }, imgIndex: null });
        await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                this.setState({ movieDetail: res.data, imgIndex: imgIndex })
                // console.log(res.data, 'data');
            })
            .catch((error) => {
                console.log(error, 'error');
            })
    }
    fetchCharacterDetail = async (url, charIndex) => {
        this.setState({ charDetail: { films: [] }, charIndex: null });
        await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => {
                this.setState({ charDetail: res.data, charIndex: charIndex })
                // console.log(res.data, 'data');
            })
            .catch((error) => {
                console.log(error, 'error');
            })
    }

    handleHeaderVisibilityChange = (value) => {
        this.setState({ showHeader: value });
    };

    handleDeleteList = (value) => {
        const deletedData = this.state.movieListData.remove(value);
        this.setState({ movieListData: deletedData });

    };

    handleAddList = (newData) => {
        var movieListData = this.state.movieListData
        movieListData.push(newData);
        this.setState({ movieListData: movieListData })
    };

    handleSearch = (val) => {
        const { tempMovieListData } = this.state;
        let searchedMovie = [];
        tempMovieListData.filter(movie => (movie.title.toLowerCase().includes(val.toLowerCase()))
        ).map(filteredMovie => (
            searchedMovie.push(filteredMovie)
        ));
        if (val) {
            this.setState({ movieListData: searchedMovie });
        } else {
            this.setState({ movieListData: tempMovieListData });
        }
    }
    handleSubmit = async (navigation, title, episode, openingCrawl, director, producer, releaseDate) => {
        // console.log(navigation, title, episode, openingCrawl, director, producer, releaseDate, "navigation, title, episode, openingCrawl, director, producer, releaseDate");
        const submitValue = {
            title: title,
            episode_id: episode,
            opening_crawl: openingCrawl,
            director: director,
            producer: producer,
            release_date: releaseDate,
        }
        await this.handleAddList(submitValue);
        navigation.navigate('MovieList');
    }
    render() {
        return (
            <GlobalContext.Provider value={{
                ...this.state,
                handleHeaderVisibilityChange: this.handleHeaderVisibilityChange,
                handleDeleteList: this.handleDeleteList,
                fetchAllMovieData: this.fetchAllMovieData,
                fetchMovieDetail: this.fetchMovieDetail,
                handleSearch: this.handleSearch,
                handleSubmit: this.handleSubmit,
                fetchCharacterDetail: this.fetchCharacterDetail

            }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}
