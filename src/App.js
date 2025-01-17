import { useState, useEffect } from 'react';

import theService from './Service/currency';
import Currencies from './Components/Currencies';


import './App.css';

//const data = require("./db.json");

function App () {
  const [currenOption, setCurrentOption] = useState([]);
  //const [secondOptions, setSecondOption] = useState([]);


  // create useEffect for array
  useEffect(() => {
    theService
    .getAll()
    .then(currenOption => {
      setCurrentOption(currenOption)
    })
  }, []);


  return (
    <div className="flex-container">
      <h1>Converter</h1>
      <Currencies currencies={currenOption}/>
    </div>
  );
}

export default App;
