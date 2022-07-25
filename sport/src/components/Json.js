import Activity from "./Activity";
import Average from "./Average";
import InfoList from "./InfoList";
import Performance from "./Performance";
import Score from "./Score";
import Users from "./Users";

import calorie from '../assets/calorie.svg'
import protein from '../assets/protein.svg'
import carb from '../assets/carb.svg'
import lipid from '../assets/lipid.svg'

const Json = ({type, userInfos, activity, average, performance}) => {
    console.log(userInfos);
        
    return (
        <>    
                <div className="graphics">           
                    {userInfos && <Users className="" name={userInfos.userInfos.firstName}/>}
                    {activity && <Activity data={activity.sessions} />}
                    <div className="small_graphics">
                        {average && <Average data={average.sessions} />}
                        {performance && <Performance data={performance.data} name={performance.kind} />}
                        {userInfos && <Score today={userInfos.todayScore || userInfos.score}  />}
                    </div>
                </div>

                <aside className="aside">
                    {userInfos && <InfoList icon={calorie} info={userInfos.keyData.calorieCount} value="kCal" title="Calories" />}
                    {userInfos && <InfoList className="iconListProt" icon={protein} info={userInfos.keyData.proteinCount} value="g" title="Protéines" />}
                    {userInfos && <InfoList icon={carb} info={userInfos.keyData.carbohydrateCount} value="g" title="Glucides" />}
                    {userInfos && <InfoList icon={lipid} info={userInfos.keyData.lipidCount} value="g" title="Lipides" />} 
                </aside>
        </>
    )
}

export default Json;


