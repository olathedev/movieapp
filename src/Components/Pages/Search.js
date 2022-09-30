import useFetch from "../Customhook/UseFetch";
import { useParams, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import loader from "../../Assets/images/loader2.svg"

const SearchPage = () => {
  const { query } = useParams();

  const { data: search, pending } = useFetch(
    `https://api.themoviedb.org/3/search/multi?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return (
    <div className="container">
      <hr />
      <h2 clasName="display-5">Results</h2>
      
      <div className="row text-center my-5">
        {pending ? (<div>
            <img src={loader} alt="" />
        </div>) : (
        search.length > 0 ? (
          search.map((s) => (
            <div className="col-12 col-md-4">
              <Link to={`/details/${s.id}/${s.media_type}`}
                style={{ textDecoration: "none"}}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${s.poster_path}`}
                  alt=""
                  style={{borderRadius: "10px"}}
                  className="movie-img"
                />
                <div className="lead text-danger text-center fw-bold">
                  <p className="">{s.original_title}</p>
                  <p>{s.release_date}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>No Result found</div>
        ) )}
      </div>
 <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
    
  );
};

export default SearchPage;
