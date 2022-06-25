import axios from 'axios';
import { useEffect, useState } from 'react';



const useApi = (url) => {
	// console.log("useApi")
	const [data, setData] = useState(null);
        
    useEffect(() => {
                axios.get(url).then(res => {setData(res.data);
					// console.log(url);
					// console.log(res.data);
				})
				// fetch(url).then(res => res.json())
				// .then(res => {setData(res.data);
				// 	console.log(url);
				// 	console.log(res.data);})
				// .catch(error => console.log(error))

        }, [url]);

		// console.log(data);
	return data;
	
}

export default useApi