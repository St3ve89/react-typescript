import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';

export default function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const res = await data.json();

    return dispatch({
      type: 'FETCH_DATA',
      payload: res._embedded.episodes
    });
  };

  console.log(state);

  return (
    <Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
    </Fragment>
  );
}
