import axios from 'axios';
import { useEffect, useState } from 'react';
import ConvertData from './mapper/ConvertData';
import { useNavigate } from 'react-router-dom';

const useApi = (url) => {
	// console.log(url);
	const [data, setData] = useState(null);
	const navigate = useNavigate()
        
    useEffect(() => {
		axios.get(url).then(res => setData(ConvertData(res.data, url))).catch( error => navigate("*"));
					
        }, [url]);

	return data;
}

export default useApi