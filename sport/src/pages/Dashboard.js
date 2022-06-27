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

    if (userInfos === null || activity === null || average === null || performance === null) {
        // console.log("chargement");
        return <p>chargement...</p>      
    }
    // console.log(userInfos.data)

    // console.log(userInfos.data.userInfos.firstName);
    // console.log(activity);

    return (
        <>
        
            <div className="main">
                
                
                <div className="graphics">           
                    {userInfos && <Users className="" name={userInfos.data.userInfos.firstName}/>}
                    {activity && <Activity data={activity.data.sessions} />}
                    <div className="small_graphics">
                        {average && <Average data={average.data.sessions} />}
                        {performance && <Performance data={performance.data.data} name={performance.data.kind} />}
                        {userInfos && <Score today={userInfos.data.todayScore} />}
                    </div>
                </div>

                <aside className="aside">
                    {userInfos && <InfoList icon={calorie} info={userInfos.data.keyData.calorieCount} value="kCal" title="Calories" />}
                    {userInfos && <InfoList icon={protein} info={userInfos.data.keyData.proteinCount} value="g" title="Proteines" />}
                    {userInfos && <InfoList icon={carb} info={userInfos.data.keyData.carbohydrateCount} value="g" title="Glucides" />}
                    {userInfos && <InfoList icon={lipid} info={userInfos.data.keyData.lipidCount} value="g" title="Lipides" />} 
                </aside>

            </div>

        </>
    )
}

export default Dashboard;