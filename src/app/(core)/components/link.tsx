'use client';

import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledLink = styled(NextLink)`
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
    color: #0070f3;
    border-color: #0070f3;
  }
`;

type LinkProps = {
  href: string;
};

export default function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return <StyledLink href={href}>{children}</StyledLink>;
}
