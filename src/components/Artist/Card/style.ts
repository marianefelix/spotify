import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover > a svg {
    visibility: visible;
  }

  justify-content: space-between;
`;

export const ArtistBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    height: 64px;
    width: 64px;

    border-radius: 50%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};

  font-family: ${({ theme }) => `${theme.font.family.dm_sans}, sans-serif`};
  line-height: 20px;
`;

export const ArtistName = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const GenreListText = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const ViewLink = styled.a`
  svg {
    visibility: hidden;
  }
`;
