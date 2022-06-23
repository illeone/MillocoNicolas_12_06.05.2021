import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function Average ({data}) {

    return (

    <div className="average">
      <h3 className="average_title">Durée moyenne des sessions</h3>
        <LineChart
            width={258}
            height={250} 
            data={data}
            margin={{
                top: 5, 
                right: 30,
                left: 20,
                bottom: 5 
            }}
        >
            <CartesianGrid
            vertical={false}
            horizontal={false}
            />
            <XAxis
            dataKey="day"
            dy={-10}
            axisLine={false}
            tickLine={false}
            mirror={true}
            tick={{fill:'rgba(255, 255, 255, 0.504)'}}


            />
            <YAxis
            width={5}
            tickCount={false}
            domain={["dataMin-28", 'dataMax + 50']}
            // domain={[4, "dataMax + 60"]}
            
            
            />
            <Tooltip 
                
                cursor={{ stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 40, }}
            />

            <Line
            type="monotone"
            dataKey="sessionLength"
            strokeWidth={3}
            fill="#FFFFFF"
            stroke="#FFFFFF"         
            dot={false}
            activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }}
            //   activeDot={<CustomActiveDot />}
            />
        </LineChart>
    </div>
    )
}

export default Average
