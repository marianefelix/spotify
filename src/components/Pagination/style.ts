import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-grow: 1;
`;

export const Page = styled.a`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => `${theme.font.family.dm_sans}, sans-serif`};
  font-size: ${({ theme }) => theme.font.size.sm};

  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 5px;

  &:hover,
  &.selected {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;
