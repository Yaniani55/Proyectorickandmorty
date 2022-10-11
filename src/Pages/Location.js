import React, {useState, useEffect} from 'react'
import Cards from "../componentes/Cards/Cards";
import InputGroup from '../componentes/Filter/Category/InputGroup';

const Location = () => {
  let [id, setID]= useState(1);
  let [info, setInfo]= useState([]);
  let [results, setResults] = React.useState([]);
  let { type, name, dimension } = info ;
 
  let api= `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);
  
  return (
    
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-4'>
        Location :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className='text-center'>
          Dimension : {dimension === "" ? "Unknow" : dimension }
        </h5>
        <h6 className='text-center'>
          Type : {type === "" ? "Unknow" : type }
        </h6>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Pick Location </h4>
          < InputGroup setID={setID} name = {"Location -"} total={126}/>
         </div>
        <div className='col-lg-8 col-12'>
          <div className='row'> <Cards page= "/location/" results={results}/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location