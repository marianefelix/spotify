import { PrimaryButton } from '../../../components/Button';
import { CloseIcon } from '../../../components/icons/Close';
import * as S from './style';

interface PlaylistModalProps {
  isOpen: boolean;
  isLoading: boolean;
  inputValue: string;
  handleCloseModal: () => void;
  handleInputOnChange: (newValue: string) => void;
  handleCreatePlaylist: () => void;
}

export const PlaylistModal = ({
  isOpen,
  isLoading,
  inputValue,
  handleCloseModal,
  handleInputOnChange,
  handleCreatePlaylist,
}: PlaylistModalProps) => {
  return (
    <S.OverlayContainer $isOpen={isOpen}>
      <S.Modal>
        <S.Header>
          <S.CloseButton onClick={handleCloseModal}>
            <CloseIcon id="close-icon" />
          </S.CloseButton>
        </S.Header>
        <S.MainContent>
          <S.Description>Dê um nome a sua playlist</S.Description>
          <S.Input
            value={inputValue}
            onChange={(e) => handleInputOnChange(e.currentTarget.value)}
          />
        </S.MainContent>
        <S.Footer>
          <PrimaryButton disabled={isLoading} onClick={handleCreatePlaylist}>
            {isLoading ? 'Criando...' : 'Criar'}
          </PrimaryButton>
        </S.Footer>
      </S.Modal>
    </S.OverlayContainer>
  );
};
