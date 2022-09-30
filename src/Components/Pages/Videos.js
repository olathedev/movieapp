import useFetch from "../Customhook/UseFetch";
import { useParams } from "react-router-dom";

const Videos = () => {
  
    const { id, type } = useParams();

    const {data: trailer, pending} = useFetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US`)
    
    return ( 
        <div className="container">
            <hr />
            <div className="row text-center my-4">
            {!pending ? (
                trailer.map((tt)=>(
                    <div className="col-12 col-md-6" key={tt.id}>
                           <iframe title={tt.name} height="345" src={`https://www.youtube.com/embed/${tt.key}`}></iframe>
                           <p className="lead">{tt.type}</p>
                    </div>
                ))
            ):(
                <div>Loading...</div>
            )}
            </div>
        </div>
     );
}
 
export default Videos;