'use client';

import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: white;
  height: 100%;
  padding: 0 1.8rem;
`;

export const BarbecueDetails = styled.section`
  position: relative;
  top: -40px;

  width: 800px;
  height: 65%;
  margin: 0 auto;

  padding: 2rem 2.3rem;
  background-color: white;
  border-radius: 2px;
  box-shadow: -10px 13px 16px 0px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

export const BarbecueMainInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  > div > h2,
  h3 {
    margin-bottom: 1rem;
  }

  > div > h4 {
    width: 35rem;
    height: 70px;

    @media screen and (max-width: 900px) {
      width: 15rem;
    }
  }

  > div > div:first-child {
    margin-bottom: 1rem;
  }
`;

export const Contributions = styled.section<{ $hasInfo: boolean }>`
  height: ${(props) => (props.$hasInfo ? '430px' : '500px')};
  overflow: auto;
  padding-right: 2rem;
`;

export const AddContributionForm = styled.form`
  display: grid;
  grid-template-columns: 3.2% 84% 10%;
  padding: 1rem 0.1rem;
  grid-column-gap: 12px;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 3.2% 75% 14%;
  }

  input {
    -moz-appearance: textfield;
    appearance: textfield;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.secondary};
    padding: 0.5rem 0;
    font-size: 1rem;
    outline: 0;

    &::placeholder {
      font-style: italic;
      color: #ccc;
    }

    &:last-child {
      display: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const AddContributionButton = styled.button`
  appearance: none;
  width: 22px;
  height: 22px;
  border: 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  position: absolute;
  top: 22px;
  left: 3px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 15px;
    height: 15px;
    top: 15px;
    left: 3px;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
