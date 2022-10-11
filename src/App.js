import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
import Filters from "./componentes/Filter/Filter";
import Cards from "./componentes/Cards/Cards";
import Pagination from "./componentes/Pagination/Pagination";
import Search from "./Search/Search";
import Navbar from "./componentes/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./componentes/Cards/CardDetails";

function App(){
  return (
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<CardDetails/>}/>

        <Route path="/location" element={<Location/>}/>
        <Route path="/location/:id" element={<CardDetails/>}/>

      </Routes>

    </Router>
    

  );
}

const Home = () => {
  let [pageNumber, setPageNumber]= useState(1);
  let [fetchedData, updateFetcheData] =useState([]);
  let { info, results } = fetchedData;
  let [ search, setSearch] = useState(" ");
  let [status, setStatus] = useState("");
  let [gender, setGender] =useState("");
  let [species, setSpecies]  =useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect (() =>{
    (async function () {
      let data = await fetch (api).then (res =>res.json())
      updateFetcheData(data);
    }) ()
  }, [api]);

  return (
    <div className="App">

    <h1 className="text-center mb-3">Characters</h1>
    
      <Search setSearch = {setSearch}  setPageNumber= {setPageNumber}/>

    <div className="container">
      <div className="row">
        
          <Filters 
          
          setSpecies={setSpecies}
          setGender={setGender} 
          setStatus={setStatus} 
          setPageNumber={setPageNumber} />
          
        
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/" results={results}/>
            
            
          </div>
        </div>
      </div>

    </div>
    <Pagination  
         info={info}
         pageNumber={pageNumber}
         setPageNumber={setPageNumber}/>
            

    </div>
    
  );
}

export default App;
