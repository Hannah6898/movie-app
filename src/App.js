import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Container//HomePage/HomePage";
import Details from "./Container/Details/Details";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import {useDispatch} from "react-redux";
import { addToFavourites } from "./Redux/Reducers/FavouritesSlice";
import {getMovieDetailsPage} from "./Redux/Reducers/MovieDetailsSlice"
import {getMovies} from './Redux/Reducers/MovieSearchSlice'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [details, setDetails] = useState([]);
  const [disableFav, setDisableFav]= useState(false);
  const [btnText, setBtnText]= useState("Add to Favourites");

  const dispatch = useDispatch();

  const getMovieRequest = (searchValue) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=ae3fd08d`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          console.log(movies)
        }
      });
      dispatch(getMovies(movies))
  };

  //Get data
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const getMovieDetails = (movie) => {
    fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=ae3fd08d`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      });
      dispatch(getMovieDetailsPage(details))
  };


  const handleFavouritesClick = (movie) => {
    const newFavouritesList = [...favourites, movie];
    if (newFavouritesList.includes(movie.imdbID)) {
      return newFavouritesList;
    } else {
      setFavourites(newFavouritesList);
      //push to the array to add 
      setDisableFav(true)
      setBtnText("Added")
    }
    dispatch(addToFavourites(movie))
 
  };

  return (
    <div className="App m-5">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={movies}
                getMovieDetails={getMovieDetails}
              />
            }
          />
          <Route
            path="/details"
            element={
              <Details
                handleFavouritesClick={handleFavouritesClick}
                disableFav= {disableFav}
                btnText={btnText}
                setDisableFav={setDisableFav}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
