import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '../../utils/test';
import { ArtistCard } from '../Artist/Card';
import { Artist } from '../../models/artist';
import { BrowserRouter } from 'react-router-dom';

const props = {
  id: 'DPR IAN',
  name: 'DPR IAN',
  avatarURL: 'https://i.scdn.co/image/ab6761610000e5ebe7cf64e17ae7a7ea4173f5ea',
  genres: ['k-rap', 'k-r&b'],
} as Artist;

beforeEach(() => {
  render(<ArtistCard {...props} />, { wrapper: BrowserRouter });
});

describe('<ArtistCard />', () => {
  it('Should render the right image source of the artist', () => {
    const artistImage = screen.queryByTestId('artist-card-image') as HTMLImageElement;
    expect(artistImage.src).toContain(props.avatarURL);
  });

  it('Should show the artist name correctly', () => {
    expect(screen.getByTestId('artist-card-name').textContent).toContain(props.name);
  });

  it('Should show the artist genres correctly', () => {
    const genres = props.genres.join(', ');
    expect(screen.getByTestId('artist-card-genres').textContent).toContain(genres);
  });
});
