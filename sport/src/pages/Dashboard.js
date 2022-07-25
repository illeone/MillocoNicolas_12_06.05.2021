import { useParams } from 'react-router-dom';
import React, { useState } from "react";
import useApi from '../utils/useApi.js';

import Json from '../components/Json.js';

/**
 * Display the dashboard
 * @returns {JSX}
 */
function Dashboard() {
    const {id} = useParams();
    const [btnType, setBtnType] = useState(true);

        const userInfos = useApi(`http://localhost:3000/user/${id}`);
        const activity = useApi(`http://localhost:3000/user/${id}/activity`);
        const average = useApi(`http://localhost:3000/user/${id}/average-sessions`);
        const performance = useApi(`http://localhost:3000/user/${id}/performance`);
  
        const userInfos1 = useApi(`../${id}/users.json`);
        const activity1 = useApi(`../${id}/activity.json`);
        const average1 = useApi(`../${id}/average-sessions.json`);
        const performance1 = useApi(`../${id}/performance.json`);

    if (userInfos === null || activity === null || average === null || performance === null) {
        return <p>chargement...</p>  
    }	

    return (
        <>
            <div className="main">
                             
                {btnType ?
                <Json  type={btnType} userInfos={userInfos} activity={activity} average={average} performance={performance}/>
                : <Json  type={btnType} userInfos={userInfos1} activity={activity1} average={average1} performance={performance1}/>}
              
                <div>
                    <label className="button-switch">
                        <input 
                            type="checkbox"
                            value={btnType}
                            onClick={() => setBtnType(!btnType)}>                       
                        </input>
                        <i className="btn_switch"></i>
                        <span className='json'>json</span>
                        <span className='api'>api</span>
                    </label>
                </div>
            </div>

        </>
    )
}

export default Dashboard;
