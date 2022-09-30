import { Link } from "react-router-dom";

const Movies = ({ movie, title, id }) => {
    return (
      <div className="movie-details">
    <Link to={`details/${id}/movie`} style={{textDecoration: 'none', color: 'none'}}>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt=""
          
          className="movie-img"
        />
        <div className="lead text-danger text-center fw-bold">
          <p className="">{title}</p>
          <p>{movie.release_date}</p>
        </div>
        
        </Link>
      </div>
    
    );
  };
  
  export default Movies;
  