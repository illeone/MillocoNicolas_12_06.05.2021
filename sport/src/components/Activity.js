// import { useParams } from 'react-router';
// import { useState,useEffect } from 'react';

import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
// import { activity } from '../utils/data';



function Activity({data}) {


	if (data.length === 0) return null;
	console.log(data)
    
    return (  
        <div className="activity">
            {/* <div>
                <h3>Activité quotidienne</h3>
                <div>
					<div>
					
						<p>Poids (kg)</p>
					</div>
					<div>

						<p>Calories brûlées (kCal)</p>
					</div>
				</div>
            </div> */}
            <BarChart width={730} height={300} data={data}>
            <CartesianGrid horizontal="true" vertical="" />
                <XAxis dataKey="day" tick={{fontSize: 12}}/>
                <YAxis dataKey="calories" orientation="right" />
                <Tooltip/>
                <Legend />
                <Bar dataKey="kilogram" fill="#282D30" barSize={9} radius={[50, 50, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" barSize={9} radius={[50, 50, 0, 0]} />
            </BarChart>
        </div>
    );
}

export default Activity;

