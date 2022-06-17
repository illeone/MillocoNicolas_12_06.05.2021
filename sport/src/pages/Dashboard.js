import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import { userInfos } from '../utils/data.js';

import Users from '../components/Users';
import InfoList from '../components/InfoList';

import calorie from '../assets/calorie.svg'
import protein from '../assets/protein.svg'
import carb from '../assets/carb.svg'
import lipid from '../assets/lipid.svg'









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

            <aside>
                {data && <InfoList icon={calorie} info={data.keyData.calorieCount} value="kCal" title="Calories" />}
                {data && <InfoList icon={protein} info={data.keyData.proteinCount} value="g" title="Proteines" />}
                {data && <InfoList icon={carb} info={data.keyData.carbohydrateCount} value="g" title="Glucides" />}
                {data && <InfoList icon={lipid} info={data.keyData.lipidCount} value="g" title="Lipides" />} 
            </aside>
            

        </div>

        </>
    )
}

export default Dashboard;