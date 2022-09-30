import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
        
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data.results);
                setPending(false);
                setError(null);
                
            })
            .catch((err) => {
                setError(err.message);
            });
        }, [url]);

        return { data, pending, error }
}
 
export default useFetch;