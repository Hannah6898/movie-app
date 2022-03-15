import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Container//HomePage/HomePage";
import Details from "./Container/Details/Details";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites]= useState([]);
  const [details, setDetails] = useState([]);

  const getMovieRequest=(searchValue)=>{
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=ae3fd08d`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.Search){
        setData(data.Search);
      }
    });
  }

  //Get data
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const getMovieDetails=(movie)=>{
    fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=ae3fd08d`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setDetails(data);
    });
  }

  //Add to favourites function not working
  const handleFavouritesClick = (movie)=>{
    const newFavouritesList = [...favourites, movie]
    setFavourites(newFavouritesList);
    console.log(favourites)
  }

  return (
    <div className="App m-5">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage data={data}  getMovieDetails={getMovieDetails} favourites={favourites}/>} />
          <Route path="/details" element={<Details details={details} handleFavouritesClick={handleFavouritesClick}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
