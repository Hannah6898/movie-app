import React, {useState} from 'react';
import './App.css';
import HomePage from './Container/HomePage';

function App() {

const [data, setData] = useState();

//Get data 
function getMovies(){
  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ae3fd08d')
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    setData(data)
  })
}

getMovies()

  return (
    <div className="App">
   <HomePage data={data}/>
    </div>
  );
}

export default App;
