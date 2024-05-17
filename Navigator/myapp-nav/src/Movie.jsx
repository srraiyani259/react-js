
import React, { useState, useEffect } from 'react';
import './App.css';

function Movie() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
      setMovies(storedMovies);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = () => {
    if (title && director && year) {
      const newMovies = [...movies, { title, director, year }];
      setMovies(newMovies);
      setTitle('');
      setDirector('');
      setYear('');
    }
  };

  const deleteMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setTitle(movies[index].title);
    setDirector(movies[index].director);
    setYear(movies[index].year);
  };

  const updateMovie = () => {
    if (title && director && year && editIndex !== null) {
      const updatedMovies = movies.map((movie, index) => 
        index === editIndex ? { title, director, year } : movie
      );
      setMovies(updatedMovies);
      setTitle('');
      setDirector('');
      setYear('');
      setEditIndex(null);
    }
  };

  return (
    <div className="movie-app">
      <h1>Movie Collection</h1>
      <div className="movie-form">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Director" 
          value={director} 
          onChange={(e) => setDirector(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Year" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
        />
        {editIndex !== null ? (
          <button onClick={updateMovie}>Update Movie</button>
        ) : (
          <button onClick={addMovie}>Add Movie</button>
        )}
      </div>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <span>{movie.title} ({movie.year}) - Directed by {movie.director}</span>
            <button onClick={() => startEdit(index)}>Edit</button>
            <button onClick={() => deleteMovie(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
