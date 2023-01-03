import './home-item.styles.scss';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomeItem = ({ movie, genreMovie }) => {
    const [showCardInfo, setShowCardInfo] = useState(false);
    const [genres, setGenres] = useState([]);
    const { poster_path, title, release_date, vote_average, overview, genre_ids } = movie;
    const year = release_date.split("-")[0];

    useEffect(() => {
        const array_ids = genre_ids.map((id) => {
            return genreMovie.filter((genreIdsObj) => id === genreIdsObj.id)[0];
        });
        if (array_ids[0]?.name) {
            setGenres(array_ids.map(a => a.name))
        } else {
            return
        }
    }, [genreMovie, genre_ids]);

    return (
        <div>
            <div className='directory-item-container' onMouseOver={() => setShowCardInfo(true)}
                onMouseOut={() => setShowCardInfo(false)} >
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`${title}`}
                />
                {showCardInfo && <i className="fas fa-play"></i>}
                <span className='Year'>{year}</span>
                <div className='footer'>
                    <span className='name'>{title}</span>
                </div>
                <div className='card-info-container' >
                    <div
                        className='background-image'
                        style={{
                            backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${poster_path}`})`,
                        }}
                    />
                    <div className='body'>
                        <div className='title'>{title}</div>
                        <p className='Info'>
                            <span className='vote' >{vote_average}/10</span>
                            <span className='release-date'>{year}</span>
                            <span className='quality'>HD</span>
                        </p>
                        <p className='description'>{overview}</p>
                        <p className='genre'>
                            <span className='genre1'>Genre: </span>
                            {genres.toString().replaceAll(',', ', ')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;