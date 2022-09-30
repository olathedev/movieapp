import {useState , useEffect } from 'react'
import React from "react";
import Slider from "react-slick";

const Cast = ({ id,type, settings }) => {

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
          <Slider {...settings}>
            {casts.map((cast) => (
                <div className="" key={cast.id}>
                    <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`} style={{borderRadius: '7px'}}  alt="" />
                    <p>{cast.original_name} as {cast.character}</p>
                </div>
            ))
            }
            </Slider>
        </>
     );
}
 
export default Cast;