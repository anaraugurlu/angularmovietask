import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        Id: 1,
        title: 'Shazam',
        description: 'Shazam description',
        imageUrl: 'https://www.povdesign.com/wp-content/uploads/2020/02/shazam-poster-compressor.jpg',
      },
      {
        Id: 2,
        title: 'Shazam',
        description: 'Shazam description',
        imageUrl:
          'https://www.povdesign.com/wp-content/uploads/2020/02/shazam-poster-compressor.jpg',
      },
      {
        Id: 3,
        title: 'Shazam',
        description: 'Shazam description',
        imageUrl:
          'https://www.povdesign.com/wp-content/uploads/2020/02/shazam-poster-compressor.jpg',
      },
      {
        Id: 4,
        title: 'Shazam',
        description: 'Shazam description',
        imageUrl:
          'https://www.povdesign.com/wp-content/uploads/2020/02/shazam-poster-compressor.jpg',
      },
    ];
  }
  GetMovies(): Movie[] {
    return this.movies;
  }
  GetMovieById(id: number): Movie | undefined {
    return this.movies.find((i) => i.Id == id);
  }
}
