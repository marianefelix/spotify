import * as S from './style';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, handleChangePage }: PaginationProps) => {
  // const { totalPages, currentPage, handleChangePage } = usePagination();

  const numbers = [...Array(totalPages + 1).keys()];
  const pageNumbers = numbers.slice(1);

  return (
    <S.Container>
      {pageNumbers.map((pageNumber) => (
        <S.Page
          className={currentPage === pageNumber ? 'selected' : ''}
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
