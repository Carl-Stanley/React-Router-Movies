import React from 'react';

const MovieCard = props => {

  const { movie }= props; 
  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h1>{title}</h1>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        
        <h2>Actors</h2>
          {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
          
        ))}
        </div>        
      {props.addToSavedList && 
      <div onClick={()=>{props.addToSavedList(movie)}} className="save-button">Save</div>}
    </div>
  );
};

export default MovieCard;