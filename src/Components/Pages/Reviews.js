import useFetch from "../Customhook/UseFetch";
import { useParams } from "react-router-dom";

const Reviews = () => {

    const { id, type } = useParams()

    const { data: reviews, pending } = useFetch(`https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US&page=1`)
    return ( 
        <div className="b" style={{height: "100%"}}>
            <hr />
            <div className="container mt-4">
                <div className="row">
                    {!pending ? (
                        reviews.length > 0 ? (
                            reviews.map((r)=>(
                       
                                <div className="col-11 p-4 my-3 mx-2" style={{border: "2px solid #dc3545", borderRadius: "10px"}} key={r.id}>
                                <img src={r.author_details.avatar_path} alt="" />
                                <h6>{r.author_details.username}</h6>
                                <p className="lead">{r.content}</p>
                            </div>
                            ))
                        ):(
                            <div><h1>No Review Available</h1></div>
                        )
                    ):(
                        <div>Loading.....</div>
                    )
                
                }

                    {/* {pending ? (
                        <div>Loading.....</div>
                    ) : ())} */}
                    
                    

                    
                </div>
            </div>
 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
     );
}
 
export default Reviews;