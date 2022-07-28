import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */
function Performance ({data}) {

    /**
    * @param {number} qualities
    * @return {string} corresponding to the traduction in french qualities
    */
    function physicalQualities(qualities) {
        if (qualities === 1) return 'Intensité'
        if (qualities === 2) return 'Vitesse'
        if (qualities === 3) return 'Force'
        if (qualities === 4) return 'Endurance'
        if (qualities === 5) return 'Énergie'
        if (qualities === 6) return 'cardio'
        return qualities
    }

    return(
        <>
            <div className='performance'>
                <RadarChart 
                    className="radar-chart"
                    cx={130}
                    cy={185}
                    outerRadius="75%"
                    width={258}
                    height={290}
                    data={data}>
                        <PolarGrid gridType="polygon" />
                        <PolarAngleAxis	
                            dataKey="kind" 
                            tickFormatter={physicalQualities}  
                            stroke='white' 
                            tickLine={false} 
                            axisLine={false}  
                            tick={{ fontSize: 10 }}/>
                        <Radar
                            dataKey='value' 
                            stroke='#FF0101'	
                            fill='#FF0101' 
                            fillOpacity={0.7}
                             />
                    </RadarChart>    
            </div>
        </>
    )
}

Performance.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Performance