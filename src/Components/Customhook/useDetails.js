import { useEffect, useState } from "react";

const useDetails = (url) => {

    const [details, setDetails] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setDetails(data);
            setFetching(false);
        });
    }, [url]);
        return {details, fetching};
    }
 
export default useDetails;