import * as S from './style';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, handleChangePage }: PaginationProps) => {
  const numbers = [...Array(totalPages + 1).keys()];
  const pageNumbers = numbers.slice(1);

  return (
    <S.Container data-testid="pagination-container">
      {pageNumbers.map((pageNumber) => (
        <S.Page
          className={currentPage === pageNumber ? 'selected' : ''}
          data-testid={`page-${pageNumber}`}
          key={pageNumber}
          onClick={() => {
            handleChangePage(pageNumber);
          }}
          href="#"
        >
          {pageNumber}
        </S.Page>
      ))}
    </S.Container>
  );
};
