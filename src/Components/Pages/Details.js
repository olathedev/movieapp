import { useParams } from "react-router-dom";
import loader from "../../Assets/images/loader2.svg";
import { Container } from "react-bootstrap";
import useDetails from "../Customhook/useDetails";
import Cast from "./Cast";
import { Link } from "react-router-dom";

const Details = ({title}) => {
  
  const { id, type } = useParams();

  const { details, fetching} = useDetails(`https://api.themoviedb.org/3/${type}/${id}?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US`)
  const {details: similar} = useDetails(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&page=1`)

  return (
    <div className="movie-details bg-dark text-white">
      

      <div className="content"  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original${details.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'cnenter'}}>

     
     
        <Container>
          {fetching && (
            <div>
              <div className="text-center">
                <img src={loader} alt="" />
              </div>
            </div>
          )}

          {!fetching && (
            <>
            <div className="row my-2">
              <div className="col-md-4 my-5">
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${details.poster_path}`} className="img-fluid" alt="" style={{borderRadius: "15px"}} />
              </div>
              <div className="col-md-8 fw-bold">
                  {details.title && <div className="display-6 py-3 fw-bold">{details.title}</div>}
                  {details.original_name && <div className="display-6 py-3 fw-bold">{details.original_name}</div>}

                  <p className="lead">Released: {details.release_date}</p>
                  <p className="lead">language: {details.original_language}</p>
                 
                  
                  <p className="lead">{details.overview}</p>
                  <button className="btn btn-danger">Trailer</button> &nbsp;
                <Link to={`/reviews/${details.id}/${type}`}>  <button className="btn btn-dark">Read Reviews</button></Link>
                  <div className="row mt-4">
                    <div className="col-6">
                    <p className="lead">Genres</p>
                      {details.genres.map((genres) => (
                          <p>{genres.name}</p>
                      ))}
                    </div>
                    <div className="col-6">
                    <p className="lead">Production Companies</p>
                      {details.production_companies.map((genres) => (
                          <p>{genres.name}</p>
                      ))}
                    </div>
                  </div>
              </div>

            </div>
          
            </>
          )}
        </Container>

      </div>
      <Container>
        <div className="row my-5">
          <div className="display-6 text-center">
                  Cast/Crew
          </div>
                 <hr />
              <Cast id={id} type={type} />
           
              
            </div>

        
           
      </Container>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default Details;
