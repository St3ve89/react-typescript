export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<any>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  summary: string;
  image: { medium: string; original: string };
}
