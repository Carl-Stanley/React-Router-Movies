import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movie = (props) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const id = 1;
        // change ^^^ that line and grab the id from the URL
        // You will NEED to add a dependency array to this effect hook

        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error("Another Error", error);
            });

    }, []);

    // Uncomment this only when you have moved on to the stretch goals
    // const saveMovie = () => {
    //   const addToSavedList = props.addToSavedList;
    //   addToSavedList(movie)
    // }

    if (!movie) {
        return <div> Loading movie information... </div>;
    }

    const { title, director, metascore, stars } = movie;
    return ( <div className = "save-wrapper">
        <div className = "movie-card">
        <h2> { title } </h2> <div className = "movie-director">
        Director: <i> { director } </i></div>
        <div className = "movie-metascore" >
        Metascore: <h2> { metascore } </h2>  
        </div> <h2> Actors </h2>

        {
            stars.map(star => ( <div key = { star }
                className = "movie-star" > { star } 
                </div>
            ))
        } </div> <div className = "save-button" > Save </div> </div>
    );
}

export default Movie;