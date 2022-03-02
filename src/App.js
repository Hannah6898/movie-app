import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./Container//HomePage/HomePage";
import Details from "./Container/Details/Details";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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


  return (
    <div className="App m-5">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//http://www.omdbapi.com/?apikey=ae3fd08d&

//http://www.omdbapi.com/?y=2021&apikey=ae3fd08d

//http://www.omdbapi.com/?i=tt3896198&apikey=ae3fd08d

//http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=ae3fd08d

//http://img.omdbapi.com/?s=Batman&apikey=ae3fd08d

//http://www.omdbapi.com/?apikey=ae3fd08d&i=tt1285016

// data={data} handleChange={handleChange} searchMedia={searchMedia}



// const getMovieRequest= async()=>{
//   const url = 'http://www.omdbapi.com/?s=star wars&apikey=ae3fd08d';

//   const response = await fetch(url);
//   const responseJson = await response.json();

//   console.log(responseJson)
// }