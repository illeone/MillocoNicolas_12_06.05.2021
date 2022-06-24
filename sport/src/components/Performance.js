import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis  } from 'recharts';

function Performance ({data}) {
    console.log(data)
    console.log(data.kind)
    console.log(data.data)


    return(
        <>
            <div className='performance'>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickLine={true} axisLine={true} tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" stroke="#FF0100" fill="#FF0100" fillOpacity={0.6} />
                </RadarChart>   
            </div>
            <div className="">{data.kind[1]} </div>
        </>
    )
}

export default Performance