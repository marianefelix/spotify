import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 85%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
  }
`;
