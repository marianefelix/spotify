import { useCallback, useState } from 'react';
import { getTotalPages } from '../utils/getTotalPages';

const DEFAULT_LIMIT = 10;

export interface Paginated {
  offset: number;
  next: number;
  total: number;
}

export const usePagination = () => {
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSetTotalPages = useCallback((totalResults: number) => {
    const totalPages = getTotalPages(DEFAULT_LIMIT, totalResults);
    setTotalPages(totalPages);
  }, []);

  const handleChangePage = useCallback((page: number) => {
    setOffset((page - 1) * DEFAULT_LIMIT);
    setCurrentPage(page);
  }, []);

  return { currentPage, offset, totalPages, handleSetTotalPages, handleChangePage, DEFAULT_LIMIT };
};
