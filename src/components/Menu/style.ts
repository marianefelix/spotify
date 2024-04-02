import styled from 'styled-components';

export const Nav = styled.nav`
  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.black};

  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;

  img {
    margin-bottom: 40px;
  }

  & > a:last-child {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  flex-grow: 1;
`;
