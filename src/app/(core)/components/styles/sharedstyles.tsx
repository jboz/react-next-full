'use client';

import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  direction?: 'row' | 'column';
  centered?: boolean;
  padding?: string;
  gap?: string;
};

export const Container = ({ children, direction, centered, padding, gap = '2em' }: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction || 'column',
        justifyContent: centered ? 'center' : undefined,
        alignItems: centered ? 'center' : undefined,
        width: '100%',
        height: '100%',
        padding,
        gap
      }}
    >
      {children}
    </div>
  );
};

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.complementary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;
