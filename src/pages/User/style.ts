import styled from 'styled-components';

export const MainContent = styled.div`
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 24px;

  & img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  & button {
    margin-top: 10px;
  }

  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
`;

export const TextBox = styled.div`
  h2,
  p {
    text-align: center;
  }

  h2 {
    padding-bottom: 5px;
  }
`;

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 20px;
`;

export const EmailText = styled.p`
  font-size: ${({ theme }) => theme.font.size['sm']};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 20px;
`;
