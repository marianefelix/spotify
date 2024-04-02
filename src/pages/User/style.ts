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
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.color.white};

  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  line-height: 20px;
`;
