import './series-card-dropdown.styles.scss';
const SeriesCardDropdown = () => {

  return (
    <div className='series-dropdown-container'>
      <div className='series-item'>
        <span className='text'>Series</span>
      </div>
      <div className='series-item'>
        <span className='text'>Episodios</span>
      </div>
    </div>
  );
};

export default SeriesCardDropdown;