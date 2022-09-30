import {useState , useEffect } from 'react'

const Cast = ({ id,type }) => {

    const [casts, setCasts] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=5e75cbabb35cdb37b81c1b89c24e4463&language=en-US`)

        .then(res => {
            return res.json()
        }).then(data => {
            setCasts(data.cast)
            console.log(data.cast)
        })
    }, [id]);

    

    return ( 
        <>
          
            {casts.map((cast) => (
                <div className="col-6 col-md-2 py-3" key={cast.id}>
                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`} style={{borderRadius: '7px'}}  alt="" />
                    <p>{cast.original_name}</p> as <p>{cast.character}</p>
                </div>
            ))
            }
        </>
     );
}
 
export default Cast;