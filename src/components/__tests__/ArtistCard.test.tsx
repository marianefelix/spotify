import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils/test';
import { ArtistCard } from '../Artist/Card';
import { Artist } from '../../models/artist';

describe('<ArtistCard />', () => {
  const props = {
    id: 'DPR IAN',
    name: 'DPR IAN',
    avatarURL: 'https://i.scdn.co/image/ab6761610000e5ebe7cf64e17ae7a7ea4173f5ea',
    genres: ['k-rap', 'k-r&b'],
  } as Artist;

  it('Should render the right image source of the artist', () => {
    render(<ArtistCard {...props} />);

    const artistImage = screen.queryByTestId('artist-card-image') as HTMLImageElement;

    expect(artistImage.src).toContain(props.avatarURL);
  });

  it('Should show the artist name correctly', () => {
    render(<ArtistCard {...props} />);

    expect(screen.getByTestId('artist-card-name').textContent).toContain(props.name);
  });

  it('Should show the artist genres correctly', () => {
    render(<ArtistCard {...props} />);

    const genres = props.genres.join(', ');

    expect(screen.getByTestId('artist-card-genres').textContent).toContain(genres);
  });
});
