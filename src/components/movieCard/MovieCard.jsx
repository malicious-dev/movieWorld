import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';
import Img from '../lazyLoadImage/Img';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';
import PosterFallback from '../../assets/no-poster.png';
import dateFormat, { masks } from 'dateformat';

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids} />
          </React.Fragment>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {fromSearch ? (
            <>
              {data?.media_type === 'movie'
                ? dateFormat(data?.release_date, masks.mediumDate)
                : null}
              {data?.media_type === 'tv'
                ? dateFormat(data?.first_air_date, masks.mediumDate)
                : null}{' '}
            </>
          ) : (
            <>
              {data?.release_date
                ? dateFormat(data?.release_date, masks.mediumDate)
                : null}
              {data?.first_air_date
                ? dateFormat(data?.first_air_date, masks.mediumDate)
                : null}
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
