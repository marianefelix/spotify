import { beforeAll, describe, expect, it, vi } from 'vitest';
import { render, screen } from '../../utils/test';
import { Pagination } from '../Pagination';

const id = 'pagination-container';
const totalPages = 5;
const currentPage = 3;
const handleChangePage = vi.fn();

beforeAll(() => {
  render(
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      handleChangePage={handleChangePage}
    />
  );
});

describe('<Pagination />', () => {
  it('Should render the total of pages correctly', () => {
    const paginationContainer = screen.getByTestId(id);
    expect(paginationContainer.children.length).toHaveLength(totalPages);
  });

  it('Should render the selected style correctly', () => {
    const paginationContainer = screen.getByTestId(id);
    const selectedPage = paginationContainer.querySelector('.selected');

    expect(selectedPage).toHaveTextContent(currentPage.toString());
  });
});
