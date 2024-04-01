import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;

  display: flex;
  align-items: center;
  gap: 16px;

  & img {
    height: 72px;
    height: 72px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  line-height: 20px;
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  line-height: 20px;

  opacity: 0.8;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
