import axios from 'axios';
import { useEffect, useState } from 'react';
import ConvertData from './mapper/ConvertData';
import { useNavigate } from 'react-router-dom';

const useApi = (url) => {
	const [data, setData] = useState(null);
	const navigate = useNavigate()
        
    useEffect(() => {
		axios.get(url).then(res => setData(ConvertData(res.data, url))).catch( error => navigate("*"));

					
        }, [url]);

	return data;
}

export default useApi























// const useApi = (url) => {
// 	// console.log("useApi")
// 	const [data, setData] = useState(null);
        
//     useEffect(() => {
//                 axios.get(url).then(res => {
// 					const datas = ConvertData(res.data, url)
// 					// console.log(datas)
// 					if (datas) {setData(datas)}
// 				});
					
//         }, [url]);

// 		// console.log(data);
// 		// console.log(url);
// 	return data;
	
// }







// const useApi = (url) => {
// 	const [data, setData] = useState(null);
        
//     useEffect(() => {
//                 axios.get(url).then(res => {setData(res.data);
// 				})
//         }, [url]);

// 	return data;	
// }
