import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';

/** create a PieChart with score value
* @param  {number} today
* @return {JSX}  
*/
function Score({today}) {
    
    const data01 = [
        { value: today },
        { value: 1 - today }, 
    ];
    
    return (
        <div className="score">        
            <h1 className='score_title'>Score</h1>
            <div className='score_circle'>
                <PieChart width={255} height={258}>       
                    <Pie 
                    data={data01}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    stroke="transparent"
                    >

                        {data01.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={index === 0 ? '#FF0000' : '#fbfbfb'}
                                cornerRadius="50%"
                            />
                        ))}
                    </Pie>

                 <circle cx="133" cy="133" r="75" fill="#ffffff" />                     
                </PieChart>  

                <div className="score_infos">
                    <p className="score_pourcentage" >
                        {data01[0].value * 100 }% 
                    </p>
                    <p className="score_text">de votre objectif</p>
                </div>  
            </div>   
        </div>
      );
}

Score.propTypes = {
    today: PropTypes.number.isRequired,
  }

export default Score;