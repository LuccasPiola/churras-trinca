'use client';

import styled from 'styled-components';

export const ImageWrapper = styled.section`
  position: relative;
  height: 100%;

  &::before {
    position: absolute;
    inset: 0;
    background-image: url('/assets/bbq_pattern.svg');
    content: '';
    height: 100%;
    opacity: 0.6;
    z-index: 0;
  }
`;

export const Form = styled.form`
  padding: 1rem;
  position: relative;
  z-index: 1;

  > h2 {
    text-align: center;
  }

  > h3 {
    margin-top: 3rem;
  }
`;

export const DatePicker = styled.input`
  border: 0;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  transition: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};

  &:invalid {
    border-color: black;
  }
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  width: 50%;
  padding: 0.5rem;
  outline: none;
  font-size: 1rem;
  margin-top: 0.5rem;

  &:focus,
  &:valid {
    border-color: ${({ theme }) => theme.primary};
    transition: none;

    &::placeholder {
      color: transparent;
    }
  }

  &::placeholder {
    font-style: italic;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 50%;
  height: 200px;
  padding: 0.5rem;
  outline: none;
  font-size: 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;

  &:focus,
  &:not(:placeholder-shown) {
    border-color: ${({ theme }) => theme.primary};
    transition: none;
  }

  &::placeholder {
    color: transparent;
  }
`;

export const AddButtonIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 90px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  flex-direction: column;

  h4 {
    margin-top: 0.5rem;
  }
`;

export const AddButton = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  background-image: url('/assets/icon_bbq.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  border: 0;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  svg {
    color: green;
  }
`;
