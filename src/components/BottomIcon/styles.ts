'use client';

import styled from 'styled-components';

export const BottomIcon = styled.button`
  width: 60px;
  height: 60px;
  padding: 0.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 30px;
  right: 50px;

  cursor: pointer;
  user-select: none;

  span {
    color: ${({ theme }) => theme.primary};
    font-size: 2rem;
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
