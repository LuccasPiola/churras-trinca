'use client';

import styled from 'styled-components';

export const MainWrapper = styled.main`
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  background-image: linear-gradient(
      to bottom,
      rgba(255, 216, 54, 0) 0%,
      rgba(255, 216, 54, 1) 80%
    ),
    url('/assets/bbq_pattern.svg');
  background-position: top;
`;

export const LoginWrapper = styled.section`
  max-width: 636px;
  margin: 0 auto;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    margin-top: 15rem;
  }
`;

export const LoginButton = styled.button`
  width: 30rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.text.main};
  color: white;
  border-radius: 18px;
  margin-top: 3rem;
  font-size: 1.5rem;
  border: 2px solid ${({ theme }) => theme.text.main};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    border: 2px solid black;
    color: black;
  }

  &:active {
    background-color: ${({ theme }) => theme.secondary};
    transition: all ease-in 0.15s;
  }
`;
