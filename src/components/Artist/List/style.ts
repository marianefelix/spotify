import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-height: 85%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  row-gap: 20px;
  column-gap: 40px;

  padding-right: 20px;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 20px;
  }
`;
