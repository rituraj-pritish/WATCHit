import React from 'react';
import styled from 'styled-components';

import sizes from '../../sizes';

export const StyledPage = styled.div`
  margin: 0 auto;
  padding: 50px;
  max-width: ${({ theme }) => theme.maxWidth};
  padding-top: ${({ theme }) => theme.navHeight.aboveMd};

  @media ${sizes.md} {
    padding: ${({ theme }) => theme.padding.md};
    padding-top: ${({ theme }) => theme.navHeight.belowMd};
  }

  @media ${sizes.mob} {
    padding: ${({ theme }) => theme.padding.mob};
  }
`;

const Page = ({ children, ...otherProps }) => {
  return <StyledPage {...otherProps}>{children}</StyledPage>;
};

export default Page;
