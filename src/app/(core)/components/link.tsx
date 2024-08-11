'use client';

import NextLink from 'next/link';
import styled from 'styled-components';

type LinkProps = {
  href: string;
  primary?: boolean;
};

export const Link = styled(NextLink)<{ primary?: boolean }>`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;

  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  :focus,
  :active {
    color: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.secondary)};
    border-color: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.secondary)};
  }
`;
