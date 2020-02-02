import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

// create alias for long named types
type FormEl = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>(''); // we can set what the value will be by default
  const [todos, setTodos] = useState<ITodo[]>([]);
  // console.log(value);
  // setValue('test');
  // console.log(value);
  // debugger;

  const handleSubmit = (e: FormEl): void => {
    // prevents the page to be refreshing
    e.preventDefault();
    // add the value in the todo array
    addTodo(value);
    // sets back the value to be empty after submit
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos;
    // check if the todo is completed if it is then do the opposite
    newTodos[index].complete = !newTodos[index].complete;
    console.log(newTodos);
    setTodos(newTodos);
  };

  // console.log(todos);

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
      <section>
        {todos.map((todo: ITodo, idx: number) => (
          <Fragment key={idx}>
            <div>{todo.text}</div>
            <button type='button' onClick={() => completeTodo(idx)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
