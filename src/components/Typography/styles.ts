'use client';

import React from 'react';
import styled from 'styled-components';

export const StyledTag = styled(
  ({ tag, children, size, textType, isDashed, ...props }: TypographyProps) =>
    React.createElement(tag, props, children)
)`
  font-size: ${({ size }) => size + 'rem'};
  font-weight: ${({ textType }) => (textType === 'text' ? 'normal' : 'bold')};
  color: ${({ theme, textType }) =>
    textType === 'semi-title' ? theme.text.secondary : theme.text.main};
  text-decoration: ${({ isDashed }) => (isDashed ? 'line-through' : 'normal')};
`;
