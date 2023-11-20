'use client';

import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: white;
  height: 100%;
  padding: 0 1.8rem;
`;

export const Barbecues = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  position: relative;
  top: -40px;

  width: 800px;
  height: 600px;
  margin: 0 auto;
`;

export const ArrowButton = styled.button<{ $isLeft?: boolean }>`
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  left: ${(props) => (props.$isLeft ? '-70px' : 'initial')};
  right: ${(props) => (props.$isLeft ? 'initial' : '-70px')};

  cursor: pointer;
  user-select: none;

  span {
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    font-weight: normal;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary};

    span {
      color: white;
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
