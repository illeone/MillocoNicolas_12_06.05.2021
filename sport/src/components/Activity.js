import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts";
import PropTypes from 'prop-types';

/**
* @param {boolean} active
* @param {array} payload
*/ 
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

/**
* @param {number} number
*/
function numberAxis(number) {
    return number + 1
  }

/**
 * Render a BarChart with user activity Data
 * @return {JSX}
 */
function Activity({data}) {
    
    return (  
        <div className="activity">
            <div className="activity_title">
                <h3>Activité quotidienne</h3>
                <div className="activity_legend">
					<div className="activity_legend_info">
                        <p className="activity_legend_kg_circle"></p>				
						<p className="activity_legend_text">Poids (kg)</p>
					</div>
					<div className="activity_legend_info">
                        <p className="activity_legend_kcal_circle"></p>
						<p className="activity_legend_text">Calories brûlées (kCal)</p>
					</div>
				</div>
            </div>
            <BarChart data={data} width={800} height={210} barGap={8}>
                <CartesianGrid horizontal="true" vertical="" strokeDasharray="3 3" />
                <XAxis tickFormatter={numberAxis} tickLine={false} axisLine={true} stroke="#9B9EAC" dy={10}  tick={{fontSize: 12,}} padding={{ left: -45, right: -46 }}/>
                <YAxis dataKey="kilogram" orientation="right" yAxisId="right" stroke="#9B9EAC" tickLine={false} axisLine={false} dx={40} tickCount={3} domain={['dataMin-1']}  />
                <YAxis hide={true} yAxisId="left"   />
                <Tooltip content={CustomToolTip}  />
                <Bar dataKey="kilogram" yAxisId="right" fill="#282D30" barSize={9} radius={[50, 50, 0, 0]} />
                <Bar dataKey="calories" yAxisId="left" fill="#E60000" barSize={9} radius={[50, 50, 0, 0]} />
                {/* <Bar dataKey="day" fill="#E60000" barSize={9} radius={[50, 50, 0, 0]} /> */}
                {/* <Legend />  */}
            </BarChart>
        </div>
    );
}

CustomToolTip.propTypes = {
    active: PropTypes.bool.isRequired,
	payload: PropTypes.array.isRequired,
}

Activity.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Activity;

