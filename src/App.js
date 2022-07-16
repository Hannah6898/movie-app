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
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [details, setDetails] = useState([]);
  const [disableFav, setDisableFav]= useState(false);
  const [btnText, setBtnText]= useState("Add to Favourites");

  const dispatch = useDispatch();

  //Get Movie details from API
  const getMovieRequest = (searchValue) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.Search) {
          setMovieList(data.Search);
        }
      });
      dispatch(getMovies(movieList))
  };

  //Call getMovies upon search name change 
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

    //Get movie details 
    const getMovieDetails = (movie) => {
      details.length = 0;
      fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDetails(data);
          dispatch(getMovieDetailsPage(details))
        });
        
    };
  
  useEffect (()=> {
    getMovieDetails(movie)
  }, [movie])

  //Add movie to favourties 
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

  // //clear details array 
  const handleBackBtn = ()=> {
    
  }

  console.log(movie)
  console.log(details)

  return (
    <div className="App m-5">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={movieList}
                getMovieDetails={getMovieDetails}
                setMovie = {setMovie}
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
                handleBackBtn= {handleBackBtn}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
