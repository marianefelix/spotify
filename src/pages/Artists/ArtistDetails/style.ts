import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 54px;

  & img {
    height: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  line-height: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Link = styled.a``;
