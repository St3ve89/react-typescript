import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';
import { IEpisode, IAction } from './interfaces';

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

  const toggleFavAction = (episode: IEpisode): IAction => {
    return dispatch({
      type: 'ADD_FAV',
      payload: episode
    });
  };

  console.log(state);

  return (
    <Fragment>
      <div className='header'>
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episode!</p>
      </div>
      <div className='episodes-layout'>
        {state.episodes.map((episode: IEpisode) => (
          <div key={episode.id} className='card'>
            <img
              src={episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
            />
            <div className='p10 flex column'>
              <div className='card-title'>{episode.name}</div>
              <div className='card-desc'>
                Season: {episode.season} Episode: {episode.number}
              </div>
              <button type='button' onClick={() => toggleFavAction(episode)}>
                Fav
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
