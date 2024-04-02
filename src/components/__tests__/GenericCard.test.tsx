import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test';
import { GenericCard } from '../GenericCard';

const props = {
  id: 'id',
  imageURL: 'https://i.scdn.co/image/ab6761610000e5ebe7cf64e17ae7a7ea4173f5ea',
  imageAlt: 'Alt',
  title: 'Title',
  description: '<p>Description</p>',
};

beforeEach(() => {
  render(<GenericCard {...props} />);
});

describe('<GenericCard />', () => {
  it('Should render the right image source', () => {
    const cardImage = screen.queryByAltText(props.imageAlt) as HTMLImageElement;
    expect(cardImage.src).toContain(props.imageURL);
  });

  it('Should show the card title correctly', () => {
    expect(screen.getByText(props.title).textContent).toContain(props.title);
  });

  it('Should show the card description correctly', () => {
    const parsedDescription = props.description.replace(/<\/?[^>]+(>|$)/g, '');
    expect(screen.getByText(parsedDescription).textContent).toContain(parsedDescription);
  });

  it('Should render default image when imageURL is empty', () => {
    render(<GenericCard {...props} imageURL="" />);
    const defaultImage = screen.getByTestId('default-image-box');

    expect(defaultImage).toBeInTheDocument();
  });
});
