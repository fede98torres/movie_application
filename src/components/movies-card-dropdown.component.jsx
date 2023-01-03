import './movies-card-dropdown.styles.scss';
const MoviesCardDropdown = () => {

  return (
    <div className='movie-dropdown-container'>
      <div className='movie-item'>
        <span className='text'>Estrenos</span>
      </div>
      <div className='movie-item'>
        <span className='text'>Ranking</span>
      </div>
      <div className='movie-item'>
        <span className='text'>Mas Vistas</span>
      </div>
      <div className='movie-item'>
        <span className='text'>Peliculas</span>
      </div>
      
    </div>
  );
};

export default MoviesCardDropdown;