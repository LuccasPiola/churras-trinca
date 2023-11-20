'use client';

import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text.secondary};
  margin-bottom: 2rem;
`;
export const Input = styled.input`
  padding: 1.5rem;
  width: 27rem;
  border: 0;
  border-radius: 2px;
  margin-top: 2rem;
  font-size: 1.5rem;
  outline: none;

  &::placeholder {
    font-style: italic;
  }
`;
