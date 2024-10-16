'use client';

import { Api, Todo } from '@app/core/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Todos = () => {
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    Api.todos.then(items => setItems(items.slice(0, 15)));
  }, []);

  return (
    <Elements>
      <h1>Todos: </h1>
      {items.map((item, i) => (
        <div key={i}>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </Elements>
  );
};

const Elements = styled.div({
  display: 'flex',
  flexDirection: 'column',
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
