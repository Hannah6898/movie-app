import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './Container/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
const [data, setData] = useState();
const [search, setSearch]=useState();

//Get data 
useEffect(()=>{
  
      fetch('http://www.omdbapi.com/?apikey=ae3fd08d&i=tt1285016')
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setData(data)
      })
},[]);

//Search bar 
function handleChange(event){
  // console.log(event.target.value)
  setSearch(event.target.value);
  console.log(search);
}

function searchMedia (e){
  e.preventDefault();
  fetch(`http://img.omdbapi.com/?s=${search}&apikey=ae3fd08d`)
  .then((res)=>{
    return res.json();
  })
  .then((searchData)=>{
    setData(searchData)
    console.log(searchData)
  })
}

  return (
    <Router>
    <div className="App">
      <Route path="/">
   <HomePage data={data} handleChange={handleChange} searchMedia={searchMedia} />
   </Route>
   <Route path="details"></Route>
    </div>
    </Router>
  );
}

export default App;

//http://www.omdbapi.com/?apikey=ae3fd08d&

//http://www.omdbapi.com/?y=2021&apikey=ae3fd08d

//http://www.omdbapi.com/?i=tt3896198&apikey=ae3fd08d

//http://www.omdbapi.com/?t=Game of Thrones&Season=1&apikey=ae3fd08d

//http://img.omdbapi.com/?s=Batman&apikey=ae3fd08d

//http://www.omdbapi.com/?apikey=ae3fd08d&i=tt1285016

