import styled from 'styled-components';

export const Item = styled.a`
  display: flex;
  align-items: center;
  gap: 23px;

  color: ${({ theme }) => theme.color.gray['500']};

  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => `${theme.font.family.dm_sans}, sans-serif`};
  text-decoration: none;

  cursor: pointer;

  &:hover,
  &.selected {
    color: ${({ theme }) => theme.color.white};
  }

  &:hover svg g path,
  &.selected svg g path {
    fill: ${({ theme }) => theme.color.white};
  }

  &:hover svg path,
  &.selected svg path {
    stroke: ${({ theme }) => theme.color.white};
  }
`;
