import React, { Fragment, useContext } from 'react';
import { Store } from './Store';

export default function App() {
  const store = useContext(Store);
  return (
    <Fragment>
      {/* lets test if our data is coming through here */}
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
    </Fragment>
  );
}
