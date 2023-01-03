import HomeItem from './home-item.component';
import './home.styles.scss';

const Home = ({ movies, genreMovie }) => {

  return (
    <div className='directory-container'>
      {movies
          .sort((a, b) => b.popularity - a.popularity)
          .map((movie) => (
            <HomeItem key={movie.id} movie={movie} genreMovie={genreMovie} />
          ))}
          
    </div>
  );
};

export default Home;

