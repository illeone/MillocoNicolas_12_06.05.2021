import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function Average ({data}) {

    return (

    <div className="average">
      <h3 className="average_title">Durée moyenne des sessions</h3>
        <LineChart
            width={258}
            height={305} 
            data={data}
            margin={{
                top: 32, 
                right: 20,
                left: 16,
                bottom: 10, 
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
            tick={{fill:'#f9b7b7'}}


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
            type="natural"
            dataKey="sessionLength"
            strokeWidth={3}
            stroke="#f9b7b7"         
            dot={false}
            activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }}
            //   activeDot={<CustomActiveDot />}
            />
        </LineChart>
    </div>
    )
}

export default Average
