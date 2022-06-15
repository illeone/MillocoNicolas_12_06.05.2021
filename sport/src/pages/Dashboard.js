import Header from "../components/Header";
import LateralBar from "../components/LateralBar";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import Users from '../components/Users';
import { userInfos } from '../service/data.js';

import Average from "../components/Average";







function Dashboard() {
    const {id} = useParams();
    const [data, setData] = useState([]);
        
    useEffect(() => {
            const getData = async () => {
                const res = await userInfos(id);
                setData(res.data);
            };
            getData();
        }, [id]);
        if (data.length === 0) return null;

        console.log(data)

    return (
        <>
        
        <div className="">
            
            <div className="">
            
            {data && <Users className="" name={data.userInfos.firstName}/>}

            </div>
            <Average />

        </div>

        </>
    )
}

export default Dashboard;