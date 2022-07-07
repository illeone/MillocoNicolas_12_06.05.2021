import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function Average ({data}) {

    function weekDays(day) {
        if (day === 1) return 'L'
        if (day === 2) return 'M'
        if (day === 3) return 'M'
        if (day === 4) return 'J'
        if (day === 5) return 'V'
        if (day === 6) return 'S'
        if (day === 7) return 'D'
        return day
      }

    function CustomToolTip({ active, payload }) {
        if (active) {
          return (
            <div className='tool_tip_average'>         
              <p className='tool_tip_average_min'>{payload[0].value} min</p>
            </div>
          )
        } else {       
        return null
        }
    }

    return (

    <div className="average">
      <h3 className="average_title">Durée moyenne des sessions</h3>
        <LineChart
            width={258}
            height={320} 
            data={data}
            margin={{
                top: 48, 
                right: 20,
                left: 16,
                bottom: 0, 
            }}
            onMouseMove={(e) => {
              if (e.isTooltipActive === true) {
                let div = document.querySelector('.average')
                let windowWidth = div.clientWidth
                let mouseXpercentage = Math.round(
                  (e.activeCoordinate.x / windowWidth) * 100
                )
                // @ts-ignore
                div.style.background = `linear-gradient(90deg, rgba(255,0,0,1.5) ${mouseXpercentage}%, rgba(220,0,0,1.5) ${mouseXpercentage}%`
              }
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
            tickFormatter={weekDays}
            />

            <YAxis
            width={5}
            tickCount={false}
            domain={["dataMin-38", 'dataMax + 50']}
            />

            <Tooltip 
            content={<CustomToolTip active={true} payload={data} />}
            cursor={{ stroke: 'none'}}
            />
            {/* <defs>
              <linearGradient id="colorLine" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="green" />
                <stop offset={`${0}%`} stopColor="yellow" />
                <stop offset={`${100}%`} stopColor="black" />
              </linearGradient>
            </defs> */}

            <Line
            type="natural"
            dataKey="sessionLength"
            strokeWidth={3}
            stroke="#f9b7b7"         
            dot={false}
            activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }}
            />
        </LineChart>
    </div>
    )
}

export default Average
