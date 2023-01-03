import { Fragment, useState } from 'react';
//import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import GenreCardDropdown from './genre-card-dropdown.component';
import MoviesCardDropdown from './movies-card-dropdown.component';
import SeriesCardDropdown from './series-card-dropdown.component';

const Navigation = ({ onChangeHandler }) => {
    const [genreCardDropdown, setGenreCardDropdown] = useState(false);
    const [moviesCardDropdown, setMoviesCardDropdown] = useState(false);
    const [seriesCardDropdown, setSeriesCardDropdown] = useState(false);

    return (
        <Fragment>
            <div className='navigation'>
                <div className='nav-links-container1'>
                    <div className='logo-container'>
                        <img src={'https://cuevana3.ai/wp-content/themes/cuevana3/public/img/cnt/cuevana3.png'} alt={''} />
                    </div>
                    <div className='nav-link1'>
                        <span>Inicio</span>
                    </div>
                    <div className='nav-link1' onMouseOver={() => setGenreCardDropdown(true)}
                        onMouseOut={() => setGenreCardDropdown(false)}>
                        <span>Géneros</span>
                        <i className="fas fa-angle-down"></i>
                        {genreCardDropdown && <GenreCardDropdown />}
                    </div>

                    <div className='nav-link1' onMouseOver={() => setMoviesCardDropdown(true)}
                        onMouseOut={() => setMoviesCardDropdown(false)}>
                        <span>Películas</span>
                        <i className="fas fa-angle-down"></i>
                        {moviesCardDropdown && <MoviesCardDropdown />}
                    </div>
                    <div className='nav-link1' onMouseOver={() => setSeriesCardDropdown(true)}
                        onMouseOut={() => setSeriesCardDropdown(false)}>
                        <span>Series</span>
                        <i className="fas fa-angle-down"></i>
                        {seriesCardDropdown && <SeriesCardDropdown />}
                    </div>
                </div>
                <div className='nav-links-container2'>
                    <div className='Search'>
                        <span className='Form-Icon'>
                            <input className='input' onChange={onChangeHandler} type='search' placeholder='Buscar películas...' autoComplete='off' />
                            <button id='search-submit' type='submit'>
                                <i className="fas fa-search"></i>
                            </button>
                        </span>
                    </div>
                    <button className='nav-link2' >
                        Entrar
                    </button>
                    <button type='button' className='button'>Registro</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Navigation;