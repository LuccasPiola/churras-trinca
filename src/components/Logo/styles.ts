'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Logo = styled(Image)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
