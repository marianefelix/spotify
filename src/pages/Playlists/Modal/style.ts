import styled from 'styled-components';

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1;

  left: 0;
  top: 0;

  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  height: 45vh;
  width: 600px;

  display: flex;
  /* align-items: center;
    justify-content: center; */
  flex-direction: column;

  padding: 20px;

  border-radius: 32px;
  background-color: ${({ theme }) => theme.color.gray['700']};
`;

export const Header = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  flex-grow: 1;

  p,
  input {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};

  text-align: center;

  line-height: 20px;
`;

export const Input = styled.input`
  width: 536px;
  padding: 8px;

  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => `${theme.font.family.rubik}, sans-serif`};
  text-align: center;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &:focus-visible {
    outline: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;
