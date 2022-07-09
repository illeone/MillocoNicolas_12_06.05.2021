import axios from 'axios';
import { useEffect, useState } from 'react';
import ConvertData from './mapper/ConvertData';

const useApi = (url) => {
	// console.log("useApi")
	const [data, setData] = useState(null);
        
    useEffect(() => {
                axios.get(url).then(res => setData(ConvertData(res, url)));
					
        }, [url]);

		// console.log(data);
	return data;
	
}

// const useApi = (url) => {
// 	const [data, setData] = useState(null);
        
//     useEffect(() => {
//                 axios.get(url).then(res => {setData(res.data);
// 				})
//         }, [url]);

// 	return data;	
// }


export default useApi