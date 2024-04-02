import { PrimaryButton } from '../../../components/Button';
import { CloseIcon } from '../../../components/icons/Close';
import * as S from './style';

export const PlaylistModal = () => {
  return (
    <S.OverlayContainer>
      <S.Modal>
        <S.Header>
          <S.CloseButton>
            <CloseIcon id="close-icon" />
          </S.CloseButton>
        </S.Header>
        <S.MainContent>
          <S.Description>Dê um nome a sua playlist</S.Description>
          <S.Input value="" />
        </S.MainContent>
        <S.Footer>
          <PrimaryButton>Criar</PrimaryButton>
        </S.Footer>
      </S.Modal>
    </S.OverlayContainer>
  );
};
