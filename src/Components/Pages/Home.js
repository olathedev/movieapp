import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeHeader from "../HomeHeader";
import Movies from "../Movies";
import loader from "../../Assets/images/loader2.svg"
import useFetch from "../Customhook/UseFetch";
import { useState } from "react";

const Home = () => {
  // const TopRatedUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=5e75cbabb35cdb37b81c1b89c24e4463"
  const [mode, setMode] = useState("bg-dark text-white")
 

   const { data: popular, pending, error } = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&page=1")

   const { data: popular2, pending: pend } = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&page=2")

   const { data: tvshows, pending: pp } = useFetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&page=1")

   const { data: topRated, pending: isPending } = useFetch("https://api.themoviedb.org/3/trending/movie/day?api_key=5e75cbabb35cdb37b81c1b89c24e4463")

  const{data: search} = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&query=spiderman&page=1&include_adult=false`)
  
  return (
    <div className="home">
      <div>
      <HomeHeader />

      <Container>
        <div className="row">
        <div className="display-6 py-4">
            Explore <span style={{ color: "#bb2d3b" }}>All</span>
          </div>
          {isPending ? (
              <div className="text-center">
                <img src={loader}  alt="" />
              </div>
            ) : (
              
              tvshows.map((top) => (
                <div className="col-12 col-sm-6 col-md-4 text-center col-lg-3">
                  <Movies key={top.id} title={top.original_title} movie={top} id={top.id} />
                </div>
                
              ))
            ) }
      
            {isPending ? (
              <div className="text-center">
                <img src={loader}  alt="" />
              </div>
            ) : (
              
              topRated.map((top) => (
                <div className="col-12 col-sm-6 col-md-4 text-center col-lg-3">
                  <Movies key={top.id} title={top.original_title} movie={top} id={top.id} />
                </div>
                
              ))
            ) }
      
          {pending ? (
            <div className="text-center">
               <img src={loader} alt="" />
            </div>
          ) : Error ? (
            popular.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 text-center col-lg-3">
                <Movies key={movie.id} title={movie.title} movie={movie} id={movie.id} />
              </div>
            ))
          ) : (
            <div className="display-3">{error}</div>
          )}

{pend ? (
            <div className="text-center">
               <img src={loader} alt="" />
            </div>
          ) : Error ? (
            popular2.map((movie) => (
              <div className="col-12 col-sm-6 text-center col-md-4 col-lg-3">
                <Movies key={movie.id} title={movie.title} movie={movie} id={movie.id} />
              </div>
            ))
          ) : (
            <div className="display-3">{error}</div>
          )}
       
        </div>
      </Container>
    </div>
    </div>
  );
};

export default Home;
