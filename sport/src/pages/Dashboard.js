import { useParams } from 'react-router';
import useApi from '../utils/useApi.js';

import Users from '../components/Users';
import Score from '../components/Score';
import InfoList from '../components/InfoList';
import Activity from '../components/Activity';

import calorie from '../assets/calorie.svg'
import protein from '../assets/protein.svg'
import carb from '../assets/carb.svg'
import lipid from '../assets/lipid.svg'
// import { useEffect, useState } from 'react';
// import axios from 'axios';



function Dashboard() {
    const {id} = useParams();
    const userInfos = useApi(`../${id}/users.json`);
    const activity = useApi(`../${id}/activity.json`);

    if (userInfos === null || activity === null) {
        console.log("chargement");
        return <p> chargement</p>      
    }

    // if (userInfos.length === 0) return null;


    console.log(userInfos.data.firstName);
    console.log(activity);

    // const [data, setData] = useState([]);
        
    // useEffect((url) => {

    //             const res =  axios.get(url);
    //             setData(res.data);
	// 			console.log(res);

    //     }, []);

        // if (userInfos.length === 0) return null;

        // console.log(userInfos)

    return (
        <>
        
        <div className="">
            
            <div className="">           
                {userInfos && <Users className="" name={userInfos.data.userInfos.firstName}/>}
                {userInfos && <Score data={userInfos.data} />}
            </div>

            <aside>
                {userInfos && <InfoList icon={calorie} info={userInfos.data.keyData.calorieCount} value="kCal" title="Calories" />}
                {userInfos && <InfoList icon={protein} info={userInfos.data.keyData.proteinCount} value="g" title="Proteines" />}
                {userInfos && <InfoList icon={carb} info={userInfos.data.keyData.carbohydrateCount} value="g" title="Glucides" />}
                {userInfos && <InfoList icon={lipid} info={userInfos.data.keyData.lipidCount} value="g" title="Lipides" />} 
            </aside>
            {userInfos && <Activity data={activity.data.sessions} />}
            

        </div>

        </>
    )
}

export default Dashboard;