import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

function CustomToolTip({active, payload}) {
    if (active){
        return (
            <div className="tool_tip">
                <div className="tool_tip_kg">{payload[0].value}kg</div>
                <div className="tool_tip_kcal">{payload[1].value}Kcal</div>
                {/* <div className="">{payload[2].value}day</div> */}
            </div>      
        );        
    } else {
    return null
    }
}

function numberAxis(number) {
    return number + 1
  }


function Activity({data}) {
    
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
            <BarChart data={data} width={730} height={300} barGap={8}>
                <CartesianGrid horizontal="true" vertical="" strokeDasharray="3 3" />
                <XAxis tickFormatter={numberAxis} tickLine={false} axisLine={false}  tick={{fontSize: 12}} padding={{ left: -40, right: -40 }}/>
                <YAxis dataKey="kilogram" orientation="right" yAxisId="right" tickLine={false} axisLine={false} tickCount={3} domain={['dataMin-1']}  />
                <YAxis hide={true} yAxisId="left"   />
                <Tooltip content={CustomToolTip}/>
                <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" barSize={9} radius={[50, 50, 0, 0]} />
                <Bar dataKey="calories" yAxisId="left" fill="#E60000" barSize={9} radius={[50, 50, 0, 0]} />
                {/* <Bar dataKey="day" fill="#E60000" barSize={9} radius={[50, 50, 0, 0]} /> */}
                <Legend /> 
            </BarChart>
        </div>
    );
}

export default Activity;

