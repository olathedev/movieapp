import HomeNav from "../Nav";
import useFetch from "../Customhook/UseFetch";
import { Link } from "react-router-dom";

const Tv = () => {

    const {data: tv, pending} = useFetch('https://api.themoviedb.org/3/tv/top_rated?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&page=1')

    return ( 
        <div>
            <div className="tv-header container py-5">
                
                <h1>Latest tv show : </h1>
                <p className="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio et quam placeat repudiandae olor? </p>
            </div>
        <div className="latest container">
            <hr />
            <div className="display-5 text-center py-4">Explore tv shows</div>
            <div className="row text-center">
            {!pending ? (
                tv.map((tvshow)=>(
                    <div className="col-12 col-md-3">
                    <Link to={`details/${tvshow.id}/tv`} style={{textDecoration: 'none', color: 'none'}}>
                    <img
                      src={`https://image.tmdb.org/t/p/w220_and_h330_face${tvshow.poster_path}`}
                      alt=""
                      style={{borderRadius: "10px"}}   
                      className="movie-img"
                    />
                    <div className="lead text-danger text-center fw-bold">
                      <p className="">{tvshow.original_name}</p>
                      <p>{tvshow.release_date}</p>
                    </div>
                    
                    </Link>
                    </div>                    
                ))
            ):(
                <div>Loading...</div>
            )}
            </div>
        </div>
        </div>
     );
}
 
export default Tv;