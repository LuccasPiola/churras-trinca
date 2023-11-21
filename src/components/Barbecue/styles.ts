'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 2.3rem;
  background-color: white;
  border-radius: 2px;
  box-shadow: -10px 13px 16px 0px rgba(0, 0, 0, 0.06);
  height: 200px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    height: 100px;
  }

  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 5rem;

    @media screen and (max-width: 900px) {
      margin-bottom: 2rem;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray.main};
    transition: none;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InformationWithIcon = styled.div`
  display: flex;
  align-items: center;

  > span {
    margin-left: 0.5rem;
  }
`;
