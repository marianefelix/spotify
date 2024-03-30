import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  background-color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  text-align: center;

  line-height: 20px;
`;
