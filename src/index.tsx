import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

// create alias for long named types
type FormEl = React.FormEvent<HTMLFormElement>;

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>(''); // we can set what the value will be by default
  // console.log(value);
  // setValue('test');
  // console.log(value);
  // debugger;

  const handleSubmit = (e: FormEl): void => {
    // prevents the page to be refreshing
    e.preventDefault();

    // sets back the value to be empty after submit
    setValue('');
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
    </Fragment>
  );
}

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
