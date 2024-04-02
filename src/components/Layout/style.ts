import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
`;

export const AsideBox = styled.aside`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 250px);
  padding: 32px;

  background-color: ${({ theme }) => theme.color.gray['900']};
`;
