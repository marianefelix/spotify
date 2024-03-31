import styled from 'styled-components';

export const GreetingText = styled.h1`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size['3xl']};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  line-height: 32px;
`;
