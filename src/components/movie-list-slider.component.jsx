import './movie-list-slider.styles.scss';
import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const delay = 2500; //2500

const Slideshow = ({ movies }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const orderedMovies = movies.sort((a, b) => b.popularity - a.popularity)
    const filteredMovies = orderedMovies.filter((_, idx) => idx < 5)
    //console.log(filteredMovies)


    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === filteredMovies.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [filteredMovies.length, index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {filteredMovies
                    .map((movie, index) => (
                        <div className='slide' key={index}>
                            <div
                                className="background-image"
                                style={{
                                    backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.poster_path}`})`,
                                }}
                            />
                            <div className='body'>
                                <div className='title'>
                                    {movie.title} <span className='button-pelicula'>PELÍCULA</span>
                                </div>
                                <p className='Info'>
                                    <span className='vote' >{movie.vote_average}/10</span>
                                    <span className='release-date'>{movie.year}</span>
                                    <span className='quality'>HD</span>
                                </p>
                                <p className='description'>{movie.overview}</p>
                                <button className='button' type='button'>
                                    <i className="fas fa-play"></i>
                                    Ver Película
                                </button>
                            </div>

                        </div>
                    ))}
            </div>

            <div className="slideshowDots">
                {filteredMovies.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot ${index === idx ? "active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>

                ))}
            </div>
        </div>
    );
}

export default Slideshow;