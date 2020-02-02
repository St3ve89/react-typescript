import React from 'react';

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: []
};
export const Store = React.createContext<IState>(initialState);

function reducer() {
  // pass
}

export function StoreProvider(props: any): JSX.Element {
  // anything inside a component will go through inside

  // goal here to make sure this value gets passed down into any component that is passed throug the store
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
