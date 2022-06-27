import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function Performance ({data}) {

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
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={500}
                    height={500}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickFormatter={physicalQualities}  />
                    <Radar 
                        dataKey="value"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart> 
            </div>
            {/* <div className="">{data.kind[1]} </div> */}
        </>
    )
}

// function Performance() {
//     const data = [
//       { value: 80, kind: 1 },
//       { value: 120, kind: 2 },
//       { value: 140, kind: 3 },
//       { value: 50, kind: 4 },
//       { value: 200, kind: 5 },
//       { value: 90, kind: 6 },
//     ];
  
//     return (
//       <RadarChart
//         cx={300}
//         cy={250}
//         outerRadius={150}
//         width={500}
//         height={500}
//         data={data}
//       >
//         <PolarGrid />
//         <PolarAngleAxis dataKey="kind" />
//         <Radar
//           name="Mike"
//           dataKey="value"
//           stroke="#8884d8"
//           fill="#8884d8"
//           fillOpacity={0.6}
//         />
//       </RadarChart>
//     );
//   }

export default Performance