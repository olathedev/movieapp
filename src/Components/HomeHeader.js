import { Container, Button } from "react-bootstrap";
import "./Pages/Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

const HomeHeader = () => {

   const [searchTerm, setSearchTerm] = useState("")

   return (
      <div className="header py-5 md-px-5">
         <Container>
            <h1 className="fw-bold text-white pt-5 h-text">Welcome!</h1>
            <div className="display-5 pb-3 text-white">
               Millions of movies, TV shows and people to discover. Explore and enjoy.
            </div>
            <form>
               <input
                  className="form-control py-2 my-2"
                  placeholder="Search Movies"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
               />

            <Link to={`search/${searchTerm}`}>
               <Button type="submit" variant="dark" className="md:btn-lg">
                  Search
               </Button></Link>
            </form>
         </Container>
      </div>
   );
};

export default HomeHeader;
