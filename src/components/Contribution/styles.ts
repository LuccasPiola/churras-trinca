'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 0.5fr 10fr 1fr;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  margin-right: 1rem;

  background-color: white;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;

  vertical-align: middle;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  &:disabled {
    border: 1px solid #ccc;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  appearance: none;
  border: 0;
  color: #f44336;
  font-size: 1rem;
  background-color: transparent;

  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  right: -28px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    color: #ccc;
  }
`;
