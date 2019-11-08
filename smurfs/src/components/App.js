import React, { useEffect } from "react";

import { getSmurfs } from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';

import Smurfs from './Smurfs';

import "./App.css";

const App = props => {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch])

  if (smurfs) console.log(smurfs);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurfs smurfs={smurfs} />
    </div>
  );
}

export default App;
