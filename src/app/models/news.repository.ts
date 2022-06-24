import { MovieRepository } from './movie.repository';
import { News } from './news';

export class NewsRepository {
  private news_array: News[];
  private movieRepository: MovieRepository;
  constructor() {
    this.movieRepository = new MovieRepository();
    this.news_array = [
      {
        Id: 1,
        title: 'Shazam',
        authors: 'Bill Parker',
        CreatedDate: new Date(),
        imageUrl: this.movieRepository.GetMovieById(1).imageUrl,
      },
      {
        Id: 2,
        title: 'Shazam',
        authors: 'Bill Parker',
        CreatedDate: new Date(),
        imageUrl: this.movieRepository.GetMovieById(2).imageUrl,
      },
      {
        Id: 3,
        title: 'Shazam',
        authors: 'Bill Parker',
        CreatedDate: new Date(),
        imageUrl: this.movieRepository.GetMovieById(3).imageUrl,
      },
      {
        Id: 4,
        title: 'Shazam',
        authors: 'Bill Parker',
        CreatedDate: new Date(),
        imageUrl: this.movieRepository.GetMovieById(4).imageUrl,
      },
    ];
  }
  Get(): News[] {
    return this.news_array;
  }
  Add(news: News) {
    this.news_array.push(news);
  }
  Delete(id: number) {
    this.news_array.splice(id, 1);
  }
}
