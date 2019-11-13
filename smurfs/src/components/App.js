import React, { useEffect } from "react";

import { fetchSmurfs } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

import "./App.css";

const App = () => {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [dispatch])

  if (smurfs) console.log(smurfs);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux YEET</h1>
      <SmurfForm />
      <Smurfs smurfs={smurfs} />
    </div>
  );
}

export default App;
