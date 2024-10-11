'use client';

import { Api, Container } from '@app/core/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Containers = () => {
  const [items, setItems] = useState<Container[]>([]);

  useEffect(() => {
    Api.containers.then(items => setItems(items.slice(0, 15)));
  }, []);

  return (
    <Elements>
      <h1>Containers: </h1>
      {items.map((item, i) => (
        <a key={i} href={item.host}>
          {item.name}
        </a>
      ))}
    </Elements>
  );
};

const Elements = styled.div({
  display: 'flex',
  flexDirection: 'column',
  '& > a + a': {
    borderTop: 'solid 1px white'
  },
  '& > a': {
    padding: '1em',
    fontSize: 'large',
    display: 'inline-block'
  }
});
