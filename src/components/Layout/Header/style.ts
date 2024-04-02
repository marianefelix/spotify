import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 32px;
`;

export const TextBox = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size['3xl']};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-family: ${({ theme }) => `${theme.font.family.dm_sans}, sans-serif`};
  line-height: 32px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => `${theme.font.family.dm_sans}, sans-serif`};
  line-height: 20px;
`;
