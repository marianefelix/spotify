import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils/test';
import { Artist } from '../../models/artist';
import { ArtistList } from '../Artist/List';

describe('<ArtistCard />', () => {
  const artistList: Artist[] = [
    {
      id: 'DPR IAN',
      name: 'DPR IAN',
      avatarURL: 'https://i.scdn.co/image/ab6761610000e5ebe7cf64e17ae7a7ea4173f5ea',
      genres: ['k-rap', 'k-r&b'],
    },
    {
      id: 'DPR IAN',
      name: 'DPR IAN',
      avatarURL: 'https://i.scdn.co/image/ab6761610000e5ebe7cf64e17ae7a7ea4173f5ea',
      genres: ['k-rap', 'k-r&b'],
    },
  ];

  it('Should render no artist list', () => {
    render(<ArtistList />);

    const artistListElement = screen.getByTestId('artist-list');

    expect(artistListElement.children.length).toBe(0);
  });

  it('Should render a list of 2 artists', () => {
    render(<ArtistList artists={artistList} />);

    const artistListElement = screen.getByTestId('artist-list');

    expect(artistListElement.children.length).toBe(2);
  });

  it('Should render a list of 3 artists', () => {
    const newItem = artistList[0];
    artistList.push(newItem);

    render(<ArtistList artists={artistList} />);

    const artistListElement = screen.getByTestId('artist-list');

    expect(artistListElement.children.length).toBe(3);
  });
});
