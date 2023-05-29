import axios from "axios";
import { useEffect, useState } from "react";
const api = 'http://localhost:3000/lista-produtos';
function useFecth() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(api)
            .then(res => setData(res.data))
            .catch(e => console.log(e))
            .finally(setIsLoading(false));
    }, [])

    return [data, isLoading]
}

export default useFecth;