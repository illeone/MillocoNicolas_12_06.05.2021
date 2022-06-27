import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function Performance ({data}) {
    console.log(data)
    console.log(data.kind)
    console.log(data.data)


    return(
        <>
            <div className='performance'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" tickLine={true} axisLine={true} tick={{ fontSize: 10 }} />
                        <PolarRadiusAxis />
                        <Radar dataKey="value" stroke="#FF0100" fill="#FF0100" fillOpacity={0.6} />
                    </RadarChart> 
                </ResponsiveContainer>
            </div>
            <div className="">{data.kind[1]} </div>
        </>
    )
}

export default Performance