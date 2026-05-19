import { revenueData } from '../../data/mockData';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './RevenueChart.css';

function RevenueChart() {
  const chartData = revenueData.labels.map((label, i) => ({
    label,
    value: revenueData.values[i]
  }));

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Revenue <span>Trend</span></div>
        <div className="card-action">Export →</div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f5a623" stopOpacity={0.25}/>
              <stop offset="95%" stopColor="#f5a623" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="label" tick={{fill:'#6b7280', fontSize:11}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fill:'#6b7280', fontSize:11}} axisLine={false} tickLine={false} tickFormatter={v => `₦${v/1000}k`}/>
          <Tooltip
            contentStyle={{background:'#181b22', border:'1px solid #1f2330', borderRadius:'8px'}}
            labelStyle={{color:'#6b7280'}}
            itemStyle={{color:'#e8eaf0'}}
            formatter={v => [`₦${v.toLocaleString()}`, 'Revenue']}
          />
          <Area type="monotone" dataKey="value" stroke="#f5a623" strokeWidth={2.5} fill="url(#colorRevenue)"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RevenueChart;