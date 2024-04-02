import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.gray['800']};

  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  line-height: 20px;

  padding: 11px 40px;
  border-radius: 24px;

  &:disabled {
    filter: brightness(75%);
    cursor: auto;
  }
`;
