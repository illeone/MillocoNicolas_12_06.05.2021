import { useParams } from 'react-router';
import useApi from '../utils/useApi.js';

import Users from '../components/Users';
import Score from '../components/Score';
import InfoList from '../components/InfoList';
import Activity from '../components/Activity';
import Average from '../components/Average.js';
import Performance from '../components/Performance.js';

import calorie from '../assets/calorie.svg'
import protein from '../assets/protein.svg'
import carb from '../assets/carb.svg'
import lipid from '../assets/lipid.svg'



function Dashboard() {
    const {id} = useParams();
    const userInfos = useApi(`../${id}/users.json`);
    const activity = useApi(`../${id}/activity.json`);
    const average = useApi(`../${id}/average.json`);
    const performance = useApi(`../${id}/performance.json`);

    if (userInfos === null || activity === null) {
        // console.log("chargement");
        return <p>chargement...</p>      
    }
    // console.log(userInfos.data)

    // console.log(userInfos.data.userInfos.firstName);
    // console.log(activity);

    return (
        <>
        
            <div className="">
                
                <div className="">           
                    {userInfos && <Users className="" name={userInfos.data.userInfos.firstName}/>}
                    {userInfos && <Score today={userInfos.data.todayScore} />}
                </div>

                <aside>
                    {userInfos && <InfoList icon={calorie} info={userInfos.data.keyData.calorieCount} value="kCal" title="Calories" />}
                    {userInfos && <InfoList icon={protein} info={userInfos.data.keyData.proteinCount} value="g" title="Proteines" />}
                    {userInfos && <InfoList icon={carb} info={userInfos.data.keyData.carbohydrateCount} value="g" title="Glucides" />}
                    {userInfos && <InfoList icon={lipid} info={userInfos.data.keyData.lipidCount} value="g" title="Lipides" />} 
                </aside>
                {activity && <Activity data={activity.data.sessions} />}
                <div>
                    {average && <Average data={average.data.sessions} />}
                </div>
                <div>
                    {performance && <Performance data={performance.data} />}
                </div>
                

            </div>

        </>
    )
}

export default Dashboard;