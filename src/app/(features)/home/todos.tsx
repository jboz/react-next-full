'use client';

import { Api, Todo } from '@app/core/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    Api.todos.then(todos => setTodos(todos.slice(0, 15)));
  }, []);

  return (
    <TodosElt>
      {todos.map((todo, i) => (
        <div key={i}>
          <div>{todo.id}</div>
          <div>{todo.title}</div>
        </div>
      ))}
    </TodosElt>
  );
};

const TodosElt = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '1em',
  height: '300px',
  overflow: 'auto',
  '& > div + div': {
    borderTop: 'solid 1px white'
  },
  '& > div': {
    padding: '1em',
    fontSize: 'large',
    display: 'flex',
    gap: '1em'
  }
});
